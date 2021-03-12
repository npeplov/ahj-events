import genPosition from './generators.js';

export default class Gui {
  constructor() {
    [this.img] = document.images;
    [this.parentDiv] = document.getElementsByClassName('wrapper');
    [this.gameOverDiv] = document.getElementsByClassName('gameover');
    this.timerId = setInterval(this.setActive.bind(this), 1000);
  }

  init() {
    this.img.parentElement.removeChild(this.img);
    this.createCells();
  }

  createCells() {
    for (let i = 0; i < 4 * 4; i += 1) {
      const div = document.createElement('div');
      this.parentDiv.appendChild(div);
    }
  }

  setActive() {
    if (document.images[0]) this.removeImg();

    const childDivs = this.parentDiv.children;
    const index = genPosition();
    childDivs[index].appendChild(this.img);
  }

  removeImg() {
    const activeDiv = document.images[0].parentElement;
    activeDiv.removeChild(this.img);
  }

  gameOver(scores) {
    this.gameOverDiv.innerHTML = `
    <h3>Игра окончена</h3>
    Попал: <strong>${scores.vic}</strong>, Промахнулся: <strong>${scores.loose}</strong>
    `;
  }
}
