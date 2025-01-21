// The array has the following information structure:

// - index 0 - Low
// - index 1 - High
// - index 2 - Open
// - index 3 - Close
// - index 4 - Volume

// Write JavaScript code to check the pricing trend of the given data, with the following logic:

// - if close > open
//     - if volume > 100000 → log ‘Strong Bullish’ in your console
//     - else → log ‘Bullish’ in your console
// - close < open
//     - if volume > 10000 → log ‘Strong Bearish’ in your console
//     - else → log ‘Bearish’ in your console
// - close === open
//     - log ‘neutral’ in your console
// Output: Strong Bullish

const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below
if (bacData[3] > bacData[2]) {
    if (bacData[4] > 100000) {
        console.log('Strong Bullish');
    } else {
        console.log('Bullish');
    }
} else if (bacData[3] < bacData[2]) {
    if (bacData[4] > 10000) {
        console.log('Strong Bearish');
    } else {
        console.log('Bearish');
    }
}else {
    console.log('neutral');
}