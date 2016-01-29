describe('Pizza', function(){
    it("creates a new object based on user choices for pizza", function(){
      var testPizza = new Pizza(14, "Marinara", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew", "Tofu Ricotta"], 1)
      expect(testPizza.size).to.equal(14);
      expect(testPizza.sauce).to.equal("Marinara");
      expect(testPizza.toppings).to.eql(["Seitan Sausage", "Mushrooms"]);
      expect(testPizza.cheese).to.eql(["Creamed Cashew", "Tofu Ricotta"]);
      expect(testPizza.quantity).to.equal(1);
    });
    it("creates new pizza with base price of corresponding size", function(){
      var testPizza = new Pizza(14, "Marinara", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew", "Tofu Ricotta"], 1)
      expect(testPizza.basePrice()).to.eql([14.99]);
    });
    it("adds sauce price to base pizza user has selected", function() {
      var testPizza = new Pizza(14, "Marinara", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew", "Tofu Ricotta"], 1)
      expect(testPizza.addSauce()).to.eql([14.99, 0.5]);
    });
    it("adds toppings prices to base pizza user has selected", function() {
      var testPizza = new Pizza(14, "Marinara", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew", "Tofu Ricotta"], 1)
      expect(testPizza.addToppings()).to.eql([14.99, 0.5, 2.00, 0.50]);
    });
    it("adds cheese prices to base pizza user has selected", function() {
      var testPizza = new Pizza(14, "Marinara", ["Seitan Sausage", "Mushrooms"], ["Creamed Cashew", "Tofu Ricotta"], 1)
      expect(testPizza.addCheese()).to.eql([14.99, 0.5, 2, 0.50, 1.50, 1.50]);
    });
});
