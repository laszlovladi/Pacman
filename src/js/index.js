class Pacman {
  constructor (xpos, ypos, mouth, stage) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = mouth;
    this.maxX = stage.width;
    this.maxY = stage.height;
  }

  move(key) {    
    if (key === 'ArrowRight') {
      if (this.xpos < this.maxX-1){
        this.xpos += 1;
        this.element.style.backgroundPositionY = '0';
      }
    }
    else if (key === 'ArrowLeft') {
      if (this.xpos > 0) {
        this.xpos -= 1;
        this.element.style.backgroundPositionY = '255px';
      }
    }
    else if (key === 'ArrowUp') {
      if (this.ypos > 0) {
        this.ypos -= 1;
        this.element.style.backgroundPositionY = '85px';
      }
    }
    else if (key === 'ArrowDown') {
      if (this.ypos < this.maxY-1){
        this.ypos += 1;
        this.element.style.backgroundPositionY = '170px';
      }
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
    this.element.style.left = `${this.xpos * 85}px`;
    this.element.style.top = `${this.ypos * 85}px`;
  }

  mount() {
    const stageElem = document.querySelector('.stage');
    this.render();
    stageElem.appendChild(this.element);
  }
}

class Stage {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.elementsArr = [height];
      for (let i = 0; i < height; i++) {
        this.elementsArr[i] = [width];
      }
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'stage';
    this.element.style.width = `${this.width * 85}px`;
    this.element.style.height = `${this.height * 85}px`;  }

  // update() {

  // }

  mount() {
    const contElem = document.querySelector('.container');
    this.render();
    contElem.appendChild(this.element);
  }

  collisionDetection(x, y) {

  }
}

class Entity {
  constructor(x, y, type, stage) {
    this.x = x;
    this.y = y;
    this.type = type;
    stage.elementsArr[y][x] = this;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = `entity entity--${this.type}`;
    this.element.style.left = `${this.x * 85}px`;
    this.element.style.top = `${this.y * 85}px`;
  }

  // update() {

  // }

  mount() {
    const stageElem = document.querySelector('.stage');
    this.render();
    stageElem.appendChild(this.element);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const stage = new Stage(12, 6);
  stage.mount();
  const pacman = new Pacman(0, 0, 0, stage);
  pacman.mount();
  const wall = new Entity(2, 3, 'wall', stage);
  wall.mount();
  stage.elementsArr.push(wall);
  const apple = new Entity(3, 2, 'apple', stage);
  apple.mount();
  const bomb = new Entity(4, 5, 'bomb', stage);
  bomb.mount();
  const tomb = new Entity(5, 4, 'tomb', stage);
  tomb.mount();
  console.log(stage.elementsArr);
});