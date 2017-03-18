var stringifyJSON = function(obj) {
  var output = '';

  var isType = function(type) {
    return typeof obj === type;
  }

  var addStr = function(string) {
    output = output.concat(string);
  }

  if (isType('function')) {
    throw undefined;
  } else if (isType('string')) {
    addStr('"' + obj + '"');
  } else if (isType('number') || isType('boolean')) {
    addStr(obj.toString());
  } else if (obj === null) {
    addStr('null');
  } else if (Array.isArray(obj)) {
    var tempArray = [];
    for (var i = 0; i < obj.length; i++) {
      tempArray.push(stringifyJSON(obj[i]));
    }
    addStr('[' + tempArray.join(',') + ']');
  } else if (isType('object')) {
    var tempArray = [];
    for (var prop in obj) {
      tempArray.push((stringifyJSON(prop) + ":" + stringifyJSON(obj[prop])));
    }
    addStr('{' + tempArray.join(',') + '}');
  } else if (isType('undefined')) {
    if (output === '') {
      output = undefined;
    }
  }
  return output;
};
