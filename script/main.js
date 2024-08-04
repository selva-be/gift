document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  if (container) {
    container.style.visibility = "visible";
    container.style.opacity = "1"; // Start with opacity 1
  }
});

// Animation using GSAP
const animationTimeline = () => {
  const tl = new TimelineMax();

  tl.to(".container", 0.1, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 10 })
    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".two", 0.7, { opacity: 0, y: 10 })
    .to(".two", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.05)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=0.7")
    .from(".idea-1", 0.7, { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" })
    .to(".idea-1", 0.7, { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" }, "+=1.5")
    .from(".idea-2", 0.7, { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" })
    .to(".idea-2", 0.7, { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" }, "+=1.5")
    .from(".idea-3", 0.7, { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" })
    .to(".idea-3 strong", 0.5, { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
    .to(".idea-3", 0.7, { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" }, "+=1.5")
    .from(".idea-4", 0.7, { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" })
    .to(".idea-4", 0.7, { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" }, "+=1.5")
    .from(".idea-5", 0.7, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 })
    .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=0.4")
    .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
    .staggerFrom(".idea-6 span", 0.8, { scale: 3, opacity: 0, y: 50 }, 0.05)
    .staggerTo(".idea-6 span", 0.7, { scale: 1, opacity: 1 }, 0.05, "+=2")
    .from(".girl-dp", 1, { opacity: 0, y: -30, x: -30 })
    .to(".girl-dp", 1, { opacity: 1, y: 0, x: 0 })
    .from(".wish", 1, { opacity: 0, x: -50 })
    .from(".wish-hbd", 1, { opacity: 0, scale: 0.2 }, "+=1")
    .from(".nine", 0.7, { opacity: 0, scale: 0.5, y: -10 }, "+=2")
    .from("#replay", 0.3, { opacity: 0, y: 10 })
    .to(".nine", 0.3, { opacity: 1, y: 0 })
    .to(".nine", 0.5, { opacity: 0, y: 10 }, "+=1")
    .to(".container", 0.5, { opacity: 0 }, "+=1")
    .to(".nine", 0.5, { opacity: 1 }, "+=1");

  return tl;
};

// Initialize animation on page load
window.addEventListener('load', () => {
  animationTimeline();
});

// Button click event for redirect
const clickMeBtn = document.getElementById('clickMeBtn');
if (clickMeBtn) {
  clickMeBtn.addEventListener('click', () => {
    const heartAnimation = document.getElementById('heartAnimation');
    if (heartAnimation) {
      // Show heart animation
      heartAnimation.style.display = 'flex';

      // After animation ends, redirect to the new page
      setTimeout(() => {
          window.location.href = 'greetings.html'; // Change to your actual greetings page URL
      }, 2000); // Matches the duration of the animation
    }
  });
}
