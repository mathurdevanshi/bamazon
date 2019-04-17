var mysql = require("mysql");
require("dotenv").config();
var readlineSync = require('readline-sync');
const readline = require('readline');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: process.env.WEBSITE_USER,

  // Your password
  password: process.env.WEBSITE_PASSWORD,
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

function createProduct() {
  console.log("Welcome to the Potterless kiosk! Here are the items that we sell: ");
//   connection.query("SELECT * FROM products",
//     function(err,res){
//         if (err) throw err;
//         console.log(res);
//     })
    getInput();
};

function getInput(){
    options=['put-outer', 'extendable ears', 'Love potions', 'Nimbus 2000', 'quaffels', 'The Marauders Map', 'toothflossing stringmints', 'Bertie Botts Every Flavour Beans','butterbeer','lemon drops'],
    index = readlineSync.keyInSelect(options, "Which product would you like to purchase?");
    var itemOrdered=options[index];
    console.log("Here is what you are ordering ->", itemOrdered);
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('How much of this product would you like to order? ', (answer) => {
        var quantityOrdered = answer;
        console.log("You would like this quantity ->", quantityOrdered);
        console.log(`You would like ${answer} unit(s) of `+ itemOrdered);
    rl.close();

    connection.end();
});
}
