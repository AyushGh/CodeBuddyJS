// level {1/2/3}
//Write a function in Javascript to print the sum of the first n fibonacci numbers.

function fibonacci(num) {
    let a = 1, b = 1, c, i = 1;
    var sum = a + b;
    console.log(a);
    console.log(b);
    c = a + b;

    while (i < num - 1) {
        console.log(c);
        sum += c;
        a = b;
        b = c;
        c = a + b;
        i++
    }
    console.log("Sum: " + sum);
}