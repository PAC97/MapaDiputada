const map = L.map('mapa').setView([13.7066262,-89.8414322], 12);

const tileUrl = 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
L.tileLayer(tileUrl).addTo(map);

var icon = L.divIcon({
    className: 'custom-icon',
    html: "<div style='background-color:#4838cc;' class='marker-pin'></div><i class='fas fa-train awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

// #region Sonsonate
const sonsonate = L.marker([13.7221,-89.7241], {icon: icon}).addTo(map).on('click', function (e) {
    map.setView(e.target.getLatLng(),15);
})

map.on('zoomend', function(e){
    if(map.getZoom()<= 11 || map.getZoom() < 15){
        map.addLayer(sonsonate);
    }else{
        map.removeLayer(sonsonate);
    }
})
icon = L.divIcon({
    className: 'custom-icon',
    html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='fas fa-laptop-medical awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const sanRoque = L.marker([13.71251,-89.72653], {icon: icon}).on('click', function (e) {
    map.setView(e.target.getLatLng(),15);
})
.bindPopup('Farmacia San Roque. <br> Famosa Farmacia en todo el departamento');

map.on('zoomend', function(e){
    if(map.getZoom()> 14){
        map.addLayer(sanRoque);
    }else{
        map.removeLayer(sanRoque);
    }
})

// #endregion

// #region Izalco Municipio
icon = L.divIcon({
    className: 'custom-icon',
    html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='fas fa-church awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const izalco = L.marker([13.7464,-89.6750], {icon: icon}).addTo(map).on('click', function (e) {
    map.setView(e.target.getLatLng(),15);
})

map.on('zoomend', function(e){
    if(map.getZoom()<= 11 || map.getZoom() < 15){
        map.addLayer(izalco);
    }else{
        map.removeLayer(izalco);
    }
});
icon = L.divIcon({
    className: 'custom-icon',
    html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='fas fa-mountain awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const volcanIzalco = L.marker([13.81393,-89.63250], {icon: icon}).on('click', function (e) {
    map.setView(e.target.getLatLng(),15);
})
.bindPopup("Farmacia San Roque. <br> Famosa Farmacia en todo el departamento <img src='../images/shopping-cart.png' alt='' style='width:100px;' >");

map.on('zoomend', function(e){
    if(map.getZoom()> 14){
        map.addLayer(volcanIzalco);
    }else{
        map.removeLayer(volcanIzalco);
    }
})
// #endregion

//#region Caluco Municipio
icon = L.divIcon({
    className: 'custom-icon',
    html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='fas fa-water awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});
const caluco = L.marker([13.7254,-89.6615], {icon: icon}).addTo(map).on('click', function (e) {
    map.setView(e.target.getLatLng(),15);
})

map.on('zoomend', function(e){
    if(map.getZoom()<= 11 || map.getZoom() < 15){
        map.addLayer(caluco);
    }else{
        map.removeLayer(caluco);
    }
});

// #endregion

// #region Nahuizalco Municipio
icon = L.divIcon({
    className: 'custom-icon',
    html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='fas fa-store awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});
const nahuizalco = L.marker([13.7787,-89.7368], {icon: icon}).addTo(map).on('click', function (e) {
    map.setView(e.target.getLatLng(),15);
})

map.on('zoomend', function(e){
    if(map.getZoom()<= 11 || map.getZoom() < 15){
        map.addLayer(nahuizalco);
    }else{
        map.removeLayer(nahuizalco);
    }
});
// #endregion
// #region Juayua Municipio
icon = L.divIcon({
    className: 'custom-icon',
    html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='fas fa-mountain awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});
const juayua = L.marker([13.8432,-89.7465], {icon: icon}).addTo(map).on('click', function (e) {
    map.setView(e.target.getLatLng(),13);
});

map.on('zoomend', function(e){
    if(map.getZoom()<= 11 || map.getZoom() < 13){
        map.addLayer(juayua);
    }else{
        map.removeLayer(juayua);
    }
});
const portezuelo = L.marker([13.89212,-89.77216], {icon: icon}).on('click', function (e) {
    map.setView(e.target.getLatLng(),15);
})
.bindPopup('<h2>Portezuelo park.</h2> <br> Portezuelo Park ofrece una gran variedad de actividades tanto para la familia como para grupos corporativos entre los cuales podemos destacar:Canopy de cuerdas altas, Caminatas al bosque nebuloso, abalgatas en caballo y burro. <br><br> Contacto: 2265 1111');
map.on('zoomend', function(e){
    if(map.getZoom()>= 13){
        map.addLayer(portezuelo);
    }else{
        map.removeLayer(portezuelo);
    }
});

const buenaVista = L.marker([13.84331, -89.74385], {icon: icon}).on('click', function (e) {
    map.setView(e.target.getLatLng(),16);
})
.bindPopup('<h2>Buena Vista Gardens Juayua.</h2> <br> Un ecoparque familiar con mas de 30 manzanas para encontrarte con la naturaleza, hacer cosas divertidas, comer, y dormir! Hay senderos y muchas areas verdes y patios de cafe. <br><br> Contacto: 7920 1510');
map.on('zoomend', function(e){
    if(map.getZoom()>= 13){
        map.addLayer(buenaVista);
    }else{
        map.removeLayer(buenaVista);
    }
});
const chorros = L.marker([13.83572, -89.73132], {icon: icon}).on('click', function (e) {
    map.setView(e.target.getLatLng(),16);
})
.bindPopup('<h2>Los Chorros de la Calera.</h2><br> Los Chorros de la Calera son una bellas cascadas que se encuentran en Juayúa, departamento de Sonsonate. Para llegar a este atractivo es necesaro ir acompañado de un guia ya que es un recorrido muy largo, el numero en contacto es la oficina de turismo de Juayua. <br><br> Contacto: 2429-8114');
map.on('zoomend', function(e){
    if(map.getZoom()>= 13){
        map.addLayer(chorros);
    }else{
        map.removeLayer(chorros);
    }
});
const reptilandia = L.marker([13.84193,-89.74691], {icon: icon}).on('click', function (e) {
    map.setView(e.target.getLatLng(),16);
})
.bindPopup('<h2>Reptilandia.</h2><br> Reptilandia es un sitio de exhibición permanente con más de 50 animales exóticos, reptiles de 40 e insectos de especies diferentes entre endémicas del país y también extranjeras. Horarios de atención: de lunes a domingo desde 9:00 a.m. a 6:00 p.m. (cerrado al mediodía). <br><br> Contacto: reptilandiaelsalvador@hotmail.com');
map.on('zoomend mouseover', function(e){
    if(map.getZoom()>= 13){
        map.addLayer(reptilandia);
    }else{
        map.removeLayer(reptilandia);
    }
});

// #endregion
