const conf = require("./config/config");
const http = require('http');
const path = require('path');
const route = require('./helper/route');
// this is a server class
// it requires an argument which is used for set the custom parameters
class Server {
    constructor(config) {
        this.config = Object.assign({},conf,config)
    }
    // start the server
    start(){
        const server = http.createServer((req,res)=>{
            const path_name = path.join(this.config.root,req.url);
            route(req,res,path_name,this.config)
        });

        server.listen(this.config.port,this.config.hostname,()=>{
            const addr = `http://${this.config.hostname}:${this.config.port}`;
            console.info(`server is start at=>${addr}` )
        })
    }
}
module.exports = Server;

