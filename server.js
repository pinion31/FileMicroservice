var express = require('express');

var multer = require('multer');
var upload = multer({dest:'uploads/'});
var app = express();
app.use(express.static('static'));

app.post('/', upload.single('file'), function(req,res, next) {
    res.end("File size is " + JSON.stringify(req.file.size) + " bytes.");
});


app.listen(3000);