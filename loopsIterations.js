// level {1/2/3}
//Write a function in Javascript to print the sum of the first n fibonacci numbers.

function fibonacci(num) {
    let a = 1;
    let b = 1;
    let c;
    console.log(a);
    console.log(b);
     c = a + b;

   while(c <= num){
       console.log(c);
       a = b;
       b = c;
       c = a + b;
   }
   console.log("Sum: " + c);
}
