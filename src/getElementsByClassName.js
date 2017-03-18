// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, section) {
  var output = [];
  var $body = section || document.body;
  var $childs = $body.childNodes;
  function findClassesWithin(item) {
      _.each(item.childNodes, function(child) {
        if (_.contains(child.classList, className)) {
          output.push(child);
        }
      });
    }
  findClassesWithin($body);
  return output
}
