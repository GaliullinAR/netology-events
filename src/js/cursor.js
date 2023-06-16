const cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  cursor.style.left = `${clientX}px`;
  cursor.style.top = `${clientY}px`;
});

window.addEventListener('mousedown', (e) => {
  cursor.style.transform = 'translate(-50%, -50%) rotate(45deg)';
});

window.addEventListener('mouseup', () => {
  cursor.style.transform = 'translate(-50%, -50%) rotate(0)';
});
