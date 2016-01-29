function Pizza(size,sauce,toppings,quantity){
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.quantity = quantity;
}

Pizza.prototype.basePrice = function(){
  var sizePrice = 0;
  if (this.size === 10){
    return sizePrice + 8.99;
  } else if (this.size === 12){
    return sizePrice + 10.99;
  } else if (this.size === 14){
    return sizePrice + 14.99;
  } else{
    return "Please select a size!"
  }
}


  // }
  // for (var i=0; i < sauceList.length; i++){
  //   return sauceList[i].sauce;
    // var saucePrice = sauceList[i].price;
    // return this.sauce;
  // }
