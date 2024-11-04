document.addEventListener('DOMContentLoaded', function() {
    const crazyButton = document.getElementById('crazy-button');
    const babyButton = document.getElementById('baby-button');
    const funnyText = document.getElementById('funny-text');
    const surpriseContainer = document.getElementById('surprise-container');
    const fartSounds = [
        'https://www.myinstants.com/media/sounds/fart-01.mp3',
        'https://www.myinstants.com/media/sounds/fart-sound-effect.mp3',
        'https://www.myinstants.com/media/sounds/fart-06.mp3',
        'https://www.myinstants.com/media/sounds/fart-03.mp3'
    ];
    const babyCrySound = new Audio('https://www.myinstants.com/media/sounds/baby-crying.mp3');
    let thirdButton, currentSound;

    function randomPosition(element) {
        const x = Math.random() * (window.innerWidth - element.offsetWidth);
        const y = Math.random() * (window.innerHeight - element.offsetHeight);
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    }

    function createThirdButton(label, sound) {
        if (thirdButton) {
            thirdButton.remove();
        }

        thirdButton = document.createElement('button');
        thirdButton.className = 'third-button';
        thirdButton.textContent = label;
        document.body.appendChild(thirdButton);

        funnyText.innerHTML = "Me pegue se conseguir!";
        sound.play();

        // Função para movimentar o botão
        function moveButton() {
            randomPosition(thirdButton);
        }
        const moveInterval = setInterval(moveButton, 1000); // Movimenta a cada 1 segundo

        // Evento de clique para o terceiro botão
        thirdButton.addEventListener('click', () => {
            sound.pause();
            sound.currentTime = 0;
            clearInterval(moveInterval); // Para o movimento do botão
            thirdButton.remove(); // Remove o botão da tela
            funnyText.innerHTML = ""; // Remove a mensagem "Me pegue se conseguir!"
        });

        moveButton();
    }

    crazyButton.addEventListener('click', function() {
        funnyText.innerHTML = "Você realmente pegou o peido? Impossível!";
        randomPosition(crazyButton);

        for (let i = 0; i < 5; i++) {
            const poopEmoji = document.createElement('div');
            poopEmoji.textContent = '💩';
            poopEmoji.style.position = 'absolute';
            poopEmoji.style.fontSize = '50px';
            randomPosition(poopEmoji);
            surpriseContainer.appendChild(poopEmoji);

            setTimeout(() => {
                surpriseContainer.removeChild(poopEmoji);
            }, 3000);
        }

        currentSound = new Audio(fartSounds[Math.floor(Math.random() * fartSounds.length)]);
        createThirdButton("Clique para parar o som de peido", currentSound);
    });

    babyButton.addEventListener('click', function() {
        funnyText.innerHTML = "Oh, não! O bebê está chorando!";
        randomPosition(babyButton);

        for (let i = 0; i < 5; i++) {
            const babyFace = document.createElement('div');
            babyFace.textContent = '👶';
            babyFace.style.fontSize = '50px';
            randomPosition(babyFace);
            surpriseContainer.appendChild(babyFace);

            setTimeout(() => {
                surpriseContainer.removeChild(babyFace);
            }, 3000);
        }

        if (!babyCrySound.paused) {
            babyCrySound.currentTime = 0;
        }

        currentSound = babyCrySound;
        createThirdButton("Clique para parar o choro do bebê", currentSound);
    });
});
