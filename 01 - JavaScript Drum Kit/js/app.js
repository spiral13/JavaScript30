function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    // Stop the function running all together;
    if (!audio) {
        return;
    } 

    key.classList.add('playing');
    audio.currentTime = 0; // Rewind to the start
    audio.play();
};

function removeTransition(e) {
    if (this.classList.contains('playing')) {
        this.classList.remove('playing');
    }
}

const keys = document.querySelectorAll('.key');
//console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);