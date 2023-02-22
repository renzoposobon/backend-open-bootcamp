let marker, map


function initMap() {
  const uluru = { lat: -32.932524, lng: -68.835930 }
  // const uluru2 = { lat: -32.930237, lng: -68.832775 }
  // const uluru3 = { lat: -32.934892, lng: -68.836633 }

  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

  // const marker2 = new google.maps.Marker({
  //   position: uluru2,
  //   map: map,
  // });

  // const marker3 = new google.maps.Marker({
  //   position: uluru3,
  //   map: map,
  // });

  // obtener geolocalizacion
  geoPosicion()

}

function geoPosicion() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = { timeout: 2000 }
    const watchPos = geoLoc.watchPosition(centraMapa, errorMapa, options)
  } else {
    alert("Tu navegador debe ser Google Chrome")
  }
}

function centraMapa(posicion) {
  const nuevaPos = {
    lat: posicion.coords.latitude,
    lng: posicion.coords.longitude
  }
  console.log(nuevaPos);
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}

function errorMapa(error) {
  error => console.log(error)
}



window.initMap = initMap;