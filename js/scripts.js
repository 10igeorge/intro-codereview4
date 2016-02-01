// --------Business Logic-------
function Pizza(size,sauce,toppings,cheese,quantity){
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.cheese = cheese;
  this.quantity = quantity;
}

var priceOptionsArray = [];
Pizza.prototype.basePrice = function(){
  if (this.size === "10"){
    return priceOptionsArray.push(8.99);
  } else if (this.size === "12"){
    priceOptionsArray.push(10.99);
  } else if (this.size === "14"){
    priceOptionsArray.push(14.99);
    return priceOptionsArray;
  } else{
    return "Please select a size!"
  }
}

Pizza.prototype.addSauce = function(){
  var sauceList = [
    { sauce: "No sauce", price: 0.00},
    { sauce: "Marinara Sauce", price: 0.50},
    { sauce: "Barbecue Sauce", price: 1.00},
    { sauce: "Cashew Alfredo Sauce", price: 1.50}
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
    { topping: "Barbecue Soy Curls", price: 2.00},
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
    for (var i=0; i < this.toppings.length; i++){
      if (this.toppings[i] == toppingList[prop]['topping']){
       priceOptionsArray.push(toppingList[prop]['price']);
      }
    }
  } return priceOptionsArray;
}

Pizza.prototype.addCheese = function(){
  var cheeseList = [
    { cheese: "No cheese", price: 0.00},
    { cheese: "Daiya Cheese", price: 0.50},
    { cheese: "Creamed Cashew Cheese", price: 1.50},
    { cheese: "Tofu Ricotta Cheese", price: 1.50}
  ];
  for (var prop in cheeseList){
    for (var i=0; i < this.cheese.length; i++){
      if (cheeseList[prop]['cheese'] == this.cheese[i]){
       priceOptionsArray.push(cheeseList[prop]['price']);
      }
    }
  } return priceOptionsArray;
}
Pizza.prototype.totalPrice = function(){
  var finalPrice = 0;
  for (var i=0; i < priceOptionsArray.length; i++){
    finalPrice = finalPrice + priceOptionsArray[i];
  } return finalPrice.toFixed(2) * this.quantity;
}

// --------User Interface Logic--------

$(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    $('#orderSummary, #orderPrice').empty();
    var pizzaSize = $("input[name='size']:checked").val();
    var pizzaSauce = $("input[name='sauce']:checked").val();
    var quantity = ($('input#quantity').val());

    var pizzaToppings = [];
    $.each($("input[name='topping']:checked"), function() {
      pizzaToppings.push($(this).val());
    });

    var pizzaCheese = [];
    $.each($("input[name='cheese']:checked"), function() {
    pizzaCheese.push($(this).val());
    });

    var newPizza = new Pizza(pizzaSize,pizzaSauce,pizzaToppings,pizzaCheese,quantity);
    pizzaToppings = pizzaToppings.join(', ');
    pizzaCheese = pizzaCheese.join(', ');

    if (quantity <= 0) {
      alert("Please enter a positive quantity");
    } else {
      $('#order').show();

      $('#orderSummary').append(newPizza.size + " inch pizza with " + newPizza.sauce.toLowerCase() + ", " + pizzaToppings.toLowerCase() + " and " + pizzaCheese.toLowerCase());

      $('#orderPrice').append("Your total is: $" + newPizza.totalPrice(newPizza.basePrice(pizzaSize) + newPizza.addSauce(pizzaSauce) + newPizza.addToppings(pizzaToppings) +  newPizza.addCheese(pizzaCheese)));
    }
    document.getElementById("pizzaForm").reset();

  });
});
