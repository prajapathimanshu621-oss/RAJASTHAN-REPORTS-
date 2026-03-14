let lat
let lng

function getLocation(){

navigator.geolocation.getCurrentPosition(function(pos){

lat = pos.coords.latitude
lng = pos.coords.longitude

document.getElementById("location").innerText =
"Location: "+lat+", "+lng

})

}

function submitReport(){

let title=document.getElementById("title").value
let category=document.getElementById("category").value
let desc=document.getElementById("desc").value

let reports = JSON.parse(localStorage.getItem("reports")) || []

reports.push({

title:title,
category:category,
desc:desc,
lat:lat,
lng:lng,
time:new Date()

})

localStorage.setItem("reports",JSON.stringify(reports))

alert("Report Submitted")

}