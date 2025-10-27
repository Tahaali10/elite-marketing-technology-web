const pins = document.querySelectorAll(".map-pin");
const tooltip = document.getElementById("tooltipModal");

pins.forEach((pin) => {
  pin.addEventListener("mouseenter", (e) => {
    const country = pin.getAttribute("data-country");
    tooltip.textContent = country;
    tooltip.style.display = "block";
    tooltip.style.top = `${e.target.offsetTop - 40}px`;
    tooltip.style.left = `${e.target.offsetLeft + 10}px`;
  });

  pin.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});



    document.addEventListener('DOMContentLoaded', function() {
            const video = document.querySelector('.video-background');
            const fallbackImage = document.querySelector('.video-fallback');
            
            // Check if the browser allows autoplay
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Autoplay started successfully
                    if (fallbackImage) {
                        fallbackImage.style.display = 'none';
                    }
                }).catch(() => {
                    // Autoplay was prevented, show fallback image
                    if (fallbackImage) {
                        fallbackImage.style.display = 'block';
                    }
                    video.style.display = 'none';
                });
            }
        });