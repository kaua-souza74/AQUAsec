const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", () => {
  const precoBase = 419.99;
  const spanQuantidade = document.getElementById("quantidade");
  const precoUnitario = document.getElementById("preco-unidade");
  const freteTd = document.getElementById("frete");
  const totalTd = document.getElementById("total");
  const estadoSelect = document.getElementById("estado");

  let quantidade = 1;
  let frete = 0;

  function atualizarFrete() {
    const estado = estadoSelect.value;
    switch (estado) {
      case "SP": frete = 5.00; break;
      case "RJ": frete = 10.00; break;
      case "MG": frete = 8.00; break;
      case "ES": frete = 12.00; break;
      default: frete = 0;
    }
    freteTd.textContent = `R$ ${frete.toFixed(2).replace('.', ',')}`;
    atualizarTotal();
  }

  function atualizarTotal() {
    const subtotal = precoBase * quantidade;
    const total = subtotal + frete;
    totalTd.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  // Botões de mais e menos
  document.querySelector(".mais").addEventListener("click", () => {
    quantidade++;
    spanQuantidade.textContent = quantidade;
    atualizarTotal();
  });

  document.querySelector(".menos").addEventListener("click", () => {
    if (quantidade > 1) {
      quantidade--;
      spanQuantidade.textContent = quantidade;
      atualizarTotal();
    }
  });

  // Quando o estado muda
  estadoSelect.addEventListener("change", atualizarFrete);

  // Inicializa frete e total
  atualizarFrete();
});


// Formulário de pagamento
document.addEventListener("DOMContentLoaded", () => {
  const pagamentoSelect = document.getElementById("pagamento");
  const cartaoDiv = document.getElementById("cartao-info");
  const pixDiv = document.getElementById("pix-info");

  pagamentoSelect.addEventListener("change", () => {
    const metodo = pagamentoSelect.value;

    if (metodo === "Cartão") {
      cartaoDiv.style.display = "block";
      pixDiv.style.display = "none";
    } else if (metodo === "PIX") {
      cartaoDiv.style.display = "none";
      pixDiv.style.display = "block";
    } else {
      cartaoDiv.style.display = "none";
      pixDiv.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById('botao');
  const form = document.querySelector('form');
  const pagamentoSelect = document.getElementById('pagamento');
  const cartaoInfo = document.getElementById('cartao-info');
  const pixInfo = document.getElementById('pix-info');

  // Alternar exibição conforme método de pagamento
  pagamentoSelect.addEventListener('change', () => {
    const metodo = pagamentoSelect.value;

    if (metodo === 'Cartão') {
      cartaoInfo.style.display = 'block';
      pixInfo.style.display = 'none';
    } else if (metodo === 'PIX') {
      cartaoInfo.style.display = 'none';
      pixInfo.style.display = 'block';
    } else {
      cartaoInfo.style.display = 'none';
      pixInfo.style.display = 'none';
    }
  });

  botao.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o envio automático

    if (!form.checkValidity()) {
      Swal.fire({
        title: 'Atenção!',
        text: 'Por favor, preencha todos os campos obrigatórios.',
        icon: 'warning',
        confirmButtonText: 'Entendi'
      });
      return;
    }

    const metodoPagamento = pagamentoSelect.value;

    if (metodoPagamento === 'Cartão') {
      const numCartao = document.getElementById('num-cartao').value.trim();
      const validade = document.getElementById('validade-cartao').value.trim();
      const cvv = document.getElementById('cvv-cartao').value.trim();

      if (!numCartao || !validade || !cvv) {
        Swal.fire({
          title: 'Atenção!',
          text: 'Por favor, preencha todos os dados do cartão de crédito.',
          icon: 'warning',
          confirmButtonText: 'Entendi'
        });
        return;
      }
    }

    if (metodoPagamento === 'PIX') {
      const comprovante = document.getElementById('arquivo').value.trim();
      if (!comprovante) {
        Swal.fire({
          title: 'Atenção!',
          text: 'Por favor, envie o comprovante de pagamento via PIX.',
          icon: 'warning',
          confirmButtonText: 'Entendi'
        });
        return;
      }
    }

    Swal.fire({
      title: 'Sucesso!',
      text: 'Formulário enviado com sucesso.',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  });
});




// // Botão
// document.addEventListener("DOMContentLoaded", () => {
//   const botao = document.getElementById('botao');
//   const form = document.querySelector('form');
//   const pagamentoSelect = document.getElementById('pagamento');

//   botao.addEventListener('click', () => {
//     // Required
//     if (!form.checkValidity()) {
//       Swal.fire({
//         title: 'Atenção!',
//         text: 'Por favor, preencha todos os campos obrigatórios.',
//         icon: 'warning',
//         confirmButtonText: 'Entendi'
//       });
//       return;
//     }

//     // Validação
//     const metodoPagamento = pagamentoSelect.value;

//     if (metodoPagamento === 'Cartão') {
//       const numCartao = document.getElementById('num-cartao').value.trim();
//       const validade = document.getElementById('validade-cartao').value.trim();
//       const cvv = document.getElementById('cvv-cartao').value.trim();
//       const comprovante = document.getElementById('arquivo').value.trim();

//       if (!numCartao || !validade || !cvv || !comprovante) {
//         Swal.fire({
//           title: 'Atenção!',
//           text: 'Por favor, preencha os dados do cartão de crédito.',
//           icon: 'warning',
//           confirmButtonText: 'Entendi'
//         });
//         return;
//       }
//     }

//     // Sucess
//     Swal.fire({
//       title: 'Sucesso!',
//       text: 'Formulário enviado com sucesso.',
//       icon: 'success',
//       confirmButtonText: 'Ok'
//     });
//   });
// });