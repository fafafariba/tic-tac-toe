class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (e) => {

      const $square = $(e.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    let error;
    try {
      this.game.playMove($square.data("pos"));
    } catch (e) {
      error = e;
      alert(e.msg);
    }
    if (!error) {
      let posToMark = $square.data("pos");
      let mark;
      if (this.game.currentPlayer === 'o') {
        mark = 'x';
      } else {
        mark = 'o';
      }

      let $lists = $('li');
      $.each($lists, function(index, list) {
        let targetPos = $(list).data("pos");
        if (targetPos === posToMark) {
          // $(list).append(mark);
          $(list).addClass(mark);
        }
      });
    }
    console.log(this.game.isOver());
  }

  setupBoard() {
    const $grid = $("<ul></ul>");
    for (let i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let $li = $("<li></li>");
        let pos = [i, j];
        $li.data("pos", pos);
        $grid.append($li);
      }
    }
    this.$el.append($grid);
  }
}

module.exports = View;
