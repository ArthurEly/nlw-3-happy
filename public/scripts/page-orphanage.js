const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//criar mapa
const map = L.map("mapid",options).setView([lat,lng], 16);


//adicionar o mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criar icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//criar marcador
L.marker([lat,lng], {icon})
  .addTo(map)

/* galeria de imagem */

function selectImage(event){
    const button = event.currentTarget
    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    //selecionar a imagem clicada
    const image = button.children[0] //o primeiro filho do button é a imagem
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem (aquela grandona)
    imageContainer.src = image.src

    //adicionar a classe .active para o botao clicado
    button.classList.add("active")
}