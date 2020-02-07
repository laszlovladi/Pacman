class Pacman {
  constructor (xpos, mouth) {
    this.xpos = xpos;
    this.mouth = mouth;
  }

  moveRight() {
    this.xpos += 85;
    this.update();
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'entity entity--pac pacboy-active-light';
    
    document.addEventListener('keydown', event => {
      if(event.key === 'ArrowRight') {
        if (this.element.style.backgroundPositionX === '85px') {
          this.element.style.backgroundPositionX = '0';
          }
        else {
          this.element.style.backgroundPositionX = '85px';
        }
        this.moveRight();
      }
    });

    this.update();

    return this.element;
  }

  update() {
    // this.element = document.querySelector('.entity--pac');
    this.element.style.left = `${this.xpos}px`;
  }

  mount() {
    const contElem = document.querySelector('.container');
    this.render();
    contElem.appendChild(this.element);
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  const pacman = new Pacman(0, 0);
  pacman.mount();
});