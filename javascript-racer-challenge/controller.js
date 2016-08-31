var Controller = function() {
  this.view = new View();
}

Controller.prototype = {
  bindListeners: function() {
    window.addEventListener('keypress', controller.movePlayer.bind(this));
  },

  clearKeyEventListeners: function() {
    window.removeEventListener("keypress", controller.movePlayer);
  },

  movePlayer: function(e) {
    if (e.keyCode === 112) {
      playerOne.moveLeft();
      this.view.updatePlayerPosition(1);
    } else if(e.keyCode === 113) {
      playerTwo.moveLeft();
      this.view.updatePlayerPosition(2);
    }
    this.checkForWinner();
  },

  keepPlaying: function(player) {
    return confirm("Player" + player + " is the winner! Would you like to play again?");
  },

  winner: function() {
    if(playerOne.posLeft > 799) {
      return 1;
    } else if(playerTwo.posLeft > 799) {
      return 2;
    }
  },

  checkForWinner: function() {
    var player;
    if(this.winner()){
      this.clearKeyEventListeners();
      if(this.keepPlaying(this.winner())){
        this.resetGame();
      }
    }
  },

  resetGame: function(){
    window.location.reload();
  }

}
