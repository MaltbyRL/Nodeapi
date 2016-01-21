var http = require('http');
var math = require('./math.js');
var count = require('./count.js');
var gravit = require("./gravit");
var _ = require("lodash");

console.log("THIS IS COUNT", count);

var server = http.createServer(function(req, res){
//console.log("request:", req);
  console.log("response:", res.read)

var urlParts = req.url.match(/[^/]+/g);
console.log("url Parts:", urlParts);

if(urlParts[0] === 'math'){
  switch(urlParts[1]){
    case "time":
      var timestamp = Date.now();
      res.end(timestamp + '\n');
      break;
    case "sum":
      if(urlParts[1] === 'sum'){
        var a = urlParts[2];
        var b = urlParts[3];
        var answers = math.sum(a, b);
        res.end(answers + "\n");
      };
      break;
    case "difference":
      if(urlParts[1] === 'difference'){
        var a = urlParts[2];
        var b = urlParts[3];
        var answers = math.difference(a, b);
        res.end(answers + "\n");
      };
      break;
    case "square":
      if(urlParts[1] === 'square'){
        var a = urlParts[2];
        var answers = math.square(a);
        res.end(answers + "\n");
      };
    break;
    case "sqrt":
      if(urlParts[1] === 'sqrt'){
        var a = urlParts[2];
        var answers = math.sqrt(a);
        res.end(answers + "\n");
      };
    break;
    case "multiply":
      if(urlParts[1] === 'multiply'){
        var a = urlParts[2];
        var b = urlParts[3];
        var answers = math.multiply(a, b);
        res.end(answers + "\n");
      };
    break;
    case "divide":
      if(urlParts[1] === 'divide'){
        var a = urlParts[2];
        var b = urlParts[3];
        var answers = math.divide(a, b);
        res.end(answers + "\n");
      };
    break;
    default:
        res.end('nothing');
  };
}else if (urlParts[0] === 'sentence') {
  var a = urlParts[1];
  console.log("sentence:", a)
  var answers = count(a);
  console.log("the sentence:", answers)
  res.end(answers + "\n")
}else if (urlParts[0] === "gravatar"){
  var gravy = urlParts[1];
  var answers = gravit(gravy);
  res.end(answers + "\n" )
}





});
server.listen(4000);
