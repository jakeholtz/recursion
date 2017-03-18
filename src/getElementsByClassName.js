// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, section) {
  var output = [];
  var $section = section || document.body;
  var $childs = $section.childNodes;
  var addOut = function(addition) {
    output = output.concat(addition);
  }

  _.each($childs, function(childItem) {
    if (childItem.classList !== undefined && childItem.classList[0] === className) {
      addOut(childItem);
    }
  });
  return output
}
