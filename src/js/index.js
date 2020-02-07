document.addEventListener('DOMContentLoaded', () => {
  const pacElement = document.querySelector('.entity--pac');
  document.addEventListener('keydown', event => {
    if(event.key === 'ArrowRight') {
      if (pacElement.style.backgroundPositionX === '85px') {
        pacElement.style.backgroundPositionX = '0';
      }
      else {
        pacElement.style.backgroundPositionX = '85px';
      }
    }
  });
});
