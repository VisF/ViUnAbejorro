const tilesProvider = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

let myMap = L.map('myMap').setView([-38.3768,-60.2752], 13);
let latitud = document.getElementById('latitud');
let longitud = document.getElementById('longitud');

L.tileLayer(tilesProvider,{
    maxZoom: 18,
}).addTo(myMap);

let markersLayer = L.layerGroup().addTo(myMap);
myMap.on('dblclick', e =>{
    markersLayer.clearLayers();
    let latLng = myMap.mouseEventToLatLng(e.originalEvent)
    L.circle([latLng.lat, latLng.lng], 100).addTo(markersLayer);
    latitud.value =  latLng.lat; 
    longitud.value = latLng.lng;
});

myMap.doubleClickZoom.disable();