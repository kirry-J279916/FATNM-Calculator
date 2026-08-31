// Version 2.0
// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:

Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 

calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
*/


// // test
console.log(squared(10));
console.log(cubed(10));
console.log(factorial(10));


function calculate() {
    let number = document.getElementById("number").value;
    let factorialValue;
    let squaredValue;
    let cubedValue;

    factorialValue = factorial(number);
    squaredValue = squared(number);
    cubedValue = cubed(number);

    document.getElementById("factorial").value = factorialValue;
    document.getElementById("squared").value = squaredValue;
    document.getElementById("cubed").value = cubedValue;

	return false; 
}
// End of calculate() function.


function squared(n) {
    let result = n * n;
    return result;
}


function cubed(n) {
    let result = n * n * n;
    return result;
}


function factorial(n) {
    let product;
    for (product = 1; n > 1; n--) {
        product *= n;
        }
        return product;
}


function init() {
    let theForm = document.getElementById("theForm");
    theForm.onsubmit = calculate;
}
// End of init() function.


window.onload = init;