
var total = 0;
var intervalo = setInterval(criarBolhas, 500);
var estaPausado = false;
var estourarAtivo = true;



function criarBolhas(){
  let pauseBTN = document.getElementById('pause').addEventListener('click', pauseGame);
  let playBTN = document.getElementById('play').addEventListener('click', playGame);
  

  var bolha = document.createElement("span");
    

    var x = Math.floor(Math.random()* 1800);
    var y = Math.floor(Math.random()* 800);

    var tamanho = Math.random() * 80;
    bolha.style.width = tamanho +"px";
    bolha.setAttribute("onmousemove","estourar(this)");
    bolha.style.height = tamanho +"px";
    bolha.style.left = x+"px";
    bolha.style.top = y+ "px";
    document.body.appendChild(bolha);
    
    function playGame(){

      bolha.style.animation = "animate 7s ease-in-out infinite"

      if(estaPausado){
        intervalo = setInterval(criarBolhas, 500);
        estaPausado = false;
        estourarAtivo = true;
       
      }
      
    }
    function pauseGame(){
      
      bolha.style.animation = "none";
      clearInterval(intervalo);
      estaPausado = true;
      estourarAtivo = false;
     
    }
}





function estourar(objeto){
 
  if(estourarAtivo){
    var container = document.getElementById("bg");

    
    total++;
    var score = document.getElementById("game");
    document.body.removeChild(objeto);
    var number = document.querySelector('p');
    score.innerHTML = `<p>${total}</p>`
    upScore();
    upScore(number);
    number.style.position = "absolute";
  }}

  function upScore(){
    var score = document.getElementById('game');
    var escala = 1 + total ;
    var fontsize = `${escala * 4}px`;
    score.style.fontSize = fontsize;
  }
