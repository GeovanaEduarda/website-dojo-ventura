// ==========================================
// 1. BANCO DE DADOS DOS ATLETAS (Para o Modal)
// ==========================================
const atletasData = {
  Ssinesio: {
    categoria: "Kumite Sênior",
    competicoes: [
      {
        torneio: "Campeonato Brasileiro - Etapa SP",
        colocacao: "1º Lugar (Ouro)",
        data: "Outubro / 2023",
      },
      {
        torneio: "Open Nacional de Karatê",
        colocacao: "2º Lugar (Prata)",
        data: "Agosto / 2023",
      },
      {
        torneio: "Paulistão Fase Regional",
        colocacao: "1º Lugar (Ouro)",
        data: "Março / 2024",
      },
    ],
  },
  "Lucas Silva": {
    categoria: "Cadete - Equipe Paulista",
    competicoes: [
      {
        torneio: "Campeonato Paulista - Finais",
        colocacao: "3º Lugar (Bronze)",
        data: "Novembro / 2023",
      },
      {
        torneio: "Copa Oeste Paulista",
        colocacao: "1º Lugar (Ouro)",
        data: "Julho / 2023",
      },
    ],
  },
  "Amanda Mendes": {
    categoria: "Infantil Sub-14",
    competicoes: [
      {
        torneio: "Torneio Interestadual Base",
        colocacao: "2º Lugar (Prata)",
        data: "Fevereiro / 2024",
      },
      {
        torneio: "Copa Regente Feijó",
        colocacao: "1º Lugar (Ouro)",
        data: "Dezembro / 2023",
      },
    ],
  },
  "Roberto Gomes": {
    categoria: "Kata Sênior",
    competicoes: [
      {
        torneio: "Campeonato Estadual de Kata",
        colocacao: "1º Lugar (Ouro)",
        data: "Maio / 2024",
      },
      {
        torneio: "Torneio Mestre do Tatame",
        colocacao: "2º Lugar (Prata)",
        data: "Janeiro / 2024",
      },
    ],
  },
  "Julia Castro": {
    categoria: "Kumite Sub-21",
    competicoes: [
      {
        torneio: "Jogos Regionais SP",
        colocacao: "1º Lugar (Ouro)",
        data: "Julho / 2023",
      },
      {
        torneio: "Seletiva Nacional",
        colocacao: "Top 5",
        data: "Abril / 2024",
      },
    ],
  },
  "Marcos Vinicius": {
    categoria: "Júnior",
    competicoes: [
      {
        torneio: "Copa São Paulo",
        colocacao: "3º Lugar (Bronze)",
        data: "Março / 2024",
      },
      {
        torneio: "Festival de Artes Marciais",
        colocacao: "1º Lugar (Ouro)",
        data: "Novembro / 2023",
      },
    ],
  },
};

// ==========================================
// 2. LÓGICA DO MODAL
// ==========================================
const modal = document.getElementById("atletaModal");
const closeModalBtn = document.querySelector(".close-modal");
const modalNome = document.getElementById("modalNomeAtleta");
const modalCat = document.getElementById("modalCatAtleta");
const modalLista = document.getElementById("modalListaCompeticoes");

// Abrir Modal
document.querySelectorAll(".open-modal").forEach((button) => {
  button.addEventListener("click", () => {
    const nomeAtleta = button.getAttribute("data-atleta");
    const dados = atletasData[nomeAtleta];

    if (dados) {
      modalNome.textContent = nomeAtleta;
      modalCat.textContent = dados.categoria;

      // Limpar lista anterior e popular nova
      modalLista.innerHTML = "";
      dados.competicoes.forEach((comp) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${comp.torneio}</strong>
          <span class="colocacao">Classificação: ${comp.colocacao}</span>
          <span class="data">Data: ${comp.data}</span>
        `;
        modalLista.appendChild(li);
      });

      modal.classList.add("show");
    }
  });
});

// Fechar Modal no 'X' ou clicando fora
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// ==========================================
// 3. CARROSSEL DE ATLETAS
// ==========================================
const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (track && prevBtn && nextBtn) {
  const scrollAmount = 450;
  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
}

// ==========================================
// 4. HEADER NO SCROLL & ANIMAÇÃO DE REVELAÇÃO
// ==========================================
const header = document.getElementById("main-header");
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  // Mostra o header após rolar 100px
  if (window.scrollY > 100) {
    header.classList.add("show-header");
  } else {
    header.classList.remove("show-header");
  }

  // Revela seções ao rolar a página
  const windowHeight = window.innerHeight;
  const elementVisible = 100;
  reveals.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    }
  });
});

// Executar revelação inicial para itens no topo da tela
window.dispatchEvent(new Event("scroll"));

// ==========================================
// 5. FUNÇÕES AUXILIARES (PIX e WhatsApp)
// ==========================================
function copiarPix() {
  const pixInput = document.getElementById("pixKey");
  pixInput.select();
  pixInput.setSelectionRange(0, 99999);
  navigator.clipboard
    .writeText(pixInput.value)
    .then(() => alert("Chave PIX copiada com sucesso! Obrigado pelo apoio."))
    .catch(() => alert("Erro ao copiar. Selecione o texto manualmente."));
}

function pedirTrufa(tipo) {
  const msg = encodeURIComponent(
    `Olá! Gostaria de ajudar a equipe e encomendar algumas trufas do sabor: ${tipo}.`,
  );
  window.open(`https://wa.me/5518999999999?text=${msg}`, "_blank");
}
