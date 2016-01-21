var md5 = require('js-md5')

function gravit(gravy){
  var purl = md5(gravy);
  console.log("Purl:", purl);
  var final = "www.gravatar.com/avatar/" + purl;
  return final
}

module.exports = gravit
