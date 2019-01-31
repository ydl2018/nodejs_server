const path = require('path');
// it only contains several kinds of mimeTypes
const mimeTypes = {
    'css':"text/css",
    'js':'text/js',
    'html':'text/html',
    'png':'image/png',
    'txt':'text/plain',
    'jpg':'image/jpeg',
    'json':'application/json',
    'md':'text/md'
};
module.exports = (filePath)=>{
    // get the suffix name of the file
    let ext = path.extname(filePath).split('.')[1].toLowerCase();
    if(!ext){
        ext = filePath
    }
    return mimeTypes[ext] || mimeTypes['txt']
}