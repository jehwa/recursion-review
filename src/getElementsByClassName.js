// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  let output = [];
  let findClass = function(nodes) {
    if (nodes.classList && nodes.classList.contains(className)) {
      output.push(nodes);
    }  
    if (nodes.childNodes) {
      nodes.childNodes.forEach(function(node) {
        findClass(node);
      });
    }
  };
  findClass(document.body);
  return output;

};
