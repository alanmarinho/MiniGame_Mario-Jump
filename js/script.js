let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');
let screenWidth = window.innerWidth
let speed = 400;
let animationSpeed = screenWidth / speed;

function jump() {
    mario.classList.add('jump');
    setTimeout(() => { mario.classList.remove('jump') }, 500)
}

const loop = setInterval(() => {
    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition < 50 && pipePosition > 0 && marioPosition < 45) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = "./images/game-over.png";
        mario.style.height = '15%';
        mario.style.marginLeft = '0px';
        mario.style.left = `${pipePosition / 2}px`;
        mario.style.position = 'adsolute';
        
        let divReload = document.createElement('div');
        divReload.classList.add('divReload');
        divReload.innerHTML = '<button id="meuBotao" onclick="location.reload();">Tentar Novamente</button>';
        document.body.appendChild(divReload);

        clearInterval(loop)
    }
}, 10)

document.documentElement.style.setProperty('--animation-speed', animationSpeed + 's');
document.addEventListener('keydown', jump);