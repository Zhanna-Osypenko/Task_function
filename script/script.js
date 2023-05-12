console.log("== task 1. MIN ==")

function findMin (){
  const num1 = +prompt("Enter num 1: ");
  console.log("num1 = ", num1 );
  const num2 = +prompt("Enter num 2: ");
  console.log("num2 = ", num2 );
  if (num1 < num2) {
    console.log("min = ", num1 );
    return num2;
  } else {
    console.log("min = ", num2);
    return num2;
  }
} 

findMin();

console.log("== task 2. EVEN ==")

function findEven (){
  const num1 = +prompt("Enter num 1: ");
  console.log("num1 = ", num1 );
  const num2 = +prompt("Enter num 2: ");
  console.log("num2 = ", num2 );
  let min = num1;
  let max = num2;
  if (min < max) {
    console.log("min = ", num1 );
  } else {
    min = num2;
    max = num1;
    console.log("min = ", num2);
  }

  for (let i = max; i >= min; i--){
    if (i%2 === 0) {
      console.log(i);
    } 
  }
} 

findEven();

console.log("== task 3. Power ==")
function power ( a, b = 2) {
  console.log("a = ", a );
  console.log("b = ", b );
  console.log("a^b = ", a**b);
  return a**b;
}

power(5,2)
power(3)
power(2,4)

console.log("== task 4. summa 1..n ==")
function summa (n) {
  let sum = (1+n)*n/2;
  console.log("sum from 1 to " + n + " = " + sum);
  return sum;
}

summa(6);
summa(5); 
summa(3); 

