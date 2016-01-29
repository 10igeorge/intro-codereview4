function Pizza(size,sauce,toppings,quantity){
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.quantity = quantity;
}

Pizza.prototype.basePrice = function(){
  var smPizza = 8.99
  var medPizza = 10.99
  var lgPizza = 14.99
  if (this.size === 10){
    return smPizza;
  }
  else if (this.size === 12){
    return medPizza;
  }
  else if (this.size === 14){
    return lgPizza;
  }
  else {
    return "Please select a size!"
  }
}
