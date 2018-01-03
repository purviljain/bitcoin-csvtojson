var express = require('express');
var fileUpload = require('express-fileupload');
var app = express();
var csv=require('csvtojson');
var jsonfile = require('jsonfile');

app.use(fileUpload());

app.get('/', express.static('public'));


app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});


app.get('/style.css',function(req,res){
	res.sendFile(__dirname + '/style.css');
});


app.get('/images/first.jpg',function(req,res){
	res.sendFile(__dirname + '/images/first.jpg');
});
app.get('/images/bitcoin_exchange.jpg',function(req,res){
	res.sendFile(__dirname + '/images/bitcoin_exchange.jpg');
});
app.get('/images/slide.jpg',function(req,res){
	res.sendFile(__dirname + '/images/slide.jpg');
});
app.get('/images/first.jpg',function(req,res){
	res.sendFile(__dirname + '/images/first.jpg');
});
app.get('/images/IMG_20170111_101954.jpg',function(req,res){
	res.sendFile(__dirname + '/images/IMG_20170111_101954.jpg');
});
app.get('/images/second.jpg',function(req,res){
	res.sendFile(__dirname + '/images/second.jpg');
});
app.get('/images/last.jpg',function(req,res){
	res.sendFile(__dirname + '/images/last.jpg');
});
app.get('/images/theeconomictimes.jpeg',function(req,res){
	res.sendFile(__dirname + '/images/theeconomictimes.jpeg');
});
app.get('/images/forbesindia.jpg',function(req,res){
	res.sendFile(__dirname + '/images/forbesindia.jpg');
});
app.get('/images/theindianexpress.jpg',function(req,res){
	res.sendFile(__dirname + '/images/theindianexpress.jpg');
});
app.get('/images/bitcoin-magazine.png',function(req,res){
	res.sendFile(__dirname + '/images/bitcoin-magazine.png');
});
app.get('/images/cointelegraph.jpg',function(req,res){
	res.sendFile(__dirname + '/images/cointelegraph.jpg');
});
app.get('/images/techinasia.png',function(req,res){
	res.sendFile(__dirname + '/images/techinasia.png');
});
app.get('/images/GraceGarrett.jpg',function(req,res){
	res.sendFile(__dirname + '/images/GraceGarrett.jpg');
});
app.get('/images/AdamHolland.jpg',function(req,res){
	res.sendFile(__dirname + '/images/AdamHolland.jpg');
});

app.get('/images/QuanGuanyu.jpg',function(req,res){
	res.sendFile(__dirname + '/images/QuanGuanyu.jpg');
});
app.get('/images/sep.png',function(req,res){
	res.sendFile(__dirname + '/images/sep.png');
});






app.get('/download.json', function (req, res) {
    res.sendFile('files/data.json', { root: __dirname });
});




app.post('/upload', function(req, res) {
  if (!req.files)
    res.status(400).send('No files were uploaded.');
 
  let sampleFile = req.files.userfile;
  var file = 'files/data.json';
  sampleFile.mv('sample.csv', function(err) {
    if (err)
      res.status(500).send(err);
	
	csv()
		.fromFile('sample.csv')
		.on('end_parsed',(jsonObj)=>{
			jsonfile.writeFile(file, jsonObj, function (err) {
			  console.error(err)
			});
			res.json(jsonObj);
		})
		.on('done',(error)=>{
			//res.status(500).send(err);
		})
    
	
	
  });
});

app.listen(3000);