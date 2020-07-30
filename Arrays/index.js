/*
PLEASE DO NOT TOUCH THE TEST SECTION

ALL FUNCTION HAVE BEEN DECLARED FOR YOU BUT YOU WILL NEED TO
MANIPULATE THE DEFINITION ALONG WITH THE PARAMETERS

*/

/*
EXAMPLE

CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND ADDS OR MUTATES (MEANING CHANGE) THE ZEROTH ELEMENT TO ZERO AND RETURNS THAT ARRAY

e.g.

mutateZeroElem([]) ===> [0]
mutateZeroElem([1]) ===> [0]
mutateZeroElem([1,2,3]) ===> [0, 2, 3]

*/
function mutateZeroElem(anyArray) {
    // THIS CAN CHANGE THE ARRAY'S ELEMENT, WITHOUT REASSIGNING THE PARAMETER anyArray
    anyArray[0] = 0;
    return anyArray;
}

/*
QUESTION 1

CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND ADDS THE STRING 'last element' TO THE END AND RETURNS THAT ARRAY. DO NOT USE array.push(elem)!!!!!

e.g.

pushTrue([]) ===> ['last element']
pushTrue([1]) ===> [1, 'last element']
pushTrue([1,2,3]) ===> [1, 2, 3, 'last element']

*/
function pushString(arr) {
    arr[arr.length] = 'last element'
    return arr
}

/*
QUESTION 2

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS, AN ARRAY AND A VALUE IT THEN PUSHES THE VALUE INTO THE END OF THE ARGUMENT AND RETURNS THE ARRAY
PLEASE DO NOT USE array.push()
e.g.

mutateZeroElem([]) ===> [true]
mutateZeroElem([1]) ===> [1, true]
mutateZeroElem([1,2,3]) ===> [1, 2, 3, true]

*/
function push(array, value) {
    array[array.length] = value
    return array
}

/*
QUESTION 3

CREATE A FUNCTION THAT TAKES ONE ARGUMENTS, AN ARRAY AND THEN ITERATES (LOOPS OVER) THE ARRAY AND LOGS TO THE CONSOLE EACH ELEMENT
e.g.

printElements([1, true, 'I am the third element', 'my index is 3 confusing right']) ===>
OUTPUT:

1
true
'I am the third element'
'my index is 3 confusing right'
*/
function printElements(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

/*
QUESTION 4

CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND RETURNS A NEW ARRAY THAT HAS ONLY UNIQUE VALUES IN THE SAME ORDER THEY FIRST APPEAR IN THE ORIGINAL ARRAY

DON'T USE indexOF!!!!!!

YOU MAY WANT TO USE AN INNER FOR-LOOP:

for(var i = 0; i < array.length; i++) {

  for(var j = 0; j < array2.length; j++) {

    DO SOMETHING HERE

  }
}

e.g.

unique([1,1,1,1,1,1]) ===> [1];

unique([1,2,3,2,3,2]) ===> [1, 2, 3];
*/
let inArray = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return true
        }
    }
    return false
}

function unique(array) {
    let result = [array[0]]
    for (let i = 0; i < array.length; i++) {
        if (!inArray(result, array[i])) {
            result.push(array[i])
        }
    }
    return result
}

/*
QUESTION 5

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS, ARRAYS, AND RETURN true IF THEY CONTAIN TWO OF THE SAME ELEMENTS OTHERWISE RETURN FALSE
DO NOT USE indexOf

HINT USE AN INNER FOR-LOOP
*/
function compare(a, b) {
    a.sort()
    b.sort()
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            return true
        }
    }
    return false
}

/*
QUESTION 6

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS, ARRAYS,  AND RETURNS A NEW ARRAY THAT HAS ELEMENTS THAT BOTH ARGUMENTS CONTAIN, THERE WILL BE NO DUPLICATES

compareArrays([1, 2, 3, 4], [5, 6, 7, 8]) ===> []
compareArrays([1, 2, 3, 4], [1, 2]) ====> [1, 2]
*/
function compareArrays(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                result.push(a[i]);
            }
        }
    }
    return result
}

/*
QUESTION 7

TAKES TWO ARRAYS AND RETURNS AN ARRAY THAT HAS ELEMENTS THAT ARE UNIQUE TO THE FIRST ARRAY!

e.g.
compareArraysOpposite([1,2,3,4], [1,3]) ===> [2, 4]
*/
function compareArraysOpposite(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) {
        let found = false
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                found = true
                break
            }
        }
        if (found === false) {
            result.push(a[i])
        }
    }
    return result
}

/*
QUESTION 8

CREATE A FUNCTION THAT TAKES THREE ARGUMENTS, A 2D ARRAY AND TWO INTEGERS TO REPRESENT COLUMNS AND ROWS. THE FUNCTION RETURNS THE VALUE OF THAT COLUMN AND ROW

2-D ARRAY EXAMPLE

var twoDimensionArray = [
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 1, 0, 0],
                        ]
retrieveValue(twoDimensionArray, 3, 1) ===> 1

*/
function retrieveValue(arr, row, col) {
    return arr[row][col]
}

/*
QUESTION 9


CREATE A FUNCTION THAT TAKES TWO ARGUMENTS, INTEGERS, AND RETURNS A TWO DIMENSIONAL ARRAY THAT HAS ZEROS AS THE VALUES. USE LOOPS



2-D ARRAY EXAMPLE


var twoDimensionArray = [
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 1, 0, 0],
                        ]

createTwoDArray(3, 5) ===> [
                              [0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0],
                            ]

*/
function createTwoDArray(row, col) {
    let result = []
    for (let r = 0; r < row; r++) {
        let row = []
        for (let c = 0; c < col; c++) {
            row.push(0)
        }
        result.push(row)
    }
    return result
}

/*
TEST SECTION, PLEASE DO NOT TOUCH
*/

const Mocha = require('mocha');

const runner = new Mocha({});

runner.addFile('./test.js');

runner.run();

module.exports = {
    mutateZeroElem,
    pushString,
    push,
    printElements,
    unique,
    compare,
    compareArrays,
    compareArraysOpposite,
    retrieveValue,
    createTwoDArray,
};

console.log('');
