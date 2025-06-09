// Menu hamburguinho
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Card
const cards = document.querySelectorAll('.card');

function ativarHover() {
  if (window.innerWidth >= 900) {
    cards.forEach(card => {
      const texto = card.querySelector('.texto-card');
      card.addEventListener('mouseenter', () => {
        texto.style.display = 'block';
      });
      card.addEventListener('mouseleave', () => {
        texto.style.display = 'none';
      });
    });
  } else {
    // Para telas pequenas, garante que o texto fique escondido e remove eventos
    cards.forEach(card => {
      const texto = card.querySelector('.texto-card');
      texto.style.display = 'none';
    });
  }
}
window.addEventListener('load', ativarHover);

window.addEventListener('resize', () => {
  ativarHover();
});

// Carrossel de img
const images = document.querySelectorAll(".carousel-images img");
let current = 0;

function showSlide(index) {
  images.forEach(img => img.classList.remove("active"));
  images[index].classList.add("active");
}

document.querySelector(".prev").onclick = () => {
  current = (current === 0) ? images.length - 1 : current - 1;
  showSlide(current);
};

document.querySelector(".next").onclick = () => {
  current = (current + 1) % images.length;
  showSlide(current);
};

showSlide(current);