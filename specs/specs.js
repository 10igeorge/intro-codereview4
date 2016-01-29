describe('Pizza', function(){
    it("creates a new object based on user choices for pizza", function(){
      var testPizza = new Pizza(14, "Marinara", ["Daiya Cheese", "Mushrooms", "Vegan Sausage"], 1)
      expect(testPizza.size).to.equal(14);
      expect(testPizza.sauce).to.equal("Marinara");
      expect(testPizza.toppings).to.eql(["Daiya Cheese", "Mushrooms", "Vegan Sausage"]);
      expect(testPizza.quantity).to.equal(1);
    });
    it("creates new pizza with base price of corresponding size", function(){
      var testPizza = new Pizza(14, "Marinara", ["Daiya Cheese", "Mushrooms", "Vegan Sausage"], 1)
      expect(testPizza.basePrice()).to.equal(14.99);
    });
    it("adds sauce price to base pizza user has selected", function() {
      var testPizza = new Pizza(14, "Marinara", ["Daiya Cheese", "Mushrooms", "Vegan Sausage"], 1)
      expect(testPizza.sauceAdd()).to.equal(0.50);
    });

});
