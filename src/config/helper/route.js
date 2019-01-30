const fs = require('fs');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
module.exports =async (request, response)=>{

    try {
        const stats  = stat(path_filename);
        if(stats.isFile()){
            response.statusCode = 200
            response.setHeader("Content-Type",'text/plain')
            fs.createReadStream(path_filename).pipe(response)
        }else if(stats.isDirectory()){
            readdir(path_filename,(err,files)=>{
                response.statusCode = 200
                response.setHeader('Content-Type','text/plain')
                response.end(files.join(','))
            })
        }

    }catch (e) {
        response.statusCode = 404
        response.setHeader('Content-Type','text/plain')
        response.end(`${path_filename} is not found`)
    }
}