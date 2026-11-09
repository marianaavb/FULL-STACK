"use strict";

const canvas = document.getElementById("desenho");
let ctx = canvas.getContext("2d");

function desenhar_quadrado(x, y, largura, altura, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(x1, y1, x2, y2, cor, espessura = 1) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = cor;
  ctx.lineWidth = espessura;
  ctx.stroke();
}

function desenhar_arco(x, y, raio, inicio, fim, cor, espessura = 1.5, sentidoAntiHorario = false) {
  ctx.beginPath();
  ctx.arc(x, y, raio, inicio, fim, sentidoAntiHorario);
  ctx.strokeStyle = cor;
  ctx.lineWidth = espessura;
  ctx.stroke();
}

function escrever(texto, x, y, cor = "#333", fonte = "20px Arial", alinhamento = "center") {
  ctx.fillStyle = cor;
  ctx.font = fonte;
  ctx.textAlign = alinhamento;
  ctx.textBaseline = "middle";
  ctx.fillText(texto, x, y);
}

function desenhar_circulo(x, y, raio, cor) {
  ctx.beginPath();
  ctx.arc(x, y, raio, 0, Math.PI * 2);
  ctx.fillStyle = cor;
  ctx.fill();
}

function desenhar_figura() {
  const verde = "#52ad62";
  const azul = "#0000ff";
  const ciano = "#00e5e5";
  const vermelho = "#ff0000";

  // Blocos dos cantos e os quadrados ciano das laterais.
  desenhar_quadrado(0, 0, 50, 50, azul);
  desenhar_quadrado(250, 0, 50, 50, vermelho);
  desenhar_quadrado(0, 120, 30, 60, ciano);
  desenhar_quadrado(270, 135, 30, 30, ciano);

  // Diagonais, linha central e arcos da metade superior.
  desenhar_linha(50, 50, 150, 150, "#4545ff", 1.5);
  desenhar_linha(250, 50, 150, 150, "#ff3b3b", 1.5);
  desenhar_linha(0, 150, 300, 150, verde, 1.5);
  desenhar_arco(150, 150, 60, Math.PI, Math.PI * 2, verde);
  desenhar_arco(150, 150, 90, Math.PI, Math.PI * 2, verde);

  escrever("Canvas", 150, 44, "#333", "20px Arial");
  desenhar_circulo(150, 115, 15, ciano);
  ctx.beginPath();
  ctx.arc(150, 115, 15, 0, Math.PI * 2);
  ctx.strokeStyle = azul;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Quadrado vermelho, eixo vertical, círculos e arcos inferiores.
  desenhar_quadrado(110, 150, 40, 40, vermelho);
  desenhar_linha(150, 190, 150, 300, "#777", 1.5);
  desenhar_circulo(70, 220, 15, "#ffff00");
  desenhar_circulo(220, 220, 15, "#ffff00");
  desenhar_arco(150, 300, 60, Math.PI, Math.PI * 2, verde);
  desenhar_arco(150, 300, 80, Math.PI, Math.PI * 2, verde);
  desenhar_circulo(150, 300, 40, ciano);
  ctx.beginPath();
  ctx.arc(150, 300, 40, Math.PI, Math.PI * 2);
  ctx.strokeStyle = verde;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Cantos inferiores em formato de "L".
  desenhar_quadrado(0, 240, 30, 60, "#ffff00");
  desenhar_quadrado(0, 270, 60, 30, "#ffff00");
  desenhar_quadrado(270, 240, 30, 60, "#000");
  desenhar_quadrado(240, 270, 60, 30, "#000");
}

desenhar_figura();

// Segunda referência: paisagem com casa, árvores, sol, estrada e rio.
const paisagem = document.getElementById("paisagem");
ctx = paisagem.getContext("2d");

function desenhar_paisagem() {
  const ceu = "#7ff2ce";
  const marrom = "#87451f";
  const verde = "#278c2d";

  desenhar_quadrado(0, 0, 500, 500, ceu);
  desenhar_circulo(375, 125, 62, "#fff923");

  // Estrada cinza e rio azul com margem curva.
  desenhar_quadrado(0, 375, 500, 125, "#858585");
  ctx.beginPath();
  ctx.moveTo(0, 313);
  ctx.arc(0, 375, 62, -Math.PI / 2, 0);
  ctx.lineTo(62, 438);
  ctx.lineTo(188, 438);
  ctx.arc(188, 500, 62, -Math.PI / 2, 0);
  ctx.lineTo(0, 500);
  ctx.closePath();
  ctx.fillStyle = "#4387f5";
  ctx.fill();

  // Troncos e copas das árvores.
  desenhar_quadrado(62, 312, 25, 63, marrom);
  desenhar_circulo(75, 287, 38, verde);
  desenhar_quadrado(437, 375, 25, 63, marrom);
  desenhar_circulo(450, 350, 38, verde);

  // Casa, telhado, janelas e porta.
  desenhar_quadrado(187, 250, 125, 125, marrom);
  ctx.beginPath();
  ctx.moveTo(187, 250);
  ctx.lineTo(250, 187);
  ctx.lineTo(312, 250);
  ctx.closePath();
  ctx.fillStyle = "#f1644f";
  ctx.fill();
  desenhar_quadrado(200, 275, 38, 38, "#37b8ed");
  desenhar_quadrado(262, 275, 38, 38, "#37b8ed");
  desenhar_quadrado(237, 313, 25, 62, "#684221");
}

desenhar_paisagem();
