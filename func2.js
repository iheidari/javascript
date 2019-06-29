const Add1 = (x, y) => x + y;

const Add2 = x => y => x + y;

const Add = (a, b) => (b === undefined && Add2(a)) || Add1(a, b);

console.log("2,3", Add(2, 3)); // 5
console.log("2 5", Add(2)(5));
