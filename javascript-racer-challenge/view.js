var View = function() {
  this.player1Element = document.querySelector("#player1");
  this.player2Element = document.querySelector("#player2");
}

View.prototype.updatePlayerPosition = function(player) {
  if(player === 1 && playerOne.posLeft < 800){
    this.player1Element.style.left = playerOne.posLeft + "px";
  }
  else if(player === 2 && playerTwo.posLeft < 800){
    this.player2Element.style.left = playerTwo.posLeft + "px";
  }
}

