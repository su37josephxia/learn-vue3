const http = require('http')
const fs = require('fs')
const {resolve} = require('path')
const server = http.createServer((req,res) => {
    console.log('req:',req.url)

    if(req.url === '/'){
        const readStream = fs.createReadStream('./index.html')
        readStream.pipe(res)
    } else if(req.url === '/favicon.ico'){
        res.end('')
    } else {
        res.setHeader('Content-Type','text/javascript')
        const srcPath = resolve(__dirname , '.' + req.url)
        const readStream = fs.createReadStream(srcPath)
        readStream.pipe(res)
    }

})
server.listen(4000)