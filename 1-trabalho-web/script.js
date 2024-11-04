document.addEventListener('DOMContentLoaded', function() {
    const crazyButton = document.getElementById('crazy-button');
    const babyButton = document.getElementById('baby-button');
    const dogButton = document.getElementById('dog-button');
    const funnyText = document.getElementById('funny-text');
    const surpriseContainer = document.getElementById('surprise-container');

    // URLs dos sons
    const fartSounds = [
        'https://www.myinstants.com/media/sounds/fart-01.mp3',
        'https://www.myinstants.com/media/sounds/fart-sound-effect.mp3',
        'https://www.myinstants.com/media/sounds/fart-06.mp3',
        'https://www.myinstants.com/media/sounds/fart-03.mp3'
    ];
    const babyCrySound = new Audio('https://www.myinstants.com/media/sounds/baby-crying.mp3');
    const dogBarkSound = new Audio('https://www.myinstants.com/media/sounds/dog-barking-sound.mp3');
    
    // Variável para verificar se o choro de bebê está tocando
    let isBabyCryPlaying = false;

    // Função para gerar uma posição aleatória dentro da tela
    function randomPosition(element) {
        const x = Math.random() * (window.innerWidth - element.offsetWidth);
        const y = Math.random() * (window.innerHeight - element.offsetHeight);
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    }

    // Evento para o botão de peido
    crazyButton.addEventListener('click', function() {
        funnyText.innerHTML = "Você realmente pegou o peido? Impossível!";

        // Move o botão para uma nova posição
        randomPosition(crazyButton);

        for (let i = 0; i < 5; i++) {
            const poopEmoji = document.createElement('div');
            poopEmoji.textContent = '💩';
            poopEmoji.style.position = 'absolute';
            poopEmoji.style.fontSize = '50px';
            randomPosition(poopEmoji);
            surpriseContainer.appendChild(poopEmoji);

            // Remove o emoji após alguns segundos
            setTimeout(() => {
                surpriseContainer.removeChild(poopEmoji);
            }, 3000);
        }

        // Toca um som de peido
        const randomSound = new Audio(fartSounds[Math.floor(Math.random() * fartSounds.length)]);
        randomSound.play();

        // Para o som de choro de bebê, se estiver tocando
        if (isBabyCryPlaying) {
            babyCrySound.pause();
            babyCrySound.currentTime = 0;
            isBabyCryPlaying = false;
        }
    });

    // Evento para o botão de choro de bebê
    babyButton.addEventListener('click', function() {
        funnyText.innerHTML = "Oh, não! O bebê está chorando!";

        // Move o botão para uma nova posição
        randomPosition(babyButton);

        // Exibe rostinhos de bebê
        for (let i = 0; i < 5; i++) {
            const babyFace = document.createElement('div');
            babyFace.textContent = '👶';
            babyFace.style.fontSize = '50px';
            randomPosition(babyFace);
            surpriseContainer.appendChild(babyFace);

            // Remove o rostinho de bebê após alguns segundos
            setTimeout(() => {
                surpriseContainer.removeChild(babyFace);
            }, 3000);
        }

        // Toca o som de choro de bebê somente se não estiver tocando
        if (!isBabyCryPlaying) {
            babyCrySound.play();
            isBabyCryPlaying = true;
        }
    });

    // Evento para o botão de latido de cachorro
    dogButton.addEventListener('click', function() {
        funnyText.innerHTML = "Cuidado! O cachorro está latindo!";

        // Move o botão para uma nova posição
        randomPosition(dogButton);

        // Exibe emojis de cachorro
        for (let i = 0; i < 5; i++) {
            const dogEmoji = document.createElement('div');
            dogEmoji.textContent = '🐶';
            dogEmoji.style.fontSize = '50px';
            randomPosition(dogEmoji);
            surpriseContainer.appendChild(dogEmoji);

            // Remove o emoji de cachorro após alguns segundos
            setTimeout(() => {
                surpriseContainer.removeChild(dogEmoji);
            }, 3000);
        }

        // Toca o som de latido de cachorro
        const dogBark = new Audio(dogBarkSound); // Cria o objeto de áudio
        dogBark.play(); // Toca o som

        // Para o som de choro de bebê, se estiver tocando
        if (isBabyCryPlaying) {
            babyCrySound.pause();
            babyCrySound.currentTime = 0;
            isBabyCryPlaying = false;
        }
    });
});
