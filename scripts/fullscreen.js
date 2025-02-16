document.addEventListener("DOMContentLoaded", function() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameIframe = document.getElementById('game-iframe');

    fullscreenBtn.addEventListener('click', function() {
        if (gameIframe.requestFullscreen) {
            gameIframe.requestFullscreen();
        } else if (gameIframe.mozRequestFullScreen) { // Firefox
            gameIframe.mozRequestFullScreen();
        } else if (gameIframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
            gameIframe.webkitRequestFullscreen();
        } else if (gameIframe.msRequestFullscreen) { // IE/Edge
            gameIframe.msRequestFullscreen();
        }
    });
});
