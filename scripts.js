// Handle Ash Quote Rotation
const quotes = [
  "A future worth building is a future worth choosing.",
  "You are the signal in the noise.",
  "What you build will outlast what you buy."
];

const quoteEl = document.getElementById("ashQuote");
if (quoteEl) {
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

// Handle CTA Modal Open/Close
const ctaButton = document.getElementById("ctaButton");
const ctaModal = document.getElementById("ctaModal");
const closeModal = document.querySelector(".close");

if (ctaButton && ctaModal && closeModal) {
  ctaButton.addEventListener("click", () => {
    ctaModal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", () => {
    ctaModal.classList.add("hidden");
  });
}

// Starscape Parallax Scroll
const starscape = document.querySelector(".starscape");
if (starscape) {
  window.addEventListener("scroll", () => {
    starscape.style.backgroundPosition = `0px ${window.scrollY * 0.4}px`;
  });
}
