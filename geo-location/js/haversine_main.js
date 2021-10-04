function calculateDistance(lat, lon){
	let dpulze = haversine(lat, lon, 2.922561, 101.650965)
	let klcc = haversine(lat, lon, 3.158761, 101.714524)
	let pyramid = haversine(lat, lon, 3.073065, 101.607787)

	return [dpulze,klcc, pyramid]
}

let elLocate = document.getElementById("locate")
elLocate.addEventListener("click", function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			let elLat = document.getElementById("lat")
			let elLong = document.getElementById("long")
			let elDpulze = document.getElementById("dpulze")
			let elKlcc = document.getElementById("klcc")
			let elSunway = document.getElementById("sunway")

			let userLat = position.coords.latitude
			let userLong = position.coords.longitude

			let distances = calculateDistance(userLat, userLong)
			
			elLat.innerHTML = "Your latitude: " + userLat
			elLong.innerHTML = "Your latitude: " + userLong
			elDpulze.innerHTML = "Distance to Dpulze, Cyberjaya is " + distances[0] + "km"
			elKlcc.innerHTML = "Distance to KLCC is " + distances[1] + "km"
			elSunway.innerHTML = "Distance to Sunway Pyramid is " + distances[2] + "km"
	})
	} else{
		alert("Geolocation is not supported!")
	}
})