const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelector("button").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const emailSalvo = localStorage.getItem("usuarioEmail");
    const senhaSalva = localStorage.getItem("usuarioSenha");

    if (!email || !senha) {
        Swal.fire("Preencha todos os campos!");
        return;
    }

    if (email === emailSalvo && senha === senhaSalva) {
        Swal.fire({
            icon: "success",
            title: "Login realizado com sucesso!"
        }).then(() => {
            window.location.href = "index.html"; // redireciona para a página inicial
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Email ou senha incorretos!"
        });
    }
});


document.getElementById('esqueciSenha').addEventListener('click', async function(event) {
  event.preventDefault(); // Impede o comportamento padrão do link

  // Primeiro alerta informativo
  await Swal.fire({
    title: 'Email',
    text: 'Enviaremos um código em seu email!',
    icon: 'info',
    confirmButtonText: 'OK'
  });

  // Segunda aba: pedir o email
  const { value: email } = await Swal.fire({
    title: 'Digite seu email',
    input: 'email',
    inputLabel: 'Email',
    inputValidator: (value) => {
      if (!value) {
        return 'Você precisa digitar um email!';
      }
      // Validação simples de email
      const re = /\S+@\S+\.\S+/;
      if (!re.test(value)) {
        return 'Digite um email válido!';
      }
    },
    showCancelButton: true,
    cancelButtonText: 'Cancelar'
  });

  if (!email) {
    // Se o usuário cancelou ou não digitou email, para aqui
    return;
  }

  // Terceira aba: pedir o código
  const { value: codigo } = await Swal.fire({
    title: 'Código de verificação',
    input: 'text',
    inputLabel: 'Insira o código enviado para ' + email,
    inputPlaceholder: 'Código',
    inputValidator: (value) => {
      if (!value) {
        return 'Você precisa digitar o código!';
      }
    },
    showCancelButton: true,
    cancelButtonText: 'Cancelar'
  });

  if (!codigo) {
    // Se o usuário cancelou ou não digitou o código, para aqui
    return;
  }

  Swal.fire({
    title: 'Sucesso!',
    text: `Email: ${email}\nCódigo: ${codigo}`,
    icon: 'success'
    }).then(() => {
            window.location.href = "index.html"; // redireciona para a página inicial
    });
});