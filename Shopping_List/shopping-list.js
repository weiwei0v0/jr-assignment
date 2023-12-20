// Default shopping list
let shoppingList = ["Milk", "Book", "Bread"];

// Add two items and print the list
shoppingList.push("Pencil");
shoppingList.push("Tea");
console.log("Add 2 items and print the list:");
printShoppingList();

// Remove the last item and print the list
shoppingList.pop();
console.log("Remove the last item and print the list:");
printShoppingList();

// Print alert when item number is greater than 5
shoppingList.push("Fork");
shoppingList.push("Cherry");
printShoppingList();

// Check if item is in the list
console.log("Check if milk is in the list:");
checkListItem("Milk");

console.log("Check if coke is in the list:");
checkListItem("Coke");

// Create an item object
let item = { 
    name: "Milk", 
    price: 4, 
    quantity: 1,
};

// print the object
console.log("Print object:");
for(let key in item) {
    console.log(key + ": " + item[key]);
}

// Print the list
function printShoppingList() {
    for(let i = 0; i < shoppingList.length; i++) {
        console.log((i + 1) + ". " + shoppingList[i]);

        // Print "Your shopping cart is full" when the number of item is over 5
        if(i > 4) {
            console.log("Your shopping cart is full.");
        }
    }
}

// Check if item is in the list
function checkListItem(itemName) {
    if(shoppingList.indexOf(itemName) !== -1) {
        console.log(itemName + " is in the list");
    } else {
        console.log(itemName + " is not in the list");
    }
}