// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

const sorted = [...amdPrices].sort((a, b) => a - b);

console.log(`The three lowest prices are ${sorted[0]}, ${sorted[1]}, and ${sorted[2]}`);