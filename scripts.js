const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('mouseover', () => {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

noButton.addEventListener('click', () => {
    noButton.classList.add('moved');
});

yesButton.addEventListener('click', function() {
    document.body.innerHTML = `
        <div class="container">
            <div class="gif-container">
                <h1>Yaaaayyyy!❤️❤️</h1>
                <img src="cute-bears-love.gif" alt="Valentine GIF">
            </div>
        </div>
    `;
});
