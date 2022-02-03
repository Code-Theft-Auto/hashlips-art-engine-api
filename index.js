const express = require('express');
const readdir = require('fs').readdir;
const getImages = () => { readdir('./images/images', (err, files) => {console.log(files);return files})};
const exec = require('child_process').exec;
const app = express();
app.use(express.static('./'));


function choice(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

app.get('/', (req, res) => {
    const images = readdir('./images/images', (_err, files) => {
        var randomImage = choice(files);
        res.send(`<img src=/images/images/${randomImage}>`);
        exec('node hash-gen.js');
    });
});



app.listen(8080, () => {console.log('Server is running on port http://127.0.0.1:8080')});
