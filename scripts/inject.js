const checkAdInterval = setInterval(() => {
  const adShowing = document.querySelector('.ad-showing');
  if (!adShowing) {
    return;
  }

  const video = document.querySelector('video');
  if (!video) {
    return;
  }

  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) {
    skipButton.click();
  } else {
    video.currentTime = isNaN(video.duration) ? 0 : video.duration;
  }
}, 300);














