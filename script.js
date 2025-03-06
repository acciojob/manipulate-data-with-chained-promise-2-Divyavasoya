//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const outputDiv = document.getElementById("output");

    function processArray() {
        // Step 1: Initial promise that resolves with [1, 2, 3, 4] after 3 seconds
        new Promise((resolve) => {
            setTimeout(() => {
                resolve([1, 2, 3, 4]);
            }, 3000);
        })
        .then((arr) => {
            // Step 2: Filtering out odd numbers after a 1-second delay
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evenNumbers = arr.filter(num => num % 2 === 0);
                    outputDiv.innerText = evenNumbers.join(", "); // Display filtered array
                    resolve(evenNumbers);
                }, 1000);
            });
        })
        .then((evenNumbers) => {
            // Step 3: Multiply even numbers by 2 after a 2-second delay
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multipliedNumbers = evenNumbers.map(num => num * 2);
                    outputDiv.innerText = multipliedNumbers.join(", "); // Display final result
                    resolve(multipliedNumbers);
                }, 2000);
            });
        })
        .catch((error) => {
            outputDiv.innerText = "Error: " + error;
        });
    }

    // Execute the function when the page loads
    processArray();
});
