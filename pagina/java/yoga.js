function week () {
    var d = prompt ("which day?");
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
      for (var i=0; i< days.length; i++) {
       if (i%2==0) {
         console.log(days[i] + " es par")
       }
         else {
           console.log(days[i] + " es impar")
       }
          }
            }
