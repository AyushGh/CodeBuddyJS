// level {1/2/3}
//1. Write a function to remove all even numbers from an Array.

let array = [1, 2, 3, 4, 5, 6, 7, 8];

var newArr = [];

function removeEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) newArr.push(arr[i])
    }
    console.log(newArr);
}

removeEven(array);


//2. Replace all the vowels in a string with uppercase vowels.

var strng = "";

function replaceVowel(str) {
    var len = str.length;
    for (let i = 0; i < len; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            strng += str[i].toUpperCase();
        } else {
            strng += str[i];
        }
    }
}

replaceVowel("ayush ghosh");

//3. Write a function to find the maximum number in an array.

function maxNum(arr) {
    let maximum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i];
        }
    }
    return maximum;
}