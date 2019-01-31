module.exports = {
    port:3000,
    hostname:"localhost",
    root:process.cwd(),
    compress:/\.(html|js|css|md)/,
    cache:{
        expires:true,
        cacheControl:true,
        maxAge:600,
        lastModified:true,
        etag:true
    }
}
