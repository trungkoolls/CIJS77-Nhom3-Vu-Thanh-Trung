BT2;
let n = 12547;
let C = [];
while (n > 0) {
  C.unshift(n % 10);
  n = (n - (n % 10)) / 10;
}

console.log(`Chữ số lớn nhất trong n là: ${Math.max.apply(Math, C)}`);
