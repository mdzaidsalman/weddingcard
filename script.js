// Countdown Timer
const weddingDate = new Date("July 15, 2026 19:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "The wedding day has arrived!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// Scroll Reveal + Flip Effect
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("visible");
      // Add a subtle flip animation when revealed
      card.querySelector(".card-inner").style.transform = "rotateY(0deg)";
    }
  });
});

// Icon Glow Effect on Hover
const icons = document.querySelectorAll(".icon");
icons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.color = "#ff6f61";
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "all 0.3s ease";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.color = "#b45b5b";
    icon.style.transform = "scale(1)";
  });
});
