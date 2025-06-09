const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
 
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("change");
    });
 
    // Formulário submit
    const form = document.getElementById("contatoForm");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
 
    form.addEventListener("submit", (e) => {
      e.preventDefault();
 
      mensagemSucesso.style.display = "block";
 
      setTimeout(() => {
        mensagemSucesso.style.display = "none";
      }, 3000);
 
      form.reset();
    });