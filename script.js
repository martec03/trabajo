function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}

function cambio( sen){
   let carrusel = document.getElementById('centro');
   carrusel.contador+= sen;
   if ( carrusel.contador == carrusel.lista.length){
        carrusel.contador = 0;
  }
  else  if ( carrusel.contador < 0) {
      carrusel.contador =  carrusel.lista.length-1;
      }
  carrusel.src =  carrusel.lista[carrusel.contador]
}
function reset(){
   let carrusel = document.getElementById('centro');
    carrusel.lista = new Array(
    'img/1.jpg',
    'img/2.jpg', 
    'img/3.jpg' ,
    'img/4.jpg');
   carrusel.contador = 0;
   carrusel.tempor = null;
   parar();
   carrusel.src = carrusel.lista[0]
}
function parar(car)
{
   let carrusel = document.getElementById('centro');
   if( carrusel.tempor!=null)
     clearTimeout(carrusel.tempor);
}

function automat(tiempo, inc=1)
{
    let carrusel = document.getElementById('centro');
    clearTimeout(carrusel.tempor);
    cambio(inc);
   carrusel.tempor = setTimeout(automat, tiempo, tiempo, inc)
 }