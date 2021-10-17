const fs = require('fs');

// it's not necessary that below code run before the last console print.
// fs.readFile('file.txt', 'utf8', (err, data)=>{  
//     console.log(err, data);
// })

// readFileSync make sure the console printed before the 'reading finished'
const a = fs.readFileSync('file.txt');
console.log(a.toString());

// un-blocked io
const b = fs.writeFile('file2.txt', 'This date has been written.', ()=>{
    console.log('date has been written');
})

// wirte the data then proceed.
const c = fs.writeFileSync('file2.txt', 'This is the new data');


console.log('reading finished.');