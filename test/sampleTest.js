'use strict';
 
var basics = require('../src/js/basic');
var assert = require('assert');
 
describe('Kalkulowanie zniżek', function() {
    it('Dla 1500', function() {
      var actual = basics.calculateDiscount(1500);
      assert.equal(actual, 150);
    });
    it('Dla 800', function() {
      var actual = basics.calculateDiscount(800);
      assert.equal(actual, 400);
    });
    
    it('Dla 1000', function() {
      var actual = basics.calculateDiscount(1000);
      assert.equal(actual, 500);
    });
});

describe('pobierz najwieksze slowo z tabeli', function() {
  it('Ola, Tomasz, Staszek, Wojciech, Kamil', function() {
    var data = ['Ola','Tomasz','Staszek','Wojciech','Kamil']
    var actual = basics.getLongestWord(data);
    assert.equal(actual, 'Wojciech');
  });
  it('1, Kamil, false, Ola', function() {
    var data = [1,'Kamil', false, 'Ola']
    var actual = basics.getLongestWord(data);
    assert.equal(actual, 'Kamil');
  });
});

describe('Tworzenie obiektow', function() {
  it('Czy zaimplementowano metode calculate100kmRoadPrice prawidlowo', function() {
    var obj = basics.getImplementedObject();
    var actual = obj.calculate100kmRoadPrice(5);
    assert.equal(actual, 35);
  });
  it('Czy spalanie to 7', function() {
    var obj = basics.getImplementedObject();
    var actual = obj.fuelConsumption;
    assert.equal(actual, 7);
  });
  it('Czy marka to VW', function() {
    var obj = basics.getImplementedObject();
    var actual = obj.brand;
    assert.equal(actual, 'VW');
  });
});