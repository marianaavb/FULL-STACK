const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const radius = 22;

let x = canvas.width / 2;
let y = canvas.height / 2;
let targetX = x;
let targetY = y;

function moveCircle(event) {
  const bounds = canvas.getBoundingClientRect();
  const scaleX = canvas.width / bounds.width;
  const scaleY = canvas.height / bounds.height;

  targetX = Math.max(
    radius,
    Math.min(canvas.width - radius, (event.clientX - bounds.left) * scaleX)
  );
  targetY = Math.max(
    radius,
    Math.min(canvas.height - radius, (event.clientY - bounds.top) * scaleY)
  );
}

window.addEventListener("pointermove", moveCircle);

function animate() {
  x += (targetX - x) * 0.25;
  y += (targetY - y) * 0.25;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = "#e8f7ef";
  context.fill();

  requestAnimationFrame(animate);
}

animate();
