const fs = require('fs');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
module.exports =async (request, response,path_filename)=>{
    try {
        const stats  = await stat(path_filename);
        if(stats.isFile()){
            response.statusCode = 200;
            response.setHeader("Content-Type",'text/plain');
            fs.createReadStream(path_filename).pipe(response)
        }else if(stats.isDirectory()){
                const files = await readdir(path_filename);
                response.statusCode = 200;
                response.setHeader('Content-Type','text/plain');
                response.end(files.join(','))
        }
    }catch (e) {
        console.log(e);
        response.statusCode = 404;
        response.setHeader('Content-Type','text/plain');
        response.end(`${path_filename} is not found`)
    }
}