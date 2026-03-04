/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from "fs/promises"; // imported to let the program read the data file

// gets the inputs the user typed in the terminal
const orderCommand = process.argv[2];
const orderNumber = process.argv[3];

async function printOrders() {

  // reads the data.json file
  const data = await fs.readFile("data.json", "utf8");

  // turns the JSON text into a JavaScript array
  const orders = JSON.parse(data);

  // if the user wants to see all orders
  if (orderCommand === "getAllOrders") {

    // loops through the list of orders
    for (let i = 0; i < orders.length; i++) {

      // prints each order
      console.log(orders[i]);

    }
  }

  // if the user wants one specific order
  else if (orderCommand === "getOneOrder") {

    // checks if the order exists
    orders[orderNumber]
      ? console.log(`${orders[orderNumber]}`) // logs the order
      : console.log("Order not found. Please enter a valid order number."); // shows an error message

  }
}

// runs the function
printOrders();