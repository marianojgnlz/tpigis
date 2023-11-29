import { Draw } from 'ol/interaction';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import WKT from 'ol/format/WKT.js';
import GeoJSON from 'ol/format/GeoJSON';

export const vectorSource = new VectorSource({ wrapX: false, });
export const vectorLayer = new VectorLayer({
    source: vectorSource,
    visible: false
});

const LineDraw = new Draw({
    source: vectorSource,
    type: 'LineString',
});

const wkt = new WKT();
const geojson = new GeoJSON();

function loadFeatures() {
    fetch('http://localhost:3001/recorrido',
        {
            method: 'GET',
            mode: 'cors',
            headers: { "Content-Type": "application/json" }
        })
        .then(r => r.json())
        .then(response => {
            response.forEach((fila) =>
                vectorSource.addFeature(geojson.readFeatures(fila.geojson)[0])
            )
        })
        .catch(e => console.log(`Error cargando feature`, e.message))
}
loadFeatures()

function addFeature() {
        const wktString = wkt.writeFeature(feature);
        fetch('http://localhost:3001/recorrido',
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({ name, wktString }),
                headers: { "Content-Type": "application/json" }
            })
            .then(r => console.log(`Exito cargando feature`))
            .catch(e => console.log(`Error cargando feature`, e.message))
}

let name = ''
let feature = null

document.getElementById('feature_name').addEventListener('change', (event) => {
    name = event.target.value
})
document.getElementById('modal_button').addEventListener('click', () => {
    addFeature()
    document.getElementById('add_feature_dialog').close()
})

export function addLine(map) {
    vectorLayer.setVisible(true)
    map.addInteraction(LineDraw);
    map.getViewport().style.cursor = 'none';
    vectorSource.on('addfeature', (event) => {
        feature = event.feature
        document.getElementById('add_feature_dialog').showModal()
    });
}


export function removeLine(map) {
    vectorLayer.setVisible(false)
    map.removeInteraction(LineDraw);
    vectorSource.removeEventListener('addfeature')
}