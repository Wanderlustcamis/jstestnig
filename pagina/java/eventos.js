let imagen = document.getElementById('imagen')

window.onload = function mouse (){

imagen.addEventListener("mouseover", () => imagen.style.bordercolor = "green")
imagen.addEventListener("mouseout",() => imagen.style.bordercolor = "black")

}

window.onload = function Color(){

  document.getElementById('imagen').onmouseover = Color;
  document.getElementById('imagen').onmouseout = Color;

}
 function Color (Evento){
   var event = Evento;
   switch (Evento) {
     case 'mouseover':
     this.style.bordercolor = "green";
       break;
       case 'mouseout':
        this.style.bordercolor = "black";
        break;

   }
 }
