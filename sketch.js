//estos son los comentarios
//aqui se pone lo que estoy haciendo (caquita seca)

//el pincel por defecto es de 1px de ancho, color negro y relleno blanco
//camelCase es escribir la primera palabra con minuscula y todas las siguientes con mayuscula
//variables: para usarlas debemos declararlas, esto hace que el computador sepa que existe. Se declaran como: var x .Ejemplo: var diametro.
//existen las variables locales y las globales.
//las variables globales viven fuera de una funcion (se pueden llamar desde cualquier parte)
//las variables locales viven dentro de una funcion
//solo despues de declarar una variable podemos asignarle un valor:
//var diametro
//diametro=50;
//diametro=500; (es en cascada, asi que queda el ultimo valor recibido, el resto se sobreescribe)
//otro ejemplo es poner:
//diametro=diametro + 1; esto hace que cada vez que se dibujan los frames se agranda en 1 el diametro
//var anchoBorde = 10; aqui se declaro la variable e inmediatamente se le asigno el valor. Despues no es necesario declararla de nuevo pero se puede cambiar el valor asignado
//las funciones tambien se declaran asi:
//function nombreFunction(){instrucciones de la funcion;}
//para ejecutar una funcion se pone function();

var i=0;
var diametro;
var background1=[100,50,150];

//funcion setup se ejecuta una vez al principio
function setup() {
  
	//createCanvas(dimHor, dimVer) crea el lienzo
	createCanvas(windowWidth,windowHeight);

	//backround(red,green,blue) define el color del fondo
	background(background1);
}


//funcion draw() se ejecuta despues de setup y se ejecuta 60 veces por segundo
function draw() {
  
  //background(red, green, blue) para repintar el fondo y que no se vea la estela del mouse
  background(background1);
	
	//ver la funcion estilo1 abajo
	estilo1();
	
	i=i+1;
	
	diametro=abs(sin(i*PI/60))*100+30;
	
	//ellipse(posX, posY, width, height) (medidas en pixeles) dibuja una elipse (el origen del lienzo es la esquina de arriba a la izquierda)
	//si se le pone el mouse en la posicion, sigue la posicion del mouse
	ellipse(mouseX, mouseY, diametro, diametro);
	
}

//declaracion de funcion de estilo de elipse
function estilo1(){	
  //fill(red, green, blue) es el color del relleno del pincel
	//noFill() le saca el relleno al mono
	noFill();
	
	//strokeWeight(px) es el ancho del pincel
	strokeWeight(2);
	
	//stroke(red, green, blue) es el color del borde del pincel
	stroke(255,0,5);
  
}

//cambia el tamano del lienzo si achico o agrando la ventana
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
