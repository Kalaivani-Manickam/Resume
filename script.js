// Typing Effect
const text = "M. KALAIVANI";
let index = 0;

function typeIntro() {
  const typed = document.getElementById("typed");
  if (!typed) return;
  if (index < text.length) {
    typed.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeIntro, 100);
  }
}

window.addEventListener('DOMContentLoaded', typeIntro);

// Smooth Scroll for internal links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Scroll to Top Button logic
const scrollBtn = document.getElementById("scrollToTop");
window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
