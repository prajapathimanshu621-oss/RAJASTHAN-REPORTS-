function initMap(){

let map = new google.maps.Map(
document.getElementById("map"),
{
zoom:6,
center:{lat:27.0238,lng:74.2179}
}
)

let reports = JSON.parse(localStorage.getItem("reports")) || []

reports.forEach(r=>{

new google.maps.Marker({

position:{lat:r.lat,lng:r.lng},

map:map,

title:r.title

})

})

}

window.onload=initMap