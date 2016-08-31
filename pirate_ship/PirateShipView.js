var View = function() {
  this.shipSelector = '#pirateShipImage'
  this.buttonSelector = 'button'
}


View.prototype = {
  getShip: function() {
    return document.querySelector(this.shipSelector)
  },
  setShipLocation: function(location) {
    var ship = this.getShip()
    ship.style.left = location;
  },
  getButton: function() {
    return document.querySelector(this.buttonSelector)
  }
}