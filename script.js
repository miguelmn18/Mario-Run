const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const alertGameOver = document.getElementById("gameOverScreen")

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500)
}

    //loop para o jogo só acabar se corresponder a condição
const loop = setInterval(() => {

    //criar variável de posição
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseFloat(window.getComputedStyle(mario).bottom);


    const pipeWidth = pipe.offsetWidth;
    const marioHeight = mario.offsetHeight;

    
    //Aqui o jogo acaba
    if(pipePosition <= pipeWidth && pipePosition > 0 && marioPosition < marioHeight){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "imagens/game-over.png";
        
        mario.style.width = "150px";
        mario.style.marginLeft = "50px";
        
        alertGameOver.style.display = "flex";
        alertGameOver.style.marginLeft = "500px";
        

        clearInterval(loop);

    }
}, 10)


document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
document.addEventListener("click", jump);

