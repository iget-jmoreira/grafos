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

	context.moveTo(x+86,y+7);
	context.lineTo(x+94, y+22);

	context.moveTo(x+65,y+38);
	context.lineTo(x+74, y+53);

	context.moveTo(x+95,y+38);
	context.lineTo(x+87, y+53);

	context.moveTo(x+89,y);
	context.lineTo(x+132, y+25);

	context.moveTo(x+140,y+40);
	context.lineTo(x+140, y+50);

	context.moveTo(x+85,y+68);
	context.lineTo(x+102, y+84);

	context.moveTo(x+134,y+68);
	context.lineTo(x+118, y+84);
	
	context.stroke();

	// algoritmo

	var vertice_inicial = 0;
	var verticeAtual = vertice_inicial;
	var caminho = [];
	var resultado = [];
	
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

	function dfs(){
		// pega vertice inicial
		// pega adjacentes do inical - filhos direto
		// pra cada adjacente, verifica se tem adjacentes
		// se tiver, vai fazendo isso ate n ter mais filhos
		// printa o que nao tiver filho ou os que o filho ja estiver no caminho final
	}
	
	function getFilho(v){
		if(arestas[v]){
			return arestas[v][0];
		}
		return false;
	}

	function checkFilhos(v){
		if(arestas[v].length > 0){
			return true;
		}
		return false;
	}

	// checa se tem irmao
	function checkIrmaoForaDoArray(v){
		for(i=0; i<caminho.length; i++){
			if(caminho[i] == v){
				return true;
			}
		}
		return false;
	}

	function getIrmaos(v){
		for(i = 0; i<9;i++){
			if((arestas[i].indexOf(vertices[v]) >= 0) && (arestas[i].length > 1)){
				return arestas[i];
			}
		}
	}
	function irmaosNoArray(v){
		irmaos = getIrmaos(v);
		for(i=0; i < irmaos.length; i++){

		}
	}

	function getIrmaoForaDoArray(v){
		for(i = 0; i<9;i++){
			if((arestas[i].indexOf(vertices[v]) >= 0) && (arestas[i].length > 1)){
				return true;
			}
		}
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

	function getAnterior(v){
		indexAtual = caminho.indexOf(v);
		return caminho[indexAtual-1];
	}
	caminho.push(3);
	function getUltimo(){
		caminho.push(verticeAtual);
		var permission = true;
		// enquanto permission = true && enquanto nao for um cara sem filhos
		// permission vai ser false quando o pai tiver filhos que ja estao no array
		// while(checkFilhos(verticeAtual)){
			// Se o filho nao tiver no array `caminho`
			// reseta o verticeAtual
			// adiciona ao array
			// console.log("filho");
			// verticeAtual = vertices.indexOf(getFilho(verticeAtual));
			// caminho.push(verticeAtual);
			// if(caminho.indexOf(vertices.indexOf(getFilho(verticeAtual))) >= 0){
			// 	caminho.push(verticeAtual);
			// } else {
			// 	// o filho ja está no array
			// 	// checa se tem irmaos fora do array
			// 	if(!checkIrmaoForaDoArray(verticeAtual)){
			// 		verticeAtual = vertices.indexOf(getIrmaoForaDoArray(verticeAtual));
			// 	} else {
			// 		// nao tem irmaos fora do array
			// 		permission = false;
			// 	}
			// }
		// }
		while(permission && (verticeAtual < 8)){
			if(caminho.indexOf(vertices.indexOf(getFilho(verticeAtual))) < 0){
				verticeAtual = vertices.indexOf(getFilho(verticeAtual));
				caminho.push(verticeAtual);
			} else {
				// checa irmaos
				irmaos = getIrmaos(vertices.indexOf(getFilho(verticeAtual)));
				for(n = 0; n<irmaos.length; n++){
					if(caminho.indexOf(vertices.indexOf(getFilho(vertices.indexOf(irmaos[n])))) < 0){
						verticeAtual = vertices.indexOf(getFilho(vertices.indexOf(irmaos[n]));
						caminho.push(irmaos[n]);
					} else {
						permission = false;
					}
				}
			}
		}


		// while(getFilho(verticeAtual) !== undefined){
		// 	verticeAtual = vertices.indexOf(getFilho(verticeAtual));
		// 	caminho.push(verticeAtual+"asd");
		// }
	}
	getUltimo();
	console.log(caminho);
	
	// console.log(getAnterior(verticeAtual));

	// while(verticeAtual != vertice_inicial){

	// }
};