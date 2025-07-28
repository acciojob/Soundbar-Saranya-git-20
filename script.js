let currentAudio;

    function playSound(name) {
      stopSound(); // stop previous sound
      currentAudio = new Audio(name + '.mp3');
      currentAudio.play();
    }

    function stopSound() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }