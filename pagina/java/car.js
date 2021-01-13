let type = document.getElementById("type").value
let inf =  document.getElementById("inf").value

function data(){
 type = document.getElementById('type').innerText
 inf = document.getElementById('inf').innerText

let jsondata = [
    {"type":"yoga",
        "inf":"3 routines of yoga per week, adding more challenge every week"
     },
     {
        "type":"meditation",
        "inf":"daily guided meditations for stress, axiety and finding yourself"
     },
     {
        "type":"Exercise",
        "inf":"2 routines of exercise per week, adding more challenge every week, plus two days of high intensity training (HIT)"
     },
     {
        "type":"Yoga and Exercise",
        "inf":"Mixing 3 exercise routines with 2 days of yoga for more efitient tonification"
     },
    
]
getElementById("type").innerText = (JSON.stringify(jsondata))
getElementById("inf").innerText = (JSON.stringify(jsondata))
}