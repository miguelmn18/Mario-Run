const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const alertGameOver = document.getElementById("gameOverScreen");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

// variável global para controlar o loop
let loop;

// Função para iniciar o jogo
function startLoop() {
  // resetar estado inicial
  mario.src = "imagens/mario.gif";
  mario.style.width = "150px";
  mario.style.marginLeft = "0";
  mario.style.bottom = "0px";
  pipe.style.right = "0px";
  pipe.style.animation = "pipe-animation 2s infinite linear";
  alertGameOver.style.display = "none";

  // iniciar loop
  if (!loop) {
    loop = setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const marioPosition = parseFloat(window.getComputedStyle(mario).bottom);

      const pipeWidth = pipe.offsetWidth;
      const marioHeight = mario.offsetHeight;

      if (
        pipePosition <= pipeWidth &&
        pipePosition > 0 &&
        marioPosition < marioHeight
      ) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "imagens/game-over.png";
        mario.style.width = "150px";
        mario.style.marginLeft = "50px";

        alertGameOver.style.display = "flex";
        alertGameOver.style.marginLeft = "500px";

        clearInterval(loop); // para o loop
      }
    }, 10);
  }
}
// Função para parar o jogo
function stopLoop() {
    if(loop){
  clearInterval(loop);
  loop = null;
    }
}

// Eventos de pulo
document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);

// Botões
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

startBtn.addEventListener("click", () => {
  startLoop(); // inicia o jogo
});

restartBtn.addEventListener("click", () => {
  stopLoop();// pausa o jogo
  startLoop(); // reinicia o jogo
});
