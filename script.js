// Smooth fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// --- Image Slider ---
let slideIndex = 0;
function moveSlide(step) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  slideIndex = (slideIndex + step + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
