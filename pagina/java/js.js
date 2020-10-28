//var numero = prompt ("add a number");
//if (numero > 1000)
//{  alert ("hey!") }
//var texto = prompt ("say hi!");
//if (texto = "hi")
  //{ console.log = ("they said hi!!")  }
//var masnumeros = prompt ("add a number");
//  masnumeros = Number(masnumeros);
//  if (masnumeros > 10 && masnumeros < 50)
//  {   alert ("yey!");}


  function week() {
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    var dia = ""
    var i = 0;
        while (i< days.length){
        var dia = days[i]
          console.log(days);
          i++
          for (var num = 0; num < 7; num++) {
            switch (num) {
              case num % 2 == 0:
                alert(`${dia[num]} PAR`);
                break;
                case num == 6:
                  alert("SUNDAY FUNDAY!");
                  break;
                case num % 2 != 0:
                  alert(`${dia[num]} IMPAR`);
        	 break;
              }
              num++
            }
      }
    }
