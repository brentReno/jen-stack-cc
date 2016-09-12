// initial jokes provided by the client
jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];
var express = require('express');
var app     = express();
var port    =   process.env.PORT || 3000;
var path = require( 'path' );
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false});

//start listening
app.listen( port, function(){
  console.log('The server is listening on port 3000');
});

//set up base url
app.get('/', function(req, res){
  console.log("The base URL has been hit");
  res.sendFile(path.resolve('public/index.html'));
});//end base url

//set public folder for use
app.use(express.static('public'));
app.use(urlEncodedParser);
