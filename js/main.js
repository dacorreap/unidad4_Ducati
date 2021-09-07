window.onload = init;

function init() {
    var sound = new Howl({
        src: ['../sonidos/Ducati.mp3'],
    });

//referencias
var playMusic = document.getElementById('playMusic');
var pauseMusic = document.getElementById('pauseMusic');
var stopMusic = document.getElementById('stopMusic');

//eventos
playMusic.addEventListener('click', function(){
    sound.play();
    playMusic.className = "hidden";
    pauseMusic.className = "";
    stopMusic.className = "";
});

pauseMusic.addEventListener('click', function() {
    sound.pause();
    playMusic.className = "";
    pauseMusic.className = "hidden";
    stopMusic.className = "hidden";
});

stopMusic.addEventListener('click', function() {
    sound.stop();
    playMusic.className = "";
    pauseMusic.className = "hidden";
    stopMusic.className = "hidden";
});
}