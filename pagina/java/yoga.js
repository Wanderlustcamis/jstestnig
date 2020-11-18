function week () {
    var d = prompt ("which day?");
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    var dia = ""
    var i = 0;
        while  (i< days.length){
        var dia = days[i]
          console.log(days);
          i++
        }
          for (i = 0; i < 7; i++)
            switch (i){
              case i == 0:
                alert("Yoga days")
                break
                case i == 2:
                  alert("Yoga days")
                  break
                  case i == 4:
                    alert("Yoga days")
                    break
                case i == 6:
                  alert("SUNDAY FUNDAY!")
                  break
                case i == 1:
                  alert("Exercise")
        	         break
                case i == 3:
             alert("Exercise")
             break
                case i == 5:
                alert("Exercise")
                break

         }

            }
