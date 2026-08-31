// Version 2.0
// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:

Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 

calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
*/


function calculate() {
    'use strict';
    let stringInput = document.getElementById("number").value;
    let numberInput = Number(stringInput);
    let factorialValue;
    let squaredValue;
    let cubedValue;

    if (numberInput >= 1 && numberInput <= 50) {
        factorialValue = factorial(numberInput);
        squaredValue = squared(numberInput);
        cubedValue = cubed(numberInput);

        document.getElementById("factorial").value = factorialValue;
        document.getElementById("squared").value = squaredValue;
        document.getElementById("cubed").value = cubedValue;
    }
    else {
        alert("You must enter a number between 1-50");
    }

	return false; 
}
// End of calculate() function.


function squared(n) {
    'use strict';
    let result = n * n;
    return result;
}


function cubed(n) {
    'use strict';
    let result = n * n * n;
    return result;
}


function factorial(n) {
    'use strict';
    let product;
    for (product = 1; n > 1; n--) {
        product *= n;
        }
        return product;
}


function init() {
    'use strict';
    let theForm = document.getElementById("theForm");
    theForm.onsubmit = calculate;
}
// End of init() function.


window.onload = init;