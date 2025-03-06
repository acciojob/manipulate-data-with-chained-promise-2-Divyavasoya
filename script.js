const outputDiv = document.getElementById("output");

function manipulateArray() {
    // Initial promise that resolves after 3 seconds with the array [1, 2, 3, 4]
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((arr) => {
        // First transformation: Filtering out odd numbers (1-second delay)
        return new Promise((resolve) => {
            setTimeout(() => {
                const evens = arr.filter(num => num % 2 === 0);
                outputDiv.textContent = JSON.stringify(evens); // Display [2, 4]
                resolve(evens);
            }, 1000);
        });
    })
    .then((evens) => {
        // Second transformation: Multiply even numbers by 2 (2-second delay)
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubled = evens.map(num => num * 2);
                outputDiv.textContent = JSON.stringify(doubled); // Display [4, 8]
                resolve(doubled);
            }, 2000);
        });
    });
}
