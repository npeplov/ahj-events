export default class Logic {
  constructor(gui) {
    this.gui = gui;
    this.scores = { vic: 0, loose: 0 };
    this.checkTarget = this.checkTarget.bind(this);
  }

  init() {
    this.gui.parentDiv.addEventListener('click', this.checkTarget);
    this.gui.setActive();
    this.timerId = setInterval(() => {
      const gameOver = this.checkScores(false);
      if (gameOver) return;
      this.gui.gameState(this.scores, '');
      this.gui.setActive();
    }, 1000);
  }

  checkScores(clickEvent) {
    if (this.scores.loose >= 5 || this.scores.vic >= 5) {
      clearInterval(this.timerId);
      this.gui.parentDiv.removeEventListener('click', this.checkTarget);
      this.gui.gameState(this.scores, 'Игра окончена');
      return true;
    } if (!clickEvent) this.scores.loose += +1;
    else this.scores.loose -= 1;
    return false;
  }

  checkTarget(e) {
    if (e.target === this.gui.img) {
      this.scores.vic += 1;
      this.gui.removeImg();
      this.checkScores(true);
    }
  }
}
