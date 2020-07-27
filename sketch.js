/*
  LINKS PARA OS VIDEOS:
  PARTE 1: https://youtu.be/DiLU2rCWW14
  PARTE 2: https://youtu.be/DA5eop-UUN0
  PARTE 3: https://youtu.be/InWIPGqcRB8
  PARTE 4: https://youtu.be/pgvfrgBjkiY
  PARTE 5: https://youtu.be/kklC76hOhNc
  PARTE 6: https://youtu.be/WKIWoCUNjR8
  PARTE 7: https://youtu.be/f3A1hWQ7-9c
  PARTE 8: https://youtu.be/3JynwC9afKE
  PARTE 9: https://youtu.be/l2b70WMQ0To
  
*/


var x = 290;         //BLOCO DE SELEÇÃO MENU
var y = 90;
var opcao = 1;
var tela = 0;

var pontos = 0;      //BARRA DE PONTOS e NIVEL
var nivel = 1;
var barradepontos = 2000;

var xEspaco = 150, yEspaco = 100, rEspaco = 50;      //BLOCOS
var xEspaco2 = 350, yEspaco2 = 100, rEspaco2 = 50;
var xEspaco3 = 550, yEspaco3 = 100, rEspaco3 = 50;

var posXI = 100;      //PLANTA
var posYI = 400;
var raio = 50;

var posXI2 = 300;    //GAFANHOTO
var posYI2 = 400;
var raio2 = 50;

var posXI3 = 430;    //RÃ 
var posYI3 = 400;
var raio3 = 50;

let img;
function preload(){
  img = loadImage('Planta1.jpg');
  img2 = loadImage('gafanhoto.jpg');
  img3 = loadImage('RA.jpg');
  img4 = loadImage('seta2.png');
  img5 = loadImage('Franc.jpg');
  img6 = loadImage('Wes.jpg');
}

function setup(){
  createCanvas(800, 500);
  imageMode(CENTER);
  image(img, 50, 150, 80,80);
  image(img2, 150, 180, 80, 80);
  image(img3, 200, 220, 80, 80);
}

function draw() {
  if(tela == 0){
  background("#F48C06");
    menu();
  }
  if(tela == 1){
  background("#DDA15E");
    fase1();
  }
  if(tela == 2){
  background("#2EC4B6");
    instrucoes();
  }
  if(tela == 3){
  background("#0081A7");
    creditos();
  }
}

function menu(){
  rect(x, y, 180, 40);
  textSize(44);
  text("NOSSO CERRADO", 200, 50);
  textSize(32);
  text("Jogar", 300, 120);
  text("Instruções", 300, 200);
  text("Créditos", 300, 280);
}

function keyPressed(){             
  if(key == "ArrowUp" && y>120){
    y = y-80;
    opcao = opcao-1;
  }
  if(key == "ArrowDown" && y<180){
    y = y+80;
    opcao = opcao+1;
  }
  if(key == "Enter"){
    tela = opcao;
  }
  if(key == "Escape"){
    tela = 0;
  } 
}

function instrucoes(){
  textSize(38);
  text("INSTRUÇÕES", 270, 50);
  textSize(25);
  text("Público alvo: Crianças do ensino fundamental 1.", 20, 100);
  textSize(25);
  text("Matéria: Ciências 4º ano.", 20, 150);
  textSize(25);
  text("BNCC: (EF04CI04) Analisar e construir cadeias alimentares simples.", 20, 200);
  textSize(25);
  text("O jogo consiste na construção de uma cadeira alimentar, com os ani-",20,250);
  textSize(25);
  text("mais do cerrado brasileiro.", 20, 275);
}

function creditos(){
  textSize(30);
  text("CRÉDITOS", 20, 50);
  textSize(30);
  image(img5, 350, 100, 160, 160);
  text("Educadora: Francisca Chagas da Silva Ferreira", 50, 225);
  textSize(30);
  image(img6, 350, 320, 160, 160);
  text("Programador: Wesley Jorge da Silva Ferreira", 50, 450);
  
}

function fase1(){
  textSize(20);
  text("Pontos = " + pontos, 350, 50);
  textSize(20);
  text("Produtor: ", 50,330);
  textSize(20);
  text("Consumidores: ", 250, 330);
  rect(xEspaco, yEspaco, 2*rEspaco, 2*rEspaco);
  rect(xEspaco2, yEspaco2, 2*rEspaco2, 2*rEspaco2);
  rect(xEspaco3, yEspaco3, 2*rEspaco3, 2*rEspaco3);
  image(img4, 300, 150, 80, 80);
  image(img4, 500, 150, 80, 80);
  if(mouseIsPressed && dist(posXI, posYI, mouseX, mouseY) < raio){
    posXI = mouseX;
    posYI = mouseY;
}
  else{
      if(mouseIsPressed && dist(posXI2, posYI2, mouseX, mouseY) < raio2){
    posXI2 = mouseX;
    posYI2 = mouseY;
    }
    else{
        if(mouseIsPressed && dist(posXI3, posYI3, mouseX, mouseY) < raio3){
    posXI3 = mouseX;
    posYI3 = mouseY;
    }
  }
}
  image(img, posXI, posYI, 2*raio, 2*raio);
  image(img2, posXI2, posYI2, 2*raio2, 2*raio2);
  image(img3, posXI3, posYI3, 2*raio3, 2*raio3);
  if(dist(xEspaco+50, yEspaco+25, posXI, posYI-25) < rEspaco + raio-25){
      posXI = 200;
      posYI = 150;
      pontos = 500;
  }
  else{
      if(dist(xEspaco2+50, yEspaco2+25, posXI, posYI-25) < rEspaco2 + raio-25 || dist(xEspaco3+50, yEspaco3+25, posXI, posYI-25) < rEspaco3 + raio-25){
        posXI = 100;
        posYI = 400;
      }
  }
  if(dist(xEspaco2+50, yEspaco2+25, posXI2, posYI2-25) < rEspaco2 + raio2-25){
      posXI2 = 400;
      posYI2 = 150;
      pontos = pontos+500;
  }
  else{
      if(dist(xEspaco+50, yEspaco+25, posXI2, posYI2-25) < rEspaco + raio2-25 || dist(xEspaco3+50, yEspaco3+25, posXI2, posYI2-25) < rEspaco3 + raio2-25){
        posXI2 = 300;
        posYI2 = 400;
      }
  }
  if(dist(xEspaco3+50, yEspaco3+25, posXI3, posYI3-25) < rEspaco3 + raio3-25){
      posXI3 = 600;
      posYI3 = 150;
      pontos = pontos+1000;
  }
  else{
      if(dist(xEspaco+50, yEspaco+25, posXI3, posYI3-25) < rEspaco + raio3-25 || dist(xEspaco2+50, yEspaco2+25, posXI3, posYI3-25) < rEspaco2 + raio2-25){
        posXI3 = 430;
        posYI3 = 400;
      }
  }
  if( pontos >= barradepontos){     //NIVEL
    nivel = nivel+1;
    barradepontos = barradepontos+2000;
    
  }
}