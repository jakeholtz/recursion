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

  for (var i = 0; i < $childs.length; i++) {
    if ($childs[i].classList !== undefined && $childs[i].classList[0] === className) {
      addOut($childs[i]);
    }
  }
  return output
}
