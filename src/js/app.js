import img from '../components/goblin/face.png';
import GoblinGame from '../components/goblin/GoblinGame';

const overlay = document.querySelector('.overlay');
const resetButton = document.querySelector('.restart');
const game = new GoblinGame('.goblin', img);

resetButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});
