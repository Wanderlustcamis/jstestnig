var ls = localStorage
var d = document
var clave = document.getElementById("clave")
var save = document.getElementById("save")



function guardarCampo(clave){
  ls.setItem(clave.id, clave.value)
}

function retrive(){
  d.body.onload =
   retrive();
}

function retrive() {
    if (ls.length > 0) {
        for (let i = 0; i < ls.length; i++) {
            clave = ls.key(i)
            document.getElementById(clave).value = ls.getItem(clave)
        }
    }
}

function navegar(page) {
    location.href = page
}

function confirm() {
  debugger
   if (ls.length > 0) {
       for (let i = 0; i < ls.length; i++) {
           clave = ls.key(i)
           document.getElementById(clave).value = ls.getItem(save)
       }
   }
}

function confirmed() {
    alert('thanks for the subcription!')
    ls.clear()
}

document.addEventListener("DOMContentLoaded", confirm)
