const conf = require("./config/config.js");
const http = require('http');
const path = require('path');
const route = require('./helper/route');
const server = http.createServer((req,res)=>{
    const path_name = path.join(conf.root,req.url)
    route(req,res,path_name)

});
server.listen(conf.port,conf.hostname,()=>{
    const addr = `http://${conf.hostname}:${conf.port}`
    console.info(`server is start at=>+${addr}` )
})
