/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  var convertHandler = new ConvertHandler();
  //console.log('gn: ', convertHandler.getNum('L'));
  //console.log('sou: ', convertHandler.spellOutUnit('gal'));
  
  //console.log('gn: ', convertHandler.getNum('2/3/4l'))
  
  /*let initNum = convertHandler.getNum('10pints')
  let initUnit = convertHandler.getUnit('10pints')
  
  let returnNum = convertHandler.convert(initNum, initUnit);
  let returnUnit = convertHandler.getReturnUnit(initUnit);
  let toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum.toFixed(5),
      returnUnit
    );
  console.log(toString)
  //console.log('con: ', convertHandler.convert(initNum, initUnit))
  //console.log('gu: ', convertHandler.convert('10', 'L'))*/
  app.route("/api/convert").get(function(req, res) {

    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    
    if (initNum == 'invalid number' && initUnit == 'invalid unit') { res.json('invalid number and unit');  }
    else if (initNum === "invalid number") res.json('invalid number');
    else if (initUnit === "invalid unit") res.json('invalid unit');
    else {
      res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: parseFloat(returnNum.toFixed(5)),
        returnUnit: returnUnit,
        string: convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit)
      });
    }
  });
};
