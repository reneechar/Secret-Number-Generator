'use strict';
module.exports = function() {
  let _randomNumber = Math.floor(Math.random()*(100000)+1);
  return function() {
    return _randomNumber;
  };
}
