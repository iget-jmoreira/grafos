var A12 = "#000";
var A15 = "#000";
var A23 = "#000";
var A25 = "#000";
var A34 = "#000";
var A46 = "#000";
var A56 = "#000";
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
nVERTICE = canvas.getContext('2d');
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("A", x-4, y+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("B", x+e-4, y+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("C", x+e+e-4, y+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("D", x+e+e+e-4, y+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("E", x+e-4, y+e+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("F", x+e+e+e-4, y+e+4);

// desenha o peso de cada aresta
pARESTA = canvas.getContext('2d');
pARESTA.font = "bold 11px sans-serif";
pARESTA.fillText("2", x+(e/2), y-3);
pARESTA.font = "bold 11px sans-serif";
pARESTA.fillText("6", x+(e/2)-8, y+(e/2)+8);
pARESTA.font = "bold 11px sans-serif";
pARESTA.fillText("3", x+e+(e/2)-3, y-3);
pARESTA.font = "bold 11px sans-serif";
pARESTA.fillText("1", x+e+3, y+(e/2));
pARESTA.font = "bold 11px sans-serif";
pARESTA.fillText("8", x+e+e+(e/2)-3, y-3);
pARESTA.font = "bold 11px sans-serif";
pARESTA.fillText("2", x+e+e+e+3, y+(e/2));
pARESTA.font = "bold 11px sans-serif";
pARESTA.fillText("2", x+e+e, y+e+12);

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

var colors = ["#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000"];

// desenha as arestas

drawARESTAS();

function drawARESTAS(){
	ARESTAS = canvas.getContext('2d');
	ARESTAS.lineWidth = 2;
	// 1-2
	ARESTAS.beginPath();
	ARESTAS.strokeStyle = colors[0];
	ARESTAS.moveTo(x+rr,y);
	ARESTAS.lineTo(x+e-rr, y);
	ARESTAS.stroke();
	// 1-5
	ARESTAS.beginPath();
	ARESTAS.strokeStyle = colors[1];
	ARESTAS.moveTo(x+rd,y+rd);
	ARESTAS.lineTo(x+e-rd, y+e-rd);
	ARESTAS.stroke();
	// 2-3
	ARESTAS.beginPath();
	ARESTAS.strokeStyle = colors[3];
	ARESTAS.moveTo(x+e+rr,y);
	ARESTAS.lineTo(x+e+e-rr, y);
	ARESTAS.stroke();
	// 2-5
	ARESTAS.beginPath();
	ARESTAS.strokeStyle = colors[4];
	ARESTAS.moveTo(x+e,y+rr);
	ARESTAS.lineTo(x+e, y+e-rr);
	ARESTAS.stroke();
	// 3-4
	ARESTAS.beginPath();
	ARESTAS.strokeStyle = colors[6];
	ARESTAS.moveTo(x+e+e+rr,y);
	ARESTAS.lineTo(x+e+e+e-rr, y);
	ARESTAS.stroke();
	// 4-6
	ARESTAS.beginPath();
	ARESTAS.strokeStyle = colors[8];
	ARESTAS.moveTo(x+e+e+e,y+rr);
	ARESTAS.lineTo(x+e+e+e, y+e-rr);
	ARESTAS.stroke();
	// 5-6
	ARESTAS.beginPath();
	ARESTAS.strokeStyle = colors[11];
	ARESTAS.moveTo(x+e+rr,y+e);
	ARESTAS.lineTo(x+e+e+e-rr, y+e);
	ARESTAS.stroke();
}

var points     = ['A', 'B', 'C', 'D', 'E', 'F'];
var startPoint = ['A','A','B','B','B','C','C','D','D','E','E','E','F','F'];
var endPoint   = ['B','E','A','C','E','B','D','C','F','A','B','F','D','E']
var pathWeight = [2, 6, 2, 3, 1, 3, 8, 8, 2, 6, 1, 2, 2, 2];
var usedPaths  = [];

drawPath();

function drawPath(step) {
	if (typeof step == 'undefined') {
		step = 0;
	}

	setTimeout(function() {
		usePath(indexOfSmallest(pathWeight));
		if (step < points.length - 2) {
			drawPath(++step);
		}
	}, 3000);
}

function indexOfSmallest(array) {
	var lowest = 0;
	for (var i = 1; i < array.length; i++) {
		if (array[i] < array[lowest]) {
			lowest = i;
		}
	}
	// console.log(lowest)
	return lowest;
}

function indexOfInverse(index) {
	var indexOfInverse;
	for(var i = 0; i < startPoint.length; i++){
		if((startPoint[i] == endPoint[index]) && (endPoint[i] == startPoint[index])){
			indexOfInverse = (i-1);
		}
	}
	return indexOfInverse;
}

var count = 0;
function usePath(index) {
	count++;
	usedPaths.push(index);
	usedPaths.push(indexOfInverse(index));
	console.log(count);
	console.log('Path ' + startPoint[index] + '' + endPoint[index] + ' percorrido');

	var valor = indexOfInverse(index);

	// problema e pq o index muda de acordo com o array q vai diminuindo
	console.log(index);
	colors[index] = "#F00";
	drawARESTAS();

	startPoint.splice(index, 1);
	endPoint.splice(index, 1);
	pathWeight.splice(index, 1);
	

	startPoint.splice(valor, 1);
	endPoint.splice(valor, 1);
	pathWeight.splice(valor, 1);

	
}