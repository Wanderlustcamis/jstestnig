window.onload = function plan(){
  debugger
  document.getElementById('plan')
  let plan = JSON.parse(planDetails).Plan

    switch (plan) {
      case "Yoga":
        document.getElementById("price").innerText("$15.00/mo");
        break;
      case "Meditation":
        document.getElementById("price").innerText("$15.00/mo");
        break;
      case "Exercise":
        document.getElementById("price").innerText("$19.00/mo");
        break;
      case "Yoga and Meditation":
        document.getElementById("price").innerText("$28.00/mo");
        break;
      case "Yoga and Exercise":
        document.getElementById("price").innerText("$30.00/mo");
        break;
    } 
    
    //(var i=0 ; i< plan.length; i++){
      /* if (i=0){
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
    } */

  /*   //var plans = new Object ()
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
            return n1 + n2 - '10'
            break
          case "+":
            return n1 + n3 - '5'
            break

          default:
           console.error("NAN")
        }


} */
}
