const path = require('path');
const mimeTypes = {
    'css':"text/css",
    'js':'text/js',
    'html':'text/html',
    'png':'image/png',
    'txt':'text/plain',
    'jpg':'text/jpeg',
    'json':'application/json'
}
module.exports = (filePath)=>{
    let ext = path.extname(filePath).split('.')[1].toLowerCase()
    if(!ext){
        ext = filePath
    }
    return mimeTypes[ext] || mimeTypes['txt']
}