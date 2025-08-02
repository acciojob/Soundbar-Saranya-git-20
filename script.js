const soundNames = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonContainer = document.getElementById('buttons');

let currentAudio = null;

// Create a button for each sound
soundNames.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;
  btn.addEventListener('click', () => playSound(sound));
  buttonContainer.appendChild(btn);
});

// Play the corresponding sound
function playSound(soundName) {
  // Stop previous audio if playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const audio = new Audio(`sounds/${soundName}.mp3`);
  audio.play();
  currentAudio = audio;
}

// Stop button logic
document.querySelector('.stop').addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
