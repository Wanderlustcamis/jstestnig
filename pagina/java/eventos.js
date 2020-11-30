window.onload = function (){
  document.getElementById('imagen').onmouseover = Color;
  document.getElementById('imagen').onmouseout = Color;

}
 function Color (Evento){
   var event = Evento;
   switch (Evento.type) {
     case 'mouseover':
      this.style.bordercolor = "green";
       break;
       case 'mouseout':
        this.style.bordercolor = "blue";
        break;

   }
 }
