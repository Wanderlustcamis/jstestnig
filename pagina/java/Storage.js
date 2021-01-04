var ls = localStorage;
var d = document;
var clave = document.getElementById("clave")
var save = document.getElementById("save")

d.body.onload = function() {
    recuperoCampos();
}

function guardoCampo(campo) {
    //debugger
    if (campo.value.trim() !== '')
        ls.setItem(campo.id, campo.value)
}

function recuperoCampos() {
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

function confirmoDatos() {
   if (ls.length > 0) {
       for (let i = 0; i < ls.length; i++) {
           clave = ls.key(i)
           document.getElementById(clave).innerText = ls.getItem(clave)
       }
   }
}

function confirmado() {
    alert('¡Gracias por registrarse con nosotros!')
    ls.clear()
}

document.addEventListener("DOMContentLoaded", confirmoDatos)
