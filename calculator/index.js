"use strict";


function sum(a, b) {
    return a + b;
}

const addNumbers = (...args) => args.reduce((acc, num) => acc + num, 0); // added function for minor change

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Error: Division by zero";
    return a / b;
}

function modulus(a, b) {
    if (b === 0) return "Error: Modulus by zero";
    return a % b;
}

// Trigonometric and Mathematical Functions
function sqrt(a) {
    if (a < 0) return "Error: Square root of a negative number";
    return Math.sqrt(a);
}

function sin(a) {
    return Math.sin(a);
}

function cos(a) {
    return Math.cos(a);
}

function tan(a) {
    return Math.tan(a);
}

// Exporting All Functions
module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    modulus,
    sqrt,
    sin,
    cos,
    tan
};
