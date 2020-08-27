/*
 *
 *
 *       Complete the handler logic below
 *[
 *
 */

const keys = {
  gal: { key: 'l', value: 'gallons' },
  l:{ key: 'gal', value: 'litres' },
  mi:{ key: 'km', value: 'miles' },
  km: { key: 'mi', value: 'kilometers' },
  lbs: { key: 'kg', value: 'pounds' },
  kg: { key: 'lbs', value: 'kilograms' }
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
  
    let str = input.slice(0, input.match(/[a-z]/i).index);
    let num = str.split('/');
    if(num[0] === '') num = [];
 
    switch(num.length){ 
      //case 0: result = 'invalid number'; break; // no numerical input
      case 1: result = num[0]; break; // whole number or decimal
      case 2: result = num[0] / num[1]; break; // fraction
      //case 3: console.log('double'); 
      default: result = 'invalid number'; break; // double fraction
    }
    
    return result;
  };

  this.getUnit = function(input) {
    let result;
    input = input.toLowerCase();
    let unit = input.slice(input.match(/[a-z]/).index, input.length);
   
    for (let property in keys) {
      if(keys.hasOwnProperty(unit)){
        result = unit;
        break;
      }
    }
    if(!result) result = 'invalid unit';
    
    return result;
  };

  this.getReturnUnit = function(initUnit) {    
    if(initUnit === 'invalid unit') return null;
    const prop = initUnit.toLowerCase();
    const { [prop]: { key } } = keys;
   
    return key;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    if(unit === 'invalid unit') result = null;
    else{
      const prop = unit.toLowerCase();
      const { [prop]: { value } } = keys;
      result = value;
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 4.54609;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    let result;
    
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
    }
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
      return initNum + " " + 
        this.spellOutUnit(initUnit) + " converts to " + 
        parseFloat(returnNum.toFixed(5)) + " " + 
        this.spellOutUnit(returnUnit);
  };
}

module.exports = ConvertHandler;
