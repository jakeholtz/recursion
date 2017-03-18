// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  var $body = document.body;
  var addOut = function(addition) {
    output.push(addition);
  }
  function findClassesWithin(item) {
    if (_.contains(item.classList, className)) {
      output.push(item);
    }
    if (item !== null) {
      _.each(item.childNodes, function(child) {
        findClassesWithin(child);
      });
    }
  }
  findClassesWithin($body);
  return output
}
