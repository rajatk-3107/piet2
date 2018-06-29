const http = require('http')
http.createServer((req, res) => {
    console.log(req.headers)
    res.write('sbghsffgh')
    res.end()
}).listen(8000)