function controlVideo(action) {
    const video = document.querySelector("video");
    if (video) {
      if (action === "pause" && !video.paused) video.pause();
      if (action === "play" && video.paused) video.play();
    }
  }
  
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "checkFocus") {
      const isTabActive = !document.hidden;
      controlVideo(isTabActive ? "play" : "pause");
    }
  });
  
  document.addEventListener("visibilitychange", () => {
    const isTabActive = !document.hidden;
    controlVideo(isTabActive ? "play" : "pause");
  });
  