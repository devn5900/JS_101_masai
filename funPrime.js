function primeNumber(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

if (primeNumber(2)) {
  console.log("Prime Number");
} else {
  console.log("Not a Prime");
}