'use strict';
module.exports = function() {
  let randomNumber = 0;
  return function (){
    randomNumber = Math.floor(Math.random()*(100000)+1);
    return randomNumber;
  };
}