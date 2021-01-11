var ls = localStorage
/* var d = document
var clave = document.getElementById("clave")
var save = document.getElementById("save")
var imput = document.getElementById("clave") */

let no = document.getElementById('nom').value
let te = document.getElementById('tel').value
let em = document.getElementById('email').value
let pl = document.getElementById('pla').value
let planDetails = ls.getItem("Plan")

/* var jsoninfo = {
  no: nom,
  te: tel,
  em: email,
  pw: pw,
  yo: yo,
  me: me,
  ex: ex,
  ym: yomed,
  yx: yoex,
  pl: pla,
} */

// alert(JSON.stringify(jsoninfo))


 function behold(){

  no = document.getElementById('nom').value
  te = document.getElementById('tel').value
  em = document.getElementById('email').value
  pl = document.getElementById('pla').value

  let jsonPlan = {
    "Name": no,
    "Tel": te,
    "Email": em,
    "Plan": pl,
  }

  ls.setItem("Plan", JSON.stringify(jsonPlan))
  //innerText=ls.getItem(clave)

}

/*   d.body.onload = function retrive(){
   retrive();
} */

function retrieve() {
  let planDetails = localStorage.getItem("Plan")
  let nom2 = JSON.parse(planDetails).Name
  let tel2 = JSON.parse(planDetails).Tel
  let em2 = JSON.parse(planDetails).Email
  let pl2 = JSON.parse (planDetails).Plan
  switch (pl2) {
    case "Yoga":
      document.getElementById("price").innerText = "$15.00/mo";
      break;
    case "Meditation":
      document.getElementById("price").innerText = "$15.00/mo";
      break;
    case "Exercise":
      document.getElementById("price").innerText = "$19.00/mo";
      break;
    case "Yoga and Meditation":
      document.getElementById("price").innerText = "$28.00/mo";
      break;
    case "Yoga and Exercise":
      document.getElementById("price").innerText = "$30.00/mo";
      break;
  } 
            document.getElementById("nom2").innerText = `${nom2}`;
            document.getElementById('tel2').innerText = `${tel2}`;
            document.getElementById('email2').innerText = `${em2}`;
            document.getElementById('pl2').innerText = `${pl2}`;
            

/*             var jsoninfo = {
              no: nom,
              te: tel,
              em: email,
              pl: pla,
            } */

            //alert(JSON.stringify(jsoninfo))


        }


function confirmed() {
    alert('thanks for the subcription!')
    ls.clear()
}

//document.addEventListener("DOMContentLoaded", confirm)
