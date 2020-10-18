//criar mapa
const map = L.map("mapid").setView([-14.690883, -57.0831921], 5);

//adicionar o mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

map.on('dragend',
  function mapClickListen(e) {
    console.log(map.getCenter().lat + " e " + map.getCenter().lng)
  }
);

//criar icone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng }) {
  //criar um popup
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href='/orphanage?id=${id}'><img src='/images/arrow-white.svg'></img></a>`
  );

  //criar marcador
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Seu browser não suporta Geolocalização.");
  }
}

function showPosition(position) {
  map.setView([position.coords.latitude, position.coords.longitude], 14);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Permita que o navegador utilize a geolocalização");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Localização indisponível.");
      break;
    case error.TIMEOUT:
      alert("Requisição expirada.");
      break;
    case error.UNKNOWN_ERROR:
      alert("Algum erro doido aconteceu.");
      break;
  }
}

const orphanagesSpan = document
  .querySelectorAll(".orphanages span")
  .forEach((span) => {
    const orphanage = {
      id: span.dataset.id,
      name: span.dataset.name,
      lat: span.dataset.lat,
      lng: span.dataset.lng,
    };
    addMarker(orphanage);
  });