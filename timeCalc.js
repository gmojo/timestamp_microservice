var moment = require('moment');

//multiple valid formats that user can input
var formats = [
        "X", //unix timestamp
        "YYYY-MM-D",
        "D-MM-YYYY",
        "MMMM D, YYYY",
        "MMMM D YYYY",
        "MMM D, YYYY",
        "MMM D YYYY",
        "D MMMM YYYY",
        "D MMMM YY",
        "D MMM YYYY",
        "D MMM YY",
    ];
    
var timeCalc = function(input) {
    //create date from input (if any) with exact match to formats
    var date = moment(input,formats, true);
  
    var output = {
        unix: null,
        natural: null,
    };
    
    if (date.isValid()) {
        output.unix = +date.format("X");
        output.natural = date.format("MMMM D, YYYY");
    }
    
    return output;
};

module.exports = timeCalc;