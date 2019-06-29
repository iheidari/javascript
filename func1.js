function Add1(x, y) {
  return x + y;
}

function Add2(x) {
  return function b(y) {
    return x + y;
  };
}
function Add(a, b) {
  if (b === undefined) return Add2(a);
  else return Add1(a, b);
}
//console.log(Add(2, 3));
console.log("2,3", Add(2, 3)); // 5
//console.log(Add(2)(5)); // 7

console.log("2 5", Add(2)(5));
