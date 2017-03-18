// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// [1, 2]
// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var output = '';

  var isType = function(type) {
    return typeof obj === type;
  }

  var addStr = function(string) {
    output = output.concat(string);
  }

  if (typeof obj === 'object' && Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      stringifyJSON(obj[i]);
    }
  } else if (typeof obj === 'object') {
    null;
  } else if (isType('string')) {
    addStr('"' + obj + '"');
  } else if (isType('number') || isType('boolean')) {
    addStr(obj.toString());
  } else if (isType('undefined')) {
    addStr(undefined);
  }
  return output;
};
