const yargs = require('yargs');
const Server = require('./app');

//  use yargs to accept the arguments and send it to server
const argvs = yargs.usage('anywhere [options]').option('p',{
    alias:'port',
    describe:'port number',
    default:"3000",
}).option('h',{
    alias:'hostname',
    describe: "hostname",
    default: '127.0.0.1'
}).option('d',{
    alias:'root',
    describe:'root path',
    default:process.cwd()
}).argv;

// create a server
const server = new Server(argvs);

// start the server
server.start();
