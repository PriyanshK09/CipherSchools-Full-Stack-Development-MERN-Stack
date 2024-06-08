const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);

const myNumbers = [25, 12, 50, 77, -1];
let maxValue = Math.max(...myNumbers);

console.log(maxValue);
