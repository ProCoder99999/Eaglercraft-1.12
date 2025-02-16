document.addEventListener('DOMContentLoaded', () => {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameContainer = document.getElementById('game-container');

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            gameContainer.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });
});
