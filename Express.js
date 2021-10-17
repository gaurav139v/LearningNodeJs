const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000
// app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
    res.sendFile('/about.html', {root: __dirname});
})

app.get('*', function(req, res){
    res.send('<h1>Not Found</h1>', 404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})