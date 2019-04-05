'use strict';
 
var Basic = {
  //zadania pierwsze
  calculateDiscount: function(price) {
    if(price > 1000){
      return price * 0.1;
    }
    else {
      return price * 0.5
    }
  },
  //zadania drugie
  getLongestWord: function(words) {
    let longest = '';
    words.forEach(word => {
      if(typeof word == 'string' && word.length > longest.length){
        longest = word;
      }
    });
    return longest;
  },
  //zdanie trzecie
  getImplementedObject: function(words) {
    var obj = {
      fuelConsumption: 7,
      brand: 'VW',
      calculate100kmRoadPrice(price){
        return price * this.fuelConsumption;
      }
    }
    return obj;
  },
  

};
 
module.exports = Basic;