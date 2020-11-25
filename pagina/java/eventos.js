window.onload = function (){
  getElementById('imagen').onmouseover = Color;
  getElementById('imagen').onmouseout = Color;

}
 function Color (Evento){
   var event = Evento;
   switch (evento.type) {
     case 'mouseover':
      this.style.bordercolor = "green";
       break;
       case 'mouseout':
        this.style.bordercolor = "blue";
        break;

   }
 }
