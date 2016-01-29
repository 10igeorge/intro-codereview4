function Pizza(size,sauce,toppings,quantity){
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
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

// Pizza.prototype.sauceAdd = function() {
//   var sauceList = [
//     { sauce: "No sauce", price: 0.00},
//     { sauce: "Marinara", price: 0.50},
//     { sauce: "BBQ Sauce", price: 1.00},
//     { sauce: "Cashew Alfredo", price: 1.50}
//   ];
//   for (var prop in sauceList){
//     debugger;
//     if (sauceList[prop]['sauce'] === this.sauce){
//       finalPrice = finalPrice + sauceList[prop]['price'];
//       return finalPrice
//     }
//   }
// }
  // }
  // for (var i=0; i < sauceList.length; i++){
  //   return sauceList[i].sauce;
    // var saucePrice = sauceList[i].price;
    // return this.sauce;
  // }
