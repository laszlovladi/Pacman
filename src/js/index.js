class Pacman {
  constructor (xpos, ypos, mouth) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = mouth;
  }

  move(key) {    
    if (key === 'ArrowRight') {
      this.xpos += 85;
      this.element.style.backgroundPositionY = '0';
    }
    else if (key === 'ArrowLeft') {
      this.xpos -= 85;
      this.element.style.backgroundPositionY = '255px';
    }
    else if (key === 'ArrowUp') {
      this.ypos -= 85;
      this.element.style.backgroundPositionY = '85px';
    }
    else if (key === 'ArrowDown') {
      this.ypos += 85;
      this.element.style.backgroundPositionY = '170px';
    }
    this.update();
  }

  changeMouth() {
    if (this.mouth === '85px') {
      this.element.style.backgroundPositionX = '0';
      this.mouth = '0';
      }
    else {
      this.element.style.backgroundPositionX = '85px';
      this.mouth = '85px';
    }
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'entity entity--pac pacboy-active-light';
    
    document.addEventListener('keydown', event => {
      if(event.key === 'ArrowRight' || event.key === 'ArrowLeft' 
      || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        this.changeMouth();
        this.move(event.key);
      }
    });

    this.update();

    return this.element;
  }

  update() {
    // this.element = document.querySelector('.entity--pac');
    this.element.style.left = `${this.xpos}px`;
    this.element.style.top = `${this.ypos}px`;
  }

  mount() {
    const contElem = document.querySelector('.container');
    this.render();
    contElem.appendChild(this.element);
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  const pacman = new Pacman(0, 0, 0);
  pacman.mount();
});