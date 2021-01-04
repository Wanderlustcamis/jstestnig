window.onload = function plan(){
  document.getElementById('plan')
  var plan = ["yoga", "meditation", "Exercise", "yoga meditation", "yoga excercise"]

    for (var i=0 ; i< plan.length; i++){
      if (i=0){
        document.CreateElement("p")
        title.id = "plan"
        title.innerText = "15 usd"
      }
      if (i=1){
        document.CreateElement("p")
        title.id = "plan"
        title.innerText = "15 usd"
      }
      if (i=2){
        document.CreateElement("p")
        title.id = "plan"
        title.innerText = "19 usd"
      }
      if (i=3){
        document.CreateElement("p")
        title.id = "plan"
        title.innerText = "28 usd"
      }
      if (i=4){
        document.CreateElement("p")
        title.id = "plan"
        title.innerText = "30 usd"
      }
    }

    var plans = new Object ()
    plans.yoga = "juice";
    plans.medi = "yoga";
    plans.exe ="exercise" ;
    plans.yogamedi ="yogamedi" ;
    plans.yogaexe ="yogaexe" ;

      function health(food,life,living){
        this.yoga="19";
        this.medi="19";
        this.exe="20";

    }
    this.cal = function Cal (n1, ope, n2 ope n3) {
      n1= yoga(n1)
      n2= medi (n2)
      n3= exe (n3)
        switch (ope){
          case "+":
            return n1 + n2
            break
          case "+":
            return n1 + n3
            break

          default:
           console.error("NAN")
        }


}
