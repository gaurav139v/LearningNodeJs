const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url);
    
    res.setHeader('Content-Type', 'text/html');
    
    if (req.url == '/'){
        const data = fs.readFileSync('index.html');
        res.statusCode = 200;
        res.end(data);

    }else if (req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>About the website</h1><p>Content</p>');

    }else{
        // res.hea(); // for testing nodemon
        res.statusCode = 404;
        res.end('<h1>Page Not Found</h1>')
    }
});

server.listen(port, ()=>{
    console.log('Server is listening at :', port);
})