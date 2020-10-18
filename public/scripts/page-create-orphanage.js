//criar mapa
const map = L.map("mapid").setView([-29.9353112, -50.9977772], 16);

//adicionar o mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criar icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;


//criar um marcador
map.on('click',(event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //remove os marcadores existentes
    marker && map.removeLayer(marker)
    //adicionar o ícone à camada (layer)
    marker = L.marker([lat,lng], {icon}).addTo(map)  
})

//adicionar o campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images 
    const container = document.querySelector('#images')
    //pegar o container para duplicar ..new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar a duplicação
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)  
    //verificação pra ver se ta vazio antes de adicionar. se tiver, nada acontece feijoada
    const input = newFieldContainer.children[0]
    if (input.value == ""){
        return //a função para. é como o break do java em um while
    }
    //limpar o campo antes de adicionar ao container de adicionar
    input.value = ""
    //adicionar o clone ao container #images
    container.appendChild(newFieldContainer)
}

//adicionar o campo de fotos
function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    } 
    //deletar o campo 
    span.parentNode.remove();
}

//selecionar o botao sim ou nao
function toggleSelect(event){
    //retirar a classe .active dos botoes
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'))//serve para funcões de uma linha e um parâmetro
    //colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar o input hidden
    const input = document.querySelector('[name="opening_on_weekends"]')
    //verificar se é sim ou não
    input.value = button.dataset.value
}

function verifyMap(event){
    const isLatLngFilled = document.querySelector('[name=lat]').value == "" ? false : true
    if (!isLatLngFilled){
        alert("Clique no mapa para adicionar uma localização!")
        event.preventDefault()
    }
}
