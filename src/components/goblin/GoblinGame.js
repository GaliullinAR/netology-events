
export default class GoblinGame {
  constructor(selector, img, options = {}) {
    if (typeof selector === 'string') {
      this.selector = document.querySelector(selector);
    } else {
      throw new Error('Селектор не найден');
    }

    this.img = img;
    this.options = options;
    this.count = 0;
    this.slope = 0;

    this.countBox = this.selector.previousElementSibling;

    this.onClickInGoblin = this.onClickInGoblin.bind(this);

    this.renderGame();
    this.renderGoblinInSide();

    this.selector.addEventListener('click', this.onClickInGoblin);
  }

  get randomNum() {
    const { length } = this.selector.children;
    return Math.floor(Math.random() * length);
  }

  get getIndexImg() {
    const childs = Array.from(this.selector.children);
    return childs.findIndex((item) => {
      const i = item.querySelector('img');
      if (i !== null) {
        return item;
      }
    });
  }

  renderGame() {
    const ms = 1000;
    const gameSide = 9;

    let html = '';
    for (let i = 0; i < gameSide; i++) {
      html += `
        <div class="goblin__item"></div>
      `;
    }

    this.selector.insertAdjacentHTML('beforeend', html);
  }

  renderGoblinInSide() {
    if (this.timeout) {
      clearInterval(this.timeout);
    }

    this.timeout = setInterval(() => {
      this.createGoblinImg();
    }, 1000);
  }

  createGoblinImg() {
    const img = document.createElement('img');
    img.classList.add('goblin__item-img');
    img.src = this.img;
    if (this.getIndexImg === -1) {
      this.selector.children[this.randomNum].appendChild(img);
    }

    const index = this.getIndexImg;
    const imgSelector = this.selector.children[index].querySelector('img');
    imgSelector.remove();
    this.selector.children[this.randomNum].appendChild(img);
  }

  onClickInGoblin(e) {
    e.preventDefault();
    const span = this.countBox.querySelector('span');
    console.log(span);
    const { target } = e;
    if (target.classList.contains('goblin__item-img')) {
      this.count++;
      this.slope = 0;
      span.textContent = this.count;
    } else {
      this.slope++;
    }

    if (this.slope === 5) {
      this.count = 0;
      span.textContent = this.count;
      this.selector.nextElementSibling.style.display = 'block';
    }
  }
}
