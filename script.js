document.body.addEventListener("keyup", (e) => {
  playSound(e.code.toLowerCase());
});

document.querySelector(".composer button").onclick = () => {
  let inputElement = document.querySelector("#input").value;
  let inputArray = [];

  if (inputElement !== "") {
    inputArray = inputElement.split("");

    playComposer(inputArray);
  }
};

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key='${sound}']`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add("active");

    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}

function playComposer(inputArray) {
  let wait = 0;

  for (let i of inputArray) {
    setTimeout(() => {
      playSound(`key${i}`);
    }, wait);
    wait += 1000;

    playSound(`key${i}`);
  }
}
