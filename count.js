'use strict'

function count(a){
  var sentence = decodeURI(a)
  var senSplit = sentence.split(' ')
  var charcount = senSplit.join("").length;
  var spaceCount = sentence.match(/\s/g).length;
  var wordList = 'words: '+ sentence.length +' characters: '+ charcount +' Spaces: '+ spaceCount;
  return wordList
}

// console.log(count('testing this string'));

module.exports = count
