function Pizza(size,sauce,toppings,cheese,quantity){
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.cheese = cheese;
  this.quantity = quantity;
}
var priceOptionsArray = [];
var finalPrice = 0;
Pizza.prototype.basePrice = function(){
  if (this.size === 10){
    return priceOptionsArray.push(8.99);
  } else if (this.size === 12){
    priceOptionsArray.push(10.99);
  } else if (this.size === 14){
    priceOptionsArray.push(14.99);
    return priceOptionsArray;
  } else{
    return "Please select a size!"
  }
}

Pizza.prototype.addSauce = function(){
  var sauceList = [
    { sauce: "No sauce", price: 0.00},
    { sauce: "Marinara", price: 0.50},
    { sauce: "BBQ Sauce", price: 1.00},
    { sauce: "Cashew Alfredo", price: 1.50}
  ];
  for (var prop in sauceList){
    if (sauceList[prop]['sauce'] === this.sauce){
     priceOptionsArray.push(sauceList[prop]['price']);
    }
  } return priceOptionsArray;
}

Pizza.prototype.addToppings = function(){
  var toppingList = [
    { topping: "Field Roast Hamburger", price: 2.00},
    { topping: "Seitan Sausage", price: 2.00},
    { topping: "Chick'n", price: 2.00},
    { topping: "BBQ Soy Curls", price: 2.00},
    { topping: "Jackfruit Bacon", price: 1.00},
    { topping: "Mushrooms", price: 0.50},
    { topping: "Spinach", price: 0.50},
    { topping: "Onions", price: 0.50},
    { topping: "Black Olives", price: 0.50},
    { topping: "Artichokes", price: 0.50},
    { topping: "Garlic", price: 0.50},
    { topping: "Pineapple", price: 0.50}
  ];
  for (var prop in toppingList){      //Searches through list of toppings and pushes price of matching into priceOptionsArray
    for (var i=0; i < this.toppings.length; i++){ //This was a pain in the ass, reference for future object array loops
      if (toppingList[prop]['topping'] == this.toppings[i]){
       priceOptionsArray.push(toppingList[prop]['price']);
      }
    }
  } return priceOptionsArray;
}

Pizza.prototype.addCheese = function(){
  var cheeseList = [
    { cheese: "No cheese", price: 0.00},
    { cheese: "Daiya Cheese", price: 0.50},
    { cheese: "Creamed Cashew", price: 1.50},
    { cheese: "Tofu Ricotta", price: 1.50}
  ];
  for (var prop in cheeseList){
    for (var i=0; i < this.cheese.length; i++){
      if (cheeseList[prop]['cheese'] == this.cheese[i]){
       priceOptionsArray.push(cheeseList[prop]['price']);
      }
    }
  } return priceOptionsArray;
}







// for (var i=0; i < priceOptionsArray.length; i++){
//   finalPrice += priceOptionsArray[i];
// }
// return finalPrice;
