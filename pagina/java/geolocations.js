let latitude = 0
let longitud = 0
let info = document.getElementById("latlong")

function localizame(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude = position.coords.latitude
        longitud = position.coords.longitude
        info.innerText = "Your location is" + latitude +" ,"+ longitud
      })
}
