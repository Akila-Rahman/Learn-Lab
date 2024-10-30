// script.js

// Placeholder: You can add JavaScript functionalities here
// For instance, handling navigation clicks or dynamically loading content

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      alert(`You clicked on ${card.textContent}`);
    });
  });
});
