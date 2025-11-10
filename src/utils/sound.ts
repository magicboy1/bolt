const sounds = {
  catch: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'),
};

export const playSound = () => {
  const sound = sounds.catch;
  sound.currentTime = 0;
  sound.volume = 0.3;
  sound.play().catch(() => {
    // Ignore errors from browsers blocking autoplay
  });
};