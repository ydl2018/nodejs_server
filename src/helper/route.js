const fs = require('fs');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const path = require('path');
const compress = require('./compress');
const mime = require('./mime');
// 除了require,一般都用path 属性设置绝对路径
const tplPath = path.join(__dirname,'../template/dir.tpl');
const source = fs.readFileSync(tplPath); // 二进制读取
const range = require('./range');
const HandleBars = require('handlebars');
const template = HandleBars.compile(source.toString()); //让HandleBars接手
const isFresh = require('./cache');
module.exports =async (request, response,path_filename,conf)=>{
    try {
        const stats  = await stat(path_filename);
        //　Read the stats attribute of the file
        if(stats.isFile()){
            response.setHeader("Content-Type",mime(path_filename));
            // determine if there is a cache
            console.log(isFresh(stats, request, response));

            if(isFresh(stats,request,response)){
                response.statusCode = 304;
                response.end();
                return
            }
            let rs;
            const {code,start,end} = range(stats.size,request,response);
            if(code===200){
                response.statusCode = 200;
                rs = fs.createReadStream(path_filename)
            }else{
                response.statusCode = 206;
                rs = fs.createReadStream(path_filename,{start,end})
            }
            // compress
            if(path_filename.match(conf.compress)){
               rs = compress(rs,request,response)
            }
            rs.pipe(response)
        }else if(stats.isDirectory()){
                const files = await readdir(path_filename);
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                let dir = path.relative(conf.root,path_filename);
                const data = {
                    title:path.basename(path_filename),
                    files,
                    dir:dir?`/${dir}`:''
                };
                response.end(template(data))
        }
    }catch (e) {
        console.log(e);
        response.statusCode = 404;
        response.setHeader('Content-Type','text/plain');
        response.end(`${path_filename} is not found`)
    }
}