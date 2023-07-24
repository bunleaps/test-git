const date = new Date(2023, 2, 12, 9, 25, 30);

const n = date.toDateString();
const time = date.toLocaleTimeString();

console.log("Date: " + n);
console.log("Time: " + time);
