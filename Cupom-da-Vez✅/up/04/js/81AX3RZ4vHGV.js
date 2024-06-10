
  // Arrays com os caminhos para as imagens de cada slider
const conjuntosDeImagens = [
    [
        'images/11.png', // imagem direita 1
        'images/21.png', // Escolhido
        'images/31.png',
        'images/41.png',
        'images/52.png',
        'images/63.png',
        'images/71.png',
        'images/81.png',
        'images/92.png', // imagem esquerda
        'images/1.png', // imagem central
    ],
    [
        'images/2.png', //imagem direita 2
        'images/12.png', // Escolhido
        'images/22.png',
        'images/32.png',
        'images/42.png',
        'images/52.png',
        'images/63.png',
        'images/72.png',
        'images/83.png', // imagem esquerda
        'images/92.png', // imagem central
    ],
    [
        'images/93.png', //imagem direita 3
        'images/3.png', // Escolhido
        'images/13.png',
        'images/23.png',
        'images/33.png',
        'images/44.png',
        'images/53.png',
        'images/63.png',
        'images/74.png', // imagem esquerda
        'images/83.png', // imagem central
    ],
    [
        'images/85.png', //imagem direita 4
        'images/94.png', // Escolhido
        'images/5.png',
        'images/14.png',
        'images/24.png',
        'images/34.png',
        'images/44.png',
        'images/54.png',
        'images/66.png', // imagem esquerda
        'images/74.png', // imagem central
    ],
    [
        'images/76.png', //imagem direita 5
        'images/86.png', // Escolhido
        'images/96.png',
        'images/6.png',
        'images/16.png',
        'images/26.png',
        'images/36.png',
        'images/47.png',
        'images/56.png', // imagem esquerda
        'images/66.png', // imagem central
    ],
    [
        'images/67.png', //imagem direita 6
        'images/78.png', // Escolhido
        'images/87.png',
        'images/97.png',
        'images/9.png',
        'images/17.png',
        'images/27.png',
        'images/37.png',
        'images/47.png', // imagem esquerda
        'images/57.png', // imagem central
    ],
    [
        'images/59.png', //imagem direita 7
        'images/68.png', // Escolhido
        'images/78.png',
        'images/88.png',
        'images/98.png',
        'images/2.png',
        'images/18.png',
        'images/29.png',
        'images/38.png', // imagem esquerda
        'images/48.png', // imagem central
    ],
    [
        'images/49.png', //imagem direita 8
        'images/59.png', // Escolhido
        'images/69.png',
        'images/75.png',
        'images/89.png',
        'images/99.png',
        'images/9.png',
        'images/19.png',
        'images/29.png', // imagem esquerda
        'images/39.png', // imagem central
    ],
    [
        'images/36.png', //imagem direita 9
        'images/45.png', // Escolhido
        'images/55.png',
        'images/66.png',
        'images/75.png',
        'images/85.png',
        'images/95.png',
        'images/5.png',
        'images/15.png', // imagem esquerda
        'images/25.png', // imagem central
    ],
    // Adicione mais arrays para mais sliders
];


function iniciarSlider(index) {
    const slider = document.querySelectorAll('.slider')[index];
    if (!slider) return; // Se o slider não existir, saia da função

    const imagens = conjuntosDeImagens[index]; // Pega o conjunto de imagens correto para este slider
    let indiceAtual = 0;
    let trocasRealizadas = 0;
    const totalTrocas = 12;
    
    function atualizarSlider() {
        if (trocasRealizadas >= totalTrocas) {
            clearInterval(intervalId);
            return;
        }

        const totalImagens = imagens.length;
        const proximoIndice = (indiceAtual + 1) % totalImagens;
        const anteriorIndice = (indiceAtual - 1 + totalImagens) % totalImagens;
        
        slider.querySelector('.left-slide img').src = imagens[anteriorIndice];
        slider.querySelector('.center-slide img').src = imagens[indiceAtual];
        slider.querySelector('.right-slide img').src = imagens[proximoIndice];
        
        indiceAtual = proximoIndice;
        trocasRealizadas++;
    }
    
    const intervalId = setInterval(atualizarSlider, 300);
}

iniciarSlider(0);
