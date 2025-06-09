const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.getElementById("inscreva-se").addEventListener("click", function () {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !senha || !confirmarSenha) {
        Swal.fire("Por favor, preencha todos os campos!");
        return;
    }

    if (!emailRegex.test(email)) {
        Swal.fire("Por favor, insira um e-mail válido!");
        return;
    }

    if (senha !== confirmarSenha) {
        Swal.fire("As senhas não coincidem!");
        return;
    }

    // Armazenar os dados no localStorage
    localStorage.setItem("usuarioNome", nome);
    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("usuarioSenha", senha);

    Swal.fire({
        icon: "success",
        title: "Cadastro realizado com sucesso!"
    }).then(() => {
        window.location.href = "index.html"; // redireciona
    });
});