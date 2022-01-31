var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas)

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x= 150;
var y= 150;

DibujarLinea("red", 149, 149, 151, 151, papel);

function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var colorcito = "blue";
    var movimiento = 10
    if(evento.keyCode == teclas.UP)
    {
        DibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
    }
    if(evento.keyCode == teclas.DOWN)
    {
        DibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
    }
    if(evento.keyCode == teclas.LEFT)
    {
        DibujarLinea(colorcito, x, y, x -  movimiento, y, papel);
        x = x - movimiento;
    }
    if(evento.keyCode == teclas.RIGHT)
    {
        DibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
    }
}
   