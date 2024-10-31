// script.js

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      alert(`Details for: ${card.querySelector('h3').textContent}\n\n${card.innerText}`);
    });
  });
});
