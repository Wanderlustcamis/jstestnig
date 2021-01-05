var ls = localStorage
var d = document
var clave = document.getElementById("clave")
var save = document.getElementById("save")
var imput = document.getElementById("save")


object.onblur = function save(clave){
  if (clave.value.trim() !== '')
  ls.setItem(clave.id, clave.value)
}

  d.body.onload = function retrive(){
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
    location.href = confirm.html
}

function confirm() {
  //debugger
   if (ls.length > 0) {
       for (let i = 0; i < ls.length; i++) {
           clave = ls.key(i)
           document.getElementById(clave).innerText = ls.getItem(save)
       }
   }
}

function confirmed() {
    alert('thanks for the subcription!')
    ls.clear()
}

document.addEventListener("DOMContentLoaded", confirm)
