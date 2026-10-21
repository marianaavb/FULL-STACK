let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// QUADRADOS DOS CANTOS
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 38, 38);

ctx.fillStyle = "blue";
ctx.fillRect(342, 0, 38, 38);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 342, 38, 38);

ctx.fillStyle = "green";
ctx.fillRect(342, 342, 38, 38);


// LINHA DIAGONAL VERMELHA
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.moveTo(38, 38);
ctx.lineTo(380, 380);
ctx.stroke();
ctx.closePath();


// LINHA DIAGONAL AZUL
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(342, 38);
ctx.lineTo(0, 380);
ctx.stroke();
ctx.closePath();


// LINHA HORIZONTAL VERDE
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(0, 190);
ctx.lineTo(380, 190);
ctx.stroke();
ctx.closePath();


// SEMICÍRCULO VERDE
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.arc(190, 190, 63, 0, Math.PI);
ctx.stroke();
ctx.closePath();


// CÍRCULO AMARELO ESQUERDO
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.strokeStyle = "green";
ctx.arc(63, 127, 19, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


// CÍRCULO AMARELO DIREITO
ctx.beginPath();
ctx.arc(317, 127, 19, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


// TEXTO
ctx.fillStyle = "black";
ctx.font = "24px Arial";
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento Web", 190, 63);