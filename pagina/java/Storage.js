var ls = localStorage
var d = document
var clave = document.getElementById("clave")
var save = document.getElementById("save")
var imput = document.getElementById("clave")

var no = document.getElementById('nom').value
var te = document.getElementById('tel').value
var em = document.getElementById('email').value
var  pw = document.getElementById('pw').value
var yo = document.getElementById('yo').value
var me = document.getElementById('me').value
var ex = document.getElementById('ex').value
var ym = document.getElementById('yomed').value
var yx = document.getElementById('yoex').value
var pl = document.getElementById('pla').value

var jsoninfo = {
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
}

alert(JSON.stringify(jsoninfo))


 onblur = function save(clave){

  ls.setItem(clave.id, clave.innerText)

  innerText=ls.getItem(clave)
}

  d.body.onload = function retrive(){
   retrive();
}

function retrive() {
    if (ls.length > 0) {
        for (let i = 0; i < ls.length; i++) {
            clave = ls.key(i)
            document.getElementById('clave').innerText = ls.getItem('clave')
        }
    }
}


function confirm() {
  //debugger
   if (ls.length > 0) {
       for (let i = 0; i < ls.length; i++) {
           clave = ls.key(i)
           document.getElementById('clave').innerText = ls.getItem('save')
       }
   }
}

function confirmed() {
    alert('thanks for the subcription!')
    ls.clear()
}

document.addEventListener("DOMContentLoaded", confirm)
