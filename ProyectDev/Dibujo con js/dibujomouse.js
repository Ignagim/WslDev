var color = document.getElementById("color_elegido");
var grosor = document.getElementById("grosor_elegido");
var cuadro = document.getElementById("area_de_dibujo");
var goma = document.getElementById("Borrador")
var lienzo = cuadro.getContext("2d");
var estado;
var x;
var y;

cuadro.addEventListener("mousedown", pulsarMouse);
cuadro.addEventListener("mousemove", moverMouse);
cuadro.addEventListener("mouseup", levantarMouse);
cuadro.addEventListener("click", activarGoma);

function pulsarMouse(evento) {
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function moverMouse(evento) {
    if(estado == 1){
        DibujarLinea(color.value, x, y, evento.layerX, evento.layerY);
        x = evento.layerX;
        y = evento.layerY;
    }
    else{
        x = evento.layerX;
        y = evento.layerY;
    }
}

function levantarMouse(evento) {
    estado = 0
}

function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal, cuadro)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor.value;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function activarGoma(evento) {
    if(estado == 1){
        DibujarLinea("white", x, y, evento.layerX, evento.layerY);
        x = evento.layerX;
        y = evento.layerY;
    }
    else{
        x = evento.layerX;
        y = evento.layerY;
    }
}




