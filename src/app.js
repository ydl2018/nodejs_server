const conf = require("./config/config.js")
const http = require('http')
const path = require('path')

const server = http.createServer((req,res)=>{
    const path_name = path.join(conf.root,req.url)


});
server.listen(conf.port,conf.hostname,()=>{
    const addr = `http://${conf.hostname}:${conf.port}`
    console.info(`server is start at=>+${addr}` )
})