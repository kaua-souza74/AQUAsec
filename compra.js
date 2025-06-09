document.addEventListener('DOMContentLoaded', () => {
  // Menu responsivo
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

// Trocar imagem com botões e clicando na miniatura
  const thumbnails = Array.from(document.querySelectorAll('.thumbnails img'));
  const mainImage = document.querySelector('.main-image');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;
  // Atualiza a imagem principal
  function updateMainImage(index) {
    mainImage.src = thumbnails[index].src;
    currentIndex = index;
  }
  // Avançar
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateMainImage(currentIndex);
  });
  // Voltar
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateMainImage(currentIndex);
  });
  // Clicar em miniaturas
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      updateMainImage(index);
    });
  });


// Garante que no desktop as infos estejam visíveis e o botão escondido
function ajustarVisibilidadePorTamanho() {
  if (window.innerWidth >= 769) {
    description.style.display = 'block';
    dimensions.style.display = 'block';
    btnMoreInfo.style.display = 'none';
  } else {
    description.style.display = 'none';
    dimensions.style.display = 'none';
    btnMoreInfo.style.display = 'block';
    btnMoreInfo.textContent = 'Mais informações';
  }
}

// Ao clicar no botão no celular, alterna a exibição
btnMoreInfo.addEventListener('click', () => {
  const isHidden = description.style.display === 'none' || description.style.display === '';
  description.style.display = isHidden ? 'block' : 'none';
  dimensions.style.display = isHidden ? 'block' : 'none';
  btnMoreInfo.textContent = isHidden ? 'Menos informações' : 'Mais informações';
});

// Chama no início e quando redimensionar
ajustarVisibilidadePorTamanho();
window.addEventListener('resize', ajustarVisibilidadePorTamanho);


  // Comentários com estrelas
  const form = document.getElementById('form-comentario');
  const listaComentarios = document.getElementById('comentarios-lista');
  const estrelas = document.querySelectorAll('#estrelas-avaliacao-form .estrela');
  let notaSelecionada = 0;

  estrelas.forEach(estrela => {
    estrela.addEventListener('click', () => {
      notaSelecionada = parseInt(estrela.dataset.valor);
      estrelas.forEach(est => {
        const valor = parseInt(est.dataset.valor);
        est.textContent = valor <= notaSelecionada ? '★' : '☆';
      });
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (notaSelecionada === 0) {
      alert('Por favor, selecione uma avaliação com estrelas.');
      return;
    }

    const comentario = document.createElement('div');
    comentario.classList.add('comentario');

    const estrelasTexto = '★'.repeat(notaSelecionada) + '☆'.repeat(5 - notaSelecionada);
    comentario.innerHTML = `
      <strong>${nome}</strong> - <span class="nota">${estrelasTexto}</span>
      <p>${mensagem}</p>
      <button class="excluir-btn">Excluir</button>
    `;

    comentario.querySelector('.excluir-btn').addEventListener('click', () => {
      comentario.remove();
    });

    listaComentarios.prepend(comentario);

    form.reset();
    notaSelecionada = 0;
    estrelas.forEach(est => (est.textContent = '☆'));
  });
});