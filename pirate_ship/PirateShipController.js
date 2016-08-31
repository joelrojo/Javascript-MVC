window.onload = function() {
  var view = new View()
  var ship = new PirateShip()
  var controller = new Controller(view,ship)
  controller.bindListeners()
}


var Controller = function(display, model) {
  this.display = display;
  this.model = model;
}

Controller.prototype = {
  bindListeners:  function() {
    var button = this.display.getButton();
    button.addEventListener('click', this.moveModel.bind(this));

    // ANOTHER WAY TO WRITE THE ABOVE
    // button.addEventListener('click',function() {
    //   console.log(this);
    //   this.moveModel();
    // }.bind(this));

    // ARROW FUNCTION (auto binds this like above)
    // button.addEventListener('click',() => this.moveModel());

    /* RESOURCES
    Arrow functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    Stack overflow binding - http://stackoverflow.com/questions/35306597/javascript-addeventlistener-callback-function-executes-immediately-and-only-onc
    Avoid anonymous functions - https://toddmotto.com/avoiding-anonymous-javascript-functions/
    Why we call functions without parentheses - https://teamtreehouse.com/community/why-do-we-call-the-functions-without-parentheses-ie
    */
  },

  moveModel: function() {
    this.model.incrementLocation()
    var newLocation = this.model.location
    this.display.setShipLocation(newLocation)
  }
}
