// Demo button simulation
function claimPickup() {
  const response = document.getElementById('demo-response');
  response.innerHTML = "✅ NGO matched! Volunteer is on the way...";
  response.style.color = "green";
  response.style.fontWeight = "bold";
}

// Scroll animations
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add('visible');
    }
  });
});