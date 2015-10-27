var c1 = "#000";
var c2 = "#000";
var c3 = "#000";
var c4 = "#000";
var c5 = "#000";
var c6 = "#000";
var clinhas = "#000";

canvas = document.getElementById("grafo");

var x = 65;
var y = 40;
// espaço padrão
var e = 55;
// raio diagonal
var rd = 7;
// raio reto
var rr = 10;

// desenha os numeros
// nVERTICE = canvas.getContext('2d');
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("1", x+e-3, y+4);
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("2", x-3, y+e+4);
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("3", x+e-3, y+e+4);
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("4", x+e-3, y+e+e+4);
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("5", x+e+e-3, y+e+e+4);
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("6", x+e+e-3, y+e+4);

// desenha o peso de cada aresta
// pARESTA = canvas.getContext('2d');
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("7", x+(e/2)-12, y+(e/2));
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("9", x+e+3, y+(e/2)+5);
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("14", x+e+(e/2)+3, y+(e/2));
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("10", x+(e/2), y+e-3);
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("15", x+(e/2)-15, y+e+(e/2)+10);
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("11", x+e-15, y+e+(e/2));
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("2", x+e+(e/2)-3, y+e+13);
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("6", x+e+(e/2)-3, y+e+e-3);
// nVERTICE.font = "bold 11px sans-serif";
// nVERTICE.fillText("2", x+e+e+3, y+e+(e/2)+3);

// desenha os vertices
VERTICES = canvas.getContext('2d');
// 1
VERTICES.beginPath();
VERTICES.arc(x, y,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c1;
VERTICES.stroke();

// 2
VERTICES.beginPath();
VERTICES.arc(x+e, y,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c2;
VERTICES.stroke();

// 3
VERTICES.beginPath();
VERTICES.arc(x+e+e, y,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c3;
VERTICES.stroke();

// 4
VERTICES.beginPath();
VERTICES.arc(x+e+e+e, y,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c4;
VERTICES.stroke();

// 5
VERTICES.beginPath();
VERTICES.arc(x+e, y+e,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c5;
VERTICES.stroke();

// 6
VERTICES.beginPath();
VERTICES.arc(x+e+e+e, y+e,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c6;
VERTICES.stroke();

// desenha as arestas
ARESTAS = canvas.getContext('2d');
ARESTAS.strokeStyle = clinhas;
// 1-2
ARESTAS.moveTo(x+rr,y);
ARESTAS.lineTo(x+e-rr, y);
// 1-5
ARESTAS.moveTo(x+rd,y+rd);
ARESTAS.lineTo(x+e-rd, y+e-rd);
// 2-3
ARESTAS.moveTo(x+e+rr,y);
ARESTAS.lineTo(x+e+e-rr, y);
// 2-5
ARESTAS.moveTo(x+e,y+rr);
ARESTAS.lineTo(x+e, y+e-rr);
// 3-4
ARESTAS.moveTo(x+e+e+rr,y);
ARESTAS.lineTo(x+e+e+e-rr, y);
// 4-6
ARESTAS.moveTo(x+e+e+e,y+rr);
ARESTAS.lineTo(x+e+e+e, y+e-rr);
// 5-6
ARESTAS.moveTo(x+e+rr,y+e);
ARESTAS.lineTo(x+e+e+e-rr, y+e);

ARESTAS.stroke();