console.log('[DevSoutinho] Flappy Bird');
console.log('Inscreva-se no canal :D https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50
};

// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

function loop() {
    contexto.drawImage(
        sprites, 
        0, 0, //Sprinte x, Sprite y
        34, 24, //Tamanho do recorte na sprite
        10, 50, 
        34, 24
    );

    requestAnimationFrame(loop);
}

loop();