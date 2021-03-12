export default class Logic {
  constructor(gui) {
    this.scores = { vic: 0, loose: 0 };
    this.gui = gui;
  }

  init() {
    this.gui.parentDiv.addEventListener('click', this.target.bind(this));
  }

  checkScores() {
    if (this.scores.loose >= 5 || this.scores.vic >= 5) {
      clearInterval(this.gui.timerId);
      this.gui.gameOver(this.scores);
    }
  }

  target(e) {
    if (e.target === this.gui.img) {
      this.scores.vic += 1;
      this.gui.removeImg();
    } else this.scores.loose += 1;
    this.checkScores();
  }
}
