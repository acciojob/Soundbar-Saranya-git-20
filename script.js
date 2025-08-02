document.addEventListener('DOMContentLoaded', () => {
  const soundNames = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  const buttonContainer = document.getElementById('buttons');

  let currentAudio = null;

  // Create buttons dynamically
  soundNames.forEach(sound => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText = sound;
    btn.addEventListener('click', () => playSound(sound));
    buttonContainer.appendChild(btn);
  });

  function playSound(soundName) {
  // Stop previous audio if playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create and append audio to DOM
  const audio = document.createElement('audio');
  audio.src = `sounds/${soundName}.mp3`;
  audio.controls = true; // optional: shows player UI
  audio.autoplay = true;

  // Clear any old audio tag (optional)
  const existing = document.getElementById('active-audio');
  if (existing) existing.remove();

  audio.id = 'active-audio';
  document.body.appendChild(audio);

  currentAudio = audio;
}


  // Stop button logic
  document.querySelector('.stop').addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  });
});
