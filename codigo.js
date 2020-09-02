class Billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.valor, papeles));
            dinero -= (bi.valor * papeles);
        }
    }

    if (dinero > 0)
    {
        
        r.innerHTML = "No puedo entregar esa cantidad";
    }
    else
    {
        for(var e of entregado)
        {
            r.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
        }
    }

    console.log(entregado);
}

var caja = [];
var entregado = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 20));
caja.push(new Billete(10, 70));
caja.push(new Billete(5, 5));
var dinero = 0;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
var r = document.getElementById("resultado");
document.addEventListener("click", entregarDinero);