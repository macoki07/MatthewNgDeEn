//You are to find the average price of MSFT over a period of 5 days and log the value in your console.
const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below
const total = msftData[0] + msftData[1] + msftData[2] + msftData[3] + msftData[4];
const average = total / 5;
console.log(average);