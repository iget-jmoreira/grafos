var c1 = "#000";
var c2 = "#000";
var c3 = "#000";
var c4 = "#000";
var c5 = "#000";
var c6 = "#000";
var clinhas = "#000";

canvas = document.getElementById("grafo");

var x = 85;
var y = 20;
// espaço padrão
var e = 55;
// raio diagonal
var rd = 7;
// raio reto
var rr = 10;

// desenha os numeros
nVERTICE = canvas.getContext('2d');
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("1", x+e-3, y+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("2", x-3, y+e+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("3", x+e-3, y+e+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("4", x+e-3, y+e+e+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("5", x+e+e-3, y+e+e+4);
nVERTICE.font = "bold 11px sans-serif";
nVERTICE.fillText("6", x+e+e-3, y+e+4);

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
VERTICES.arc(x+e, y,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c1;
VERTICES.stroke();

// 2
VERTICES.beginPath();
VERTICES.arc(x, y+e,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c2;
VERTICES.stroke();

// 3
VERTICES.beginPath();
VERTICES.arc(x+e, y+e,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c3;
VERTICES.stroke();

// 4
VERTICES.beginPath();
VERTICES.arc(x+e, y+e+e,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c4;
VERTICES.stroke();

// 5
VERTICES.beginPath();
VERTICES.arc(x+e+e, y+e+e,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c5;
VERTICES.stroke();

// 6
VERTICES.beginPath();
VERTICES.arc(x+e+e, y+e,10,0,Math.PI * 2,true);
VERTICES.closePath();
VERTICES.strokeStyle = c6;
VERTICES.stroke();

// desenha as arestas
ARESTAS = canvas.getContext('2d');
ARESTAS.strokeStyle = clinhas;
// 1-2
ARESTAS.moveTo(x+e-rd,y+rd);
ARESTAS.lineTo(x+rd, y+e-rd);
// 1-3
ARESTAS.moveTo(x+e,y+rr);
ARESTAS.lineTo(x+e, y+e-rr);
// 1-6
ARESTAS.moveTo(x+e+rd,y+rd);
ARESTAS.lineTo(x+e+e-rd, y+e-rd);
// 2-3
ARESTAS.moveTo(x+rr,y+e);
ARESTAS.lineTo(x+e-rr, y+e);
// 2-4
ARESTAS.moveTo(x+rd,y+e+rd);
ARESTAS.lineTo(x+e-rd, y+e+e-rd);
// 3-4
ARESTAS.moveTo(x+e,y+e);
ARESTAS.lineTo(x+e, y+e+e);
// 3-6
ARESTAS.moveTo(x+e,y+e);
ARESTAS.lineTo(x+e+e, y+e);
// 4-5
ARESTAS.moveTo(x+e,y+e+e);
ARESTAS.lineTo(x+e+e, y+e+e);
// 5-6
ARESTAS.moveTo(x+e+e,y+e+e);
ARESTAS.lineTo(x+e+e, y+e);

ARESTAS.stroke();



var graph_array = [
	['a', 'b', 7],
	['a', 'c', 9],
	['a', 'f', 14],
	['b', 'c', 10],
	['b', 'd', 15],
	['c', 'd', 11],
	['c', 'f', 2],
	['d', 'e', 6],
	['e', 'f', 9],
];


// <?php
// function dijkstra($graph_array, $source, $target) {
//     $vertices = array();
//     $neighbours = array();
//     foreach ($graph_array as $edge) {
//         array_push($vertices, $edge[0], $edge[1]);
//         $neighbours[$edge[0]][] = array("end" => $edge[1], "cost" => $edge[2]);
//         $neighbours[$edge[1]][] = array("end" => $edge[0], "cost" => $edge[2]);
//     }
//     $vertices = array_unique($vertices);
 
//     foreach ($vertices as $vertex) {
//         $dist[$vertex] = INF;
//         $previous[$vertex] = NULL;
//     }
 
//     $dist[$source] = 0;
//     $Q = $vertices;
//     while (count($Q) > 0) {
 
//         // TODO - Find faster way to get minimum
//         $min = INF;
//         foreach ($Q as $vertex){
//             if ($dist[$vertex] < $min) {
//                 $min = $dist[$vertex];
//                 $u = $vertex;
//             }
//         }
 
//         $Q = array_diff($Q, array($u));
//         if ($dist[$u] == INF or $u == $target) {
//             break;
//         }
 
//         if (isset($neighbours[$u])) {
//             foreach ($neighbours[$u] as $arr) {
//                 $alt = $dist[$u] + $arr["cost"];
//                 if ($alt < $dist[$arr["end"]]) {
//                     $dist[$arr["end"]] = $alt;
//                     $previous[$arr["end"]] = $u;
//                 }
//             }
//         }
//     }
//     $path = array();
//     $u = $target;
//     while (isset($previous[$u])) {
//         array_unshift($path, $u);
//         $u = $previous[$u];
//     }
//     array_unshift($path, $u);
//     return $path;
// }
 
// $graph_array = array(
//                     array("a", "b", 7),
//                     array("a", "c", 9),
//                     array("a", "f", 14),
//                     array("b", "c", 10),
//                     array("b", "d", 15),
//                     array("c", "d", 11),
//                     array("c", "f", 2),
//                     array("d", "e", 6),
//                     array("e", "f", 9)
//                );
var graph_array = [
	['a', 'b', 7],
	['a', 'c', 9],
	['a', 'f', 14],
	['b', 'c', 10],
	['b', 'd', 15],
	['c', 'd', 11],
	['c', 'f', 2],
	['d', 'e', 6],
	['e', 'f', 9],
];
 
// $path = dijkstra($graph_array, "a", "e");
 
// echo "path is: ".implode(", ", $path)."\n";