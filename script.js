const jogadores = document.querySelectorAll('.jogador');

jogadores.forEach(jogador => {
  jogador.addEventListener('click', () => {
    const novoNome = prompt('Digite o nome ou número do jogador:', jogador.textContent);
    if (novoNome !== null && novoNome.trim() !== '') {
      jogador.textContent = novoNome.trim();
    }
  });
});

const campo = document.querySelector('.campo');
const formacaoSelect = document.getElementById('formacao');

const formacoes = {
  '433': [ [1], [2, 3, 4, 5], [6, 7, 8], [9, 10, 11] ],
  '442': [ [1], [2, 3, 4, 5], [6, 7, 8, 9], [10, 11] ],
  '352': [ [1], [2, 3, 4], [5, 6, 7, 8, 9], [10, 11] ],
  '343': [ [1], [2, 3, 4], [5, 6, 7, 8], [9, 10, 11] ],
  '4231': [ [1], [2, 3, 4, 5], [6, 7], [8, 9, 10], [11] ],
  '451': [ [1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11] ],
  '4141': [ [1], [2, 3, 4, 5], [6], [7, 8, 9, 10], [11] ],
  '4321': [ [1], [2, 3, 4, 5], [6, 7, 8], [9, 10], [11] ],
  '541': [ [1], [2, 3, 4, 5, 6], [7, 8, 9], [10, 11] ]
};

function montarCampo(formacao) {
  campo.innerHTML = ''; // Limpa o campo atual
  formacoes[formacao].forEach((linha, index) => {
    const linhaDiv = document.createElement('div');
    linhaDiv.classList.add('linha');
    linha.forEach(numero => {
      const jogador = document.createElement('div');
      jogador.classList.add('jogador');
      jogador.textContent = numero;
      jogador.addEventListener('click', () => {
        const novoNome = prompt('Digite o nome ou número do jogador:', jogador.textContent);
        if (novoNome !== null && novoNome.trim() !== '') {
          jogador.textContent = novoNome.trim();
        }
      });
      linhaDiv.appendChild(jogador);
    });
    campo.appendChild(linhaDiv);
  });
}

// Monta a formação inicial
montarCampo('433');

// Troca a formação quando muda o select
formacaoSelect.addEventListener('change', (e) => {
  montarCampo(e.target.value);
});