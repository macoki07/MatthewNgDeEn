// You are to add in the following missing key-value pair:

// - volume: 1512311
const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
};

// Write your code below
// copy disneyData object
let disneyDataCopy = Object.assign({}, disneyData);

// add volume key-value pair
disneyDataCopy.volume = 1512311;
console.log(disneyDataCopy);