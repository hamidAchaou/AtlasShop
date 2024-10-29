document.addEventListener("DOMContentLoaded", () => {
    const reels = document.querySelectorAll(".reel");
    const nextButtons = document.querySelectorAll(".next-btn");
    let currentIndex = 0;
  
    // Function to scroll to the current video
    function scrollToVideo(index) {
      if (index >= 0 && index < reels.length) {
        reels[index].scrollIntoView({ behavior: "smooth" });
      }
    }
  
    // Observe each reel video
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video");
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.8 } // video must be 80% visible to play
    );
  
    reels.forEach((reel) => observer.observe(reel));
  
    // Next button functionality
    nextButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % reels.length;
        scrollToVideo(currentIndex);
      });
    });
  
    // Keyboard arrow key functionality
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % reels.length;
        scrollToVideo(currentIndex);
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + reels.length) % reels.length;
        scrollToVideo(currentIndex);
      }
    });
  });
  