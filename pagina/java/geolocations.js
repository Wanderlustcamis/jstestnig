let latitude = 0
let longitud = 0
let info = document.getElementById('latlong')
let platform = ""
let TipoDeMapa = ""
let mapa = ""
const HEREMAPSAPIKEY=

function localizame(){
    navigator.geolocation.getCurrentPosition((position)=>{
        latitude = position.coords.latitude
        longitud = position.coords.longitud
        informacion.alert = "Your location is" + latitude +" ,"+ longitud
      }
  )
}
