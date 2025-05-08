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
const timeSelect = document.getElementById('time'); // Pegando o select do time

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

const coresTimes = {
  "Flamengo": "#DC091E",
  "Palmeiras": "#1B5E20",
  "Corinthians": "#000000",
  "São Paulo": "#D71920",
  "Grêmio": "#0033A0",
  "Internacional": "#BA0C2F",
  "Atlético-MG": "#111111",
  "Cruzeiro": "#0033CC",
  "Botafogo": "#1C1C1C",
  "Fluminense": "#9E1B32",
  "Santos": "#666666",
  "Bahia": "#0044AA",
  "Vasco": "#000000",
  "Fortaleza": "#002D72",
  "Ceará": "#000000",
  "Bragantino": "#CCCCCC",
  "Juventude": "#007A33",
  "Vitória": "#CE1126",
  "Mirassol": "#FFD700",
  "Sport": "#F00000"
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
  aplicarCor();  // Aplica a cor do time quando o campo é montado
}

// Função para aplicar a cor do time nos jogadores
function aplicarCor() {
  const time = timeSelect.value;  // Pega o time selecionado
  const cor = coresTimes[time] || "#4CAF50"; // Se o time não for encontrado, usa um valor padrão

  document.querySelectorAll('.jogador').forEach(jogador => {
    jogador.style.backgroundColor = cor; // Altera o fundo da bolinha
    jogador.style.color = getCorTexto(cor); // Altera a cor do texto (nome do jogador)
  });
}

function getCorTexto(cor) {
  const r = parseInt(cor.substr(1, 2), 16);
  const g = parseInt(cor.substr(3, 2), 16);
  const b = parseInt(cor.substr(5, 2), 16);
  const brilho = (r * 299 + g * 587 + b * 114) / 1000;
  return brilho > 128 ? "#000000" : "#FFFFFF"; // Determina a cor do texto com base no brilho do fundo
}

// Monta a formação inicial
montarCampo('433');

// Troca a formação quando muda o select
formacaoSelect.addEventListener('change', (e) => {
  montarCampo(e.target.value);
});

// Troca a cor do time quando o select de time muda
timeSelect.addEventListener('change', aplicarCor);
