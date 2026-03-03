/* -------------------------
💎 Birthstone Finder
----------------------------
Create a program that determines the birthstone for a month inputted by the user. 

Check the README.md file for instructions.
------------------------- */

// birthstone data object
const birthstones = {
  January: "Garnet",
  February: "Amethyst",
  March: "Aquamarine",
  April: "Diamond",
  May: "Emerald",
  June: "Pearl, Alexandrite, or Moonstone",
  July: "Ruby",
  August: "Peridot",
  September: "Sapphire",
  October: "Opal or Tourmaline",
  November: "Topaz or Citrine",
  December: "Tanzanite, Zircon, or Turquoise",
};

// Gets the month that the user typed in the terminal
let month = process.argv[2];

// Looks up that month inside the birthstones object
// If the month exists, then stone will hold the birthstone
// If it does not exist, then stone will be undefined
let stone = birthstones[month];

// Checks if the month was found in the object
if (stone) {

  // If the month is valid, log the full sentence
  console.log("The birthstone for " + month + " is " + stone + ".");
}
else {

  // If the month is not valid, log an error message
  console.log("Invalid month. Please enter a valid month.");
}