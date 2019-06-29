//Add(1,2,3) -> 6
//Add(1)(2)(3)(4) -> 10
//Add(1,2)(3,4,5) -> 15

const Add1 = (a, b) => a + b;
const Add2 = a => b => a + b;

const Add = (a, b) => {
  if (b === undefined) return Add2(a);
  else return Add(a, b);
};
