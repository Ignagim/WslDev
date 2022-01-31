var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById("Dibujo");
var ancho = d.width; 
var lienzo = d.getContext("2d");


function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    var l = 0;
    var xi, yi, xf, yf;
    var espacio = ancho / lineas

    for(l = 0; l < lineas; l++) {
    yi = espacio * l
    xf = espacio * (l + 1)
    DibujarLinea("red", 0, yi, xf, 300)
    }

    for(l = 0; l < lineas; l++) {
    xi = espacio * l
    yf = espacio * (l + 1)
    DibujarLinea("red", xi, 0, 300, yf)
    }

    for(l = 0; l < lineas; l++) {
    yi = espacio * l
    xf = espacio * (29 - l)
    DibujarLinea("red", 300, yi, xf, 300)
    }

    for(l = 0; l < lineas; l++) {
    xi = espacio * (30 - l)
    yf = espacio * l
    DibujarLinea("red", xi, 0, 0, yf)
    }

    DibujarLinea("red", 1, 1, 1, 300);
    DibujarLinea("red", 1, 299, 299, 299);
    
}