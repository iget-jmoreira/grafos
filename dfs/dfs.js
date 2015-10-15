window.onload=function(){ 
	montaGrafo();
};

function montaGrafo() {
	canvas = document.getElementById("grafo");
	context = canvas.getContext('2d');

	var x = 60;
	var y = 30;
	var h = 40;

	// desenha as letras
	context.font = "bold 11px sans-serif";
	context.fillText("A", x-4, y+4);
	context.font = "bold 11px sans-serif";
	context.fillText("B", x+36, y+4);
	context.font = "bold 11px sans-serif";
	context.fillText("C", x+76, y+4);
	context.font = "bold 11px sans-serif";
	context.fillText("D", x+56, 2*y+4);
	context.font = "bold 11px sans-serif";
	context.fillText("E", x+96, 2*y+4);
	context.font = "bold 11px sans-serif";
	context.fillText("F", x+76, 3*y+4);
	context.font = "bold 11px sans-serif";
	context.fillText("G", x+136, 2*y+4);
	context.font = "bold 11px sans-serif";
	context.fillText("H", x+136, 3*y+4);
	context.font = "bold 11px sans-serif";
	context.fillText("I", x+108, 4*y+4);


	// desenha os vertices
	context.beginPath();
	context.arc(x, y,10,0,Math.PI * 2,true);
	context.closePath();
	context.strokeStyle = "#000";
	context.stroke();

	context.beginPath();
	context.arc(x+40, y,10,0,Math.PI * 2,true);
	context.closePath();
	context.strokeStyle = "#000";
	context.stroke();

	context.beginPath();
	context.arc(x+80, y,10,0,Math.PI * 2,true);
	context.closePath();
	context.strokeStyle = "#000";
	context.stroke();

	context.beginPath();
	context.arc(x+60, y+y,10,0,Math.PI * 2,true);
	context.closePath();
	context.strokeStyle = "#000";
	context.stroke();

	context.beginPath();
	context.arc(x+100, y+y,10,0,Math.PI * 2,true);
	context.closePath();
	context.strokeStyle = "#000";
	context.stroke();

	context.beginPath();
	context.arc(x+80, y+y+y,10,0,Math.PI * 2,true);
	context.closePath();
	context.strokeStyle = "#000";
	context.stroke();

	context.beginPath();
	context.arc(x+140, y+y,10,0,Math.PI * 2,true);
	context.closePath();
	context.strokeStyle = "#000";
	context.stroke();

	context.beginPath();
	context.arc(x+140, y+y+y,10,0,Math.PI * 2,true);
	context.closePath();
	context.strokeStyle = "#000";
	context.stroke();

	context.beginPath();
	context.arc(x+110,y+y+y+y,10,0,Math.PI * 2,true);
	context.closePath();
	context.strokeStyle = "#000";
	context.stroke();

	// desenha as arestas
	context.moveTo(x+9,y);
	context.lineTo(x+31, y);

	context.moveTo(x+49,y);
	context.lineTo(x+71, y);

	context.moveTo(x+74,y+7);
	context.lineTo(x+65, y+22);

	context.moveTo(x+49,y);
	context.lineTo(x+71, y);

	context.moveTo(x+49,y);
	context.lineTo(x+71, y);

	context.moveTo(x+49,y);
	context.lineTo(x+71, y);

	context.moveTo(x+49,y);
	context.lineTo(x+71, y);

	context.moveTo(x+49,y);
	context.lineTo(x+71, y);

	context.moveTo(x+49,y);
	context.lineTo(x+71, y);

	context.moveTo(x+49,y);
	context.lineTo(x+71, y);
	
	context.stroke();

	// algoritmo

	
	var vertice_inicial = 0;
	var verticeAtual = vertice_inicial;
	
	var vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
	
	var numVertices = 9;

	var arestas = {
		0: ["B"],
		1: ["C"],
		2: ["D", "E", "G"],
		3: ["F"],
		4: ["F"],
		5: ["I"],
		6: ["H"],
		7: ["I"],
		8: []
	};
	

	function getFilho(v){
		if(arestas[v]){
			return arestas[v][0];
		}
		return false;
	}

	function getPais(v) {
		pais = [];
		for(i = 0; i<9; i++){
			if(arestas[i].indexOf(v) >= 0){
				pais.push(i);
			}
		}
		return pais;
	}

	function countFilhos(v){
		if(arestas[v]){
			return arestas[v].length;
		}
		return false;
	}

	console.log(vertices.indexOf("B"));

	// while(getFilho(verticeAtual) !== undefined){
	// 	console.log(verticeAtual);
	// 	// altera verticeAtual
	// 	verticeAtual = getFilho(verticeAtual);
	// }
};