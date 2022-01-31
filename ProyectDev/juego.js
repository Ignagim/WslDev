var vp = document.getElementById("villaplatzi");
var papel = vp.getContex("2d");
var mapa = "tile.webp";

var imagen = new Image();
imagen.src = mapa;
imagen.addEventListener("load", dibuja);

function dibujar()
{
    papel.drawImage(imagen, 0, 0);
}

function aleatorio(min, max) 
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}