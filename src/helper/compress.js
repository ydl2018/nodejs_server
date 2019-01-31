const {createGzip, createDeflate} = require('zlib')
module.exports = (rs, req, res) => {
    const acceptEncoding = req.headers['accept-encoding'];
    //　match匹配不成功，将返回null
    if (!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
        return rs
    }
    if (acceptEncoding.match(/\bgzip\b/)) {
        res.setHeader("Content-Encoding", "gzip");
        return rs.pipe(createGzip())
    } else if (acceptEncoding.match(/\bdeflate\b/)) {
        res.setHeader('Content-Encoding', 'deflate');
        return rs.pipe(createDeflate())
    }
}