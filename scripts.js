// Ash Quote Rotator
const quotes = [
  "A future worth building is a future worth choosing.",
  "You are the signal in the noise.",
  "What you build will outlast what you buy.",
  "No machine ever dreamed. Until now.",
  "You don’t join HELIOS. You remember it.",
];

const quoteEl = document.getElementById("ashQuote");
if (quoteEl) {
  const rotateQuote = () => {
    const next = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = next;
  };
  rotateQuote(); // initial
  setInterval(rotateQuote, 10000); // every 10s
}

// Modal Logic
const ctaButton = document.getElementById("ctaButton");
const ctaModal = document.getElementById("ctaModal");
const closeModal = document.querySelector(".close");
const joinNowBtn = document.getElementById("joinNow");

if (ctaButton && ctaModal && closeModal && joinNowBtn) {
  ctaButton.addEventListener("click", () => {
    ctaModal.classList.remove("hidden");
    ctaModal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    ctaModal.classList.add("hidden");
    ctaModal.style.display = "none";
  });

  joinNowBtn.addEventListener("click", () => {
    joinNowBtn.textContent = "Enlisted ✅";
    joinNowBtn.disabled = true;
  });
}

// Starscape Parallax
const starscape = document.querySelector(".starscape");
if (starscape) {
  window.addEventListener("scroll", () => {
    starscape.style.backgroundPosition = `0px ${window.scrollY * 0.4}px`;
  });
}

// Dark Mode Toggle
const darkToggle = document.getElementById("darkModeToggle");
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
