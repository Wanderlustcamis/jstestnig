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
