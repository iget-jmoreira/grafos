var c1 = "#000";
var c2 = "#000";
var c3 = "#000";
var c4 = "#000";
var c5 = "#000";
var c6 = "#000";
var clinhas = "#000";

canvas = document.getElementById("grafo");

var x = 20;
var y = 30;
// espaço padrão
var e = 85;
// raio diagonal
var rd = 7;
// raio reto
var rr = 10;

// desenha os numeros
nVERTICE = canvas.getContext('2d');
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("1", x-3, y+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("2", x+e-3, y+e+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("3", x+e-3, y+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("4", x+e+e-3, y+e+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("5", x+e+e-3, y+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("6", x+e+e+e-3, y+4);

// desenha o peso de cada aresta
pARESTA = canvas.getContext('2d');
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("1", x+(e/2)-12, y+(e/2)+10);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("3", x+(e/2), y-5);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("1", x+e-10, y+(e/2)+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("2", x+e+(e/2), y+e+13);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("3", x+e+(e/2)-12, y+(e/2));
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("2", x+e+(e/2), y-5);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("-3", x+e+e-12, y+(e/2));
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("3", x+e+e+(e/2)+4, y+(e/2)+10);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("2", x+e+e+(e/2), y-5);

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
VERTICES.arc(x+e, y+e,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c2;
VERTICES.stroke();

// 3
VERTICES.beginPath();
VERTICES.arc(x+e, y,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c3;
VERTICES.stroke();

// 4
VERTICES.beginPath();
VERTICES.arc(x+e+e, y+e,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c4;
VERTICES.stroke();

// 5
VERTICES.beginPath();
VERTICES.arc(x+e+e, y,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c5;
VERTICES.stroke();

// 6
VERTICES.beginPath();
VERTICES.arc(x+e+e+e, y,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c6;
VERTICES.stroke();

// desenha as arestas
ARESTAS = canvas.getContext('2d');
ARESTAS.strokeStyle = clinhas;
// 1-2
ARESTAS.moveTo(x+rd,y+rd);
ARESTAS.lineTo(x+e-rd, y+e-rd);
// 1-3
ARESTAS.moveTo(x+rr,y);
ARESTAS.lineTo(x+e-rr, y);
// 2-3
ARESTAS.moveTo(x+e,y+e-rr);
ARESTAS.lineTo(x+e, y+rr);
// 2-4
ARESTAS.moveTo(x+e+rr,y+e);
ARESTAS.lineTo(x+e+e-rr, y+e);
// 2-5
ARESTAS.moveTo(x+e+rd,y+e-rd);
ARESTAS.lineTo(x+e+e-rd, y+rd);
// 3-5
ARESTAS.moveTo(x+e+rr,y);
ARESTAS.lineTo(x+e+e-rr, y);
// 4-5
ARESTAS.moveTo(x+e+e,y+e-rr);
ARESTAS.lineTo(x+e+e, y+rr);
// 4-6
ARESTAS.moveTo(x+e+e+rd,y+e-rd);
ARESTAS.lineTo(x+e+e+e-rd, y+rd);
// 5-6
ARESTAS.moveTo(x+e+e+rr,y);
ARESTAS.lineTo(x+e+e+e-rr, y);

ARESTAS.stroke();



















var origem = [1,1,2,2,2,3,4,4,5];
var destino = [2,3,3,4,5,5,6,5,6];
var custo = [1,3,1,2,3,2,3,-3,2];
var nos = 6;
var narcos = 9;

// Define o infinito como sendo a soma de todos os custos
var infinito = 14;

var Corigem = document.getElementById("origem");
var Cdestino = document.getElementById("destino");
var Cpeso = document.getElementById("peso");
// Imprimindo origem destino e custo
for(var i = 0 ;i < origem.length ; i++) {
    Corigem.appendChild(document.createElement("td")).textContent = origem[i];
    Cdestino.appendChild(document.createElement("td")).textContent = destino[i];
    Cpeso.appendChild(document.createElement("td")).textContent = custo[i];
}

// ------ Passo inicial


var t = [];
// // Seta os valores de T
for(var i =0 ;i < 6 ;i++) { 
    if(i == 1) {
        t[i] = i;
    } else {
        t[i] = "nulo";
    }
}

var v = [];
// // Seta os valores de V
for(i = 0 ;i < 6 ;i++) { 
    if(i == 1) {
        v[i] = "nulo";
    } else {
        v[i] = i;
    }
}

var inicio = document.getElementById("inicio");
console.log("Início");
console.log("T: "+t);
console.log("V: "+v);

// // ------ Fim do passo inicial
var total_nos = origem.length;
for(var x = 0; x < nos-1; x++) {

// // Verifica origem -> destino
    var minimo1 = infinito;
    var aux1;
    for(i = 0 ; i < narcos ; i++) {
       for(var j = 0 ; j < nos ; j++) {
            if(origem[i] == t[j]) {
                for(var k = 0 ; k < nos ; k++) {
                    if(destino[i] == v[k]) {
                        if(custo[i] < minimo1) {
                            minimo1 = custo[i];
                            aux1 = i;
                        }
                    }
                }
            }
       }
    }



// // Verifica destino -> origem
    var minimo2 = infinito;
    var aux2;
    for(var i = 0 ; i < narcos ; i++) {
        for(var j = 0 ; j < nos ; j++) {
            if(destino[i] == t[j]) {
                for(var k = 0 ; k < nos ; k++) {
                    if(origem[i] == v[k]) {
                        if(custo[i] < minimo2) {
                            minimo2 = custo[i];
                            aux2 = i;
                        }
                    }
                }
            }
        }
    }

    console.log(""+(x+1)+"° iteração:");

    if(minimo2 < minimo1) {
        minimo = minimo1;
        aux = aux1;
        console.log("Aresta ("+origem[aux]+", "+destino[aux]+") escolhida de custo "+custo[aux]);
        t[destino[aux]] = destino[aux];
        v[destino[aux]] = "nulo";
    } else {
        minimo = minimo2;
        aux = aux2;
        console.log("--Aresta ("+destino[aux]+", "+origem[aux]+") escolhida de custo "+custo[aux]);
        t[origem[aux]] = origem[aux];
        v[origem[aux]] = "nulo";   
    }

    console.log("T: "+t);
    console.log("V: "+v);
}