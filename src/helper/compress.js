const {createGzip, createDeflate} = require('zlib');
// compress the file
module.exports = (rs, req, res) => {
    const acceptEncoding = req.headers['accept-encoding'];
    //　if it do not match, it will return rs
    if (!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
        return rs
    }
    // it will use 'gzip' or 'deflate' to compress files
    if (acceptEncoding.match(/\bgzip\b/)) {
        res.setHeader("Content-Encoding", "gzip");
        return rs.pipe(createGzip())
    } else if (acceptEncoding.match(/\bdeflate\b/)) {
        res.setHeader('Content-Encoding', 'deflate');
        return rs.pipe(createDeflate())
    }
}