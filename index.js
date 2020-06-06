window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sounds");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#050a3b",
    "#071a52",
    "#086972",
    "#17b978",
    "#a7ff83",
    "#d7ffc8",
  ];

  //let's get going with the sound
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  //creaye a function that makes bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1.5s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
