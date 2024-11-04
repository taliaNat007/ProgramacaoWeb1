document.addEventListener('DOMContentLoaded', function() {
    const crazyButton = document.getElementById('crazy-button');
    const babyButton = document.getElementById('baby-button');
    const funnyText = document.getElementById('funny-text');
    const surpriseContainer = document.getElementById('surprise-container');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const fartSounds = [
        'https://www.myinstants.com/media/sounds/fart-01.mp3',
        'https://www.myinstants.com/media/sounds/fart-sound-effect.mp3',
        'https://www.myinstants.com/media/sounds/fart-06.mp3',
        'https://www.myinstants.com/media/sounds/fart-03.mp3'
    ];
    let babyCrySounds = [
        new Audio('https://www.myinstants.com/media/sounds/baby-crying.mp3'),
        new Audio('https://www.myinstants.com/media/sounds/baby-crying.mp3'),
        new Audio('https://www.myinstants.com/media/sounds/baby-crying.mp3')
    ];
    let currentSound, thirdButton;

    // Ajusta o tamanho do canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function randomPosition(element) {
        const x = Math.random() * (window.innerWidth - element.offsetWidth);
        const y = Math.random() * (window.innerHeight - element.offsetHeight);
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    }

    function createThirdButton(label, sounds, intensify) {
        if (thirdButton) {
            thirdButton.remove();
        }

        thirdButton = document.createElement('button');
        thirdButton.className = 'third-button';
        thirdButton.textContent = label;
        document.body.appendChild(thirdButton);

        funnyText.innerHTML = "Me pegue se conseguir!";
        sounds.forEach(sound => sound.play());

        function moveButton() {
            randomPosition(thirdButton);
        }
        const moveInterval = setInterval(moveButton, 1000);

        thirdButton.addEventListener('click', () => {
            if (intensify) {
                sounds.forEach(sound => {
                    sound.volume = Math.min(1, sound.volume + 0.3); // Aumenta o volume em 30% a cada clique
                    sound.currentTime = 0; // Reinicia para que o aumento de volume seja notável
                    sound.play();
                });
            } else {
                sounds.forEach(sound => {
                    sound.pause();
                    sound.currentTime = 0;
                });
                clearInterval(moveInterval);
                thirdButton.remove();
                funnyText.innerHTML = "";
            }
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
        currentSound.loop = true; // Repete o som de peido continuamente
        createThirdButton("Clique para parar o som de peido", [currentSound], false);
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

        babyCrySounds.forEach(sound => {
            sound.loop = true; // Faz todos os sons de choro tocarem em loop
            sound.volume = 0.5; // Define o volume inicial moderado
        });

        currentSound = babyCrySounds;
        createThirdButton("Clique para parar o choro do bebê", babyCrySounds, true); // Aumenta o choro do bebê
        babyCrySounds.forEach(sound => sound.play()); // Inicia todos os choros do bebê

        // Inicia animação no canvas
        drawCanvas();
    });

    function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
        const radius = Math.random() * 20 + 5; // Raio aleatório para as bolhas
        const x = Math.random() * canvas.width; // Posição X aleatória
        const y = Math.random() * canvas.height; // Posição Y aleatória
        const color = `rgba(255, 255, 255, ${Math.random()})`; // Cor aleatória com transparência

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

        requestAnimationFrame(drawCanvas); // Chama a função novamente para animação contínua
    }
});
