
var total = 0;
function criarBolhas(){



    var bolha = document.createElement('span');
   

    var x = Math.floor(Math.random()* 1800);
    var y = Math.floor(Math.random()* 800);

    var tamanho = Math.random() * 80;
    bolha.style.width = tamanho +"px";
    bolha.setAttribute("onmousemove","estourar(this)");
    bolha.style.height = tamanho +"px";
    bolha.style.left = x+"px";
    bolha.style.top = y+ "px";
    document.body.appendChild(bolha);
    
}

function estourar(objeto){

    var container = document.getElementById("game");

    
    total++;
    var score = document.getElementById("bg");
    document.body.removeChild(objeto);
    bg.innerHTML = `<p>${total}</p>`
  }

setInterval(criarBolhas, 500);
