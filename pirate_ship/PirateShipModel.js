var PirateShip = function() {
  this.location = 0;
}

PirateShip.prototype.incrementLocation = function() {
  this.location = this.location + 10;
}
