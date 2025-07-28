const sounds = ['clap', 'boom', 'kick', 'snare'];
const buttonsContainer = document.getElementById('buttons');

// Create buttons for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSounds(); // stop any currently playing sound
    const audio = new Audio(`sound.mp3`);
    audio.play();
  });
  buttonsContainer.appendChild(btn);
});

// Add a STOP button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);

function stopSounds() {
  // Stop all audio elements
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}