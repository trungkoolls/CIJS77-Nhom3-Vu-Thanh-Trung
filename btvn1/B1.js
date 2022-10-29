let A = [1, 3, 3, 5, 7, 10, 2, 10, 7, 3, 5];
let B = [];
for (i = 0; i < A.length; i++) {
  for (j = 0; j < A.length; j++) {
    if (i == j) {
      continue;
    } else {
      if (A[i] == A[j]) {
        B.push(...A.splice(j, 1));
      }
    }
  }
}
console.log(`Số lượng các số khác nhau: ${A.length}`);
for (i = 0; i < A.length; i++) {
  let countNumb = 1;
  for (j = 0; j < B.length; j++) {
    if (A[i] == B[j]) {
      countNumb++;
    }
  }
  console.log(`Số ${A[i]} xuất hiện: ${countNumb} lần`);
}
