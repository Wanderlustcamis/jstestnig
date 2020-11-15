function week () {
    var d = prompt ("which day?");
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    var dia = ""
    var i = 0;
        while (i< days.length)
        var dia = days[i]
          console.log(days);
          i++
          for (var num = 0; num < 7; num++)
            switch (num){
              case num % 2 == 0:
                alert(`Yoga days`)
                break
                case num == 6:
                  alert("SUNDAY FUNDAY!")
                  break
                case num % 2 != 0:
                  alert(`Exercise`)
        	 break
         }
              num++
            }
