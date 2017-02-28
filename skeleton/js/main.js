const View = require("./ttt-view.js");
const Game = require("./game.js");

$( () => {
  const $figure = $('.ttt');
  const game = new Game();
  const view = new View(game, $figure);
});

console.log("c");
