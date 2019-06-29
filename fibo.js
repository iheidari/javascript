var fibo = (function() {
  var i = 1;
  var j = 1;
  function rec() {
    let k = i + j;
    j = i;
    i = k;
    return k;
  }
  return rec;
})();

console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
//1 1 2 3 5 8
