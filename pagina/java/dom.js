

function transition (gray){

  document.body.style.transition = "10s ease-in"
  document.body.style.backgroundColor = "gray"
  document.getElementById("col") = "gray"
  localStorage.SetItem ("backgroundColor", gray)


}


//var cuerpo = document.getElementById("bod")
//var title = document.CreateElement("h2")
  //title.id = "title"
//  title.innerText = "testing DOM"
  //cuerpo.appenChild(title)

//var txt = document.CreateElement("p")
  //txt.id = "text"
  //txt.innerText = "here's some text I added using JS"
  //cuerpo.appenChild(txt)

//var img = document.CreateElement("img")
  //img.id = "photo"
  //img.src = "https://www.wikihow.com/images/thumb/f/f3/Draw-a-Cute-Kawaii-Face-%28Girl%29-Step-5.jpg/aid1917361-v4-728px-Draw-a-Cute-Kawaii-Face-%28Girl%29-Step-5.jpg"
  //img.style.width = "100%"
  //cuerpo.appenChild(img)
