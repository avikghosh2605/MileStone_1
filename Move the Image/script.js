const image = document.getElementById("container");

let xPos = 0;
let yPos = 0;
image.style.top = yPos + "px";
image.style.left = xPos + "px";

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      yPos -= 10;
      image.style.top = yPos + "px";
      break;
    case "ArrowDown":
      yPos += 10;
      image.style.top = yPos + "px";
      break;
    case "ArrowLeft":
      xPos -= 10;
      image.style.left = xPos + "px";
      break;
    case "ArrowRight":
      xPos += 10;
      image.style.left = xPos + "px";
      break;
  }
});