window.addEventListener('load', (e)=>{
    const map = L.map('mapa').setView([13.7066262,-89.8414322], 12);

    const tileUrl = 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    L.tileLayer(tileUrl).addTo(map);
    
    //#region Llamado a la API enpoint Municipios
    fetch('http://api-mapa.com/municipios')
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            data.detalle.forEach(e => {
                let icon = L.divIcon({
                    className: 'custom-icon',
                    html: `<div style='background-color:${e.color};' class='marker-pin'></div><i class='${e.icono} awesome'>`,
                    iconSize: [30, 42],
                    iconAnchor: [15, 42]
                });
                const municipio = L.marker([e.latitud,e.longitud], {icon: icon}).addTo(map).on('click', function (e) {
                    map.setView(e.target.getLatLng(),13);
                });
                
                map.on('zoomend', function(e){
                    if(map.getZoom()<= 11 || map.getZoom() < 13){
                        map.addLayer(municipio);
                    }else{
                        map.removeLayer(municipio);
                    }
                });
            });
        });
    //#endregion
    
    //#region Llamado a la API endpoint Lugares
    fetch('http://api-mapa.com/lugares')
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            data.detalle.forEach(e => {
                icon = L.divIcon({
                    className: 'custom-icon',
                    html: `<div style='background-color:${e.color};' class='marker-pin'></div><i class='${e.icono} awesome'>`,
                    iconSize: [30, 42],
                    iconAnchor: [15, 42]
                });
                const lugar = L.marker([e.latitud,e.longitud], {icon: icon}).on('click', function (e) {
                    map.setView(e.target.getLatLng(),15);
                })
                .bindPopup(`<h2>${e.nombre}.</h2> <br> ${e.descripcion}. <br><br> Contacto: ${e.contacto}`);
                map.on('zoomend', function(e){
                    if(map.getZoom()>= 13){
                        map.addLayer(lugar);
                    }else{
                        map.removeLayer(lugar);
                    }
                });
            }); 
        });
        //#endregion

    //#region Leyenda para el mapa
        var legend = L.control({position: 'bottomleft'});
        legend.onAdd = function (map) {
    
        var div = L.DomUtil.create('div', 'info legend');
        labels = ['<strong>Leyenda</strong>'],
        categories = ['Municipios','Hoteles','Restaurantes','Centros de Información','Atractivos'];
    
        div.innerHTML += 
                labels.push(
                    '<i class="fas fa-mountain" style="color:#00227b"></i> ' +'Municipios' + '<br>'
                    +'<i class="fas fa-hotel" style="color:#00897b"></i> ' +'Hoteles' + '<br>'
                    +'<i class="fas fa-utensils" style="color:#005b9f"></i> ' +'Restaurantes' + '<br>'
                    +'<i class="fas fa-shield-alt" style="color:#d32f2f"></i> ' +'Policía' + '<br>'
                    +'<i class="fas fa-money-check-alt" style="color:#64dd17"></i> ' +'Cajero Automático' + '<br>'
                    +'<i class="fas fa-info-circle" style="color:#ffeb3b"></i> ' +'Centros de Información' + '<br>'
                    +'<i class="fas fa-map-marked-alt" style="color:#03a9f4"></i> ' +'Atractivos' + '<br>'
                    );
            div.innerHTML = labels.join('<br>');
        return div;
        };
        legend.addTo(map);
        //#endregion
});
