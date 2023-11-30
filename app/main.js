import './style.css';
import { Map, View } from 'ol';
import { ImageWMS, TileWMS } from 'ol/source'
import { Tile } from 'ol/layer'
import { scaleControl } from './map/scale';
import { zoomControl } from './map/zoom';
import { capas, url } from "./map/layers"
import { addNavigate, removeNavigate } from './map/navigate';
import { addQuery, removeQuery } from './map/query';
import { addMeasure, removeMeasure } from './map/measure';
import { addLine, removeLine, vectorLayer } from './map/line';

export const view = new View({
  projection: 'EPSG:4326',
  center: [-59, -27.5],
  zoom: 6
});

const map = new Map({
  target: 'map',
  controls: [zoomControl, scaleControl],
  layers: [
    new Tile({
      title: "Base Map",
      source: new TileWMS({
        url: 'https://wms.ign.gob.ar/geoserver/ows',
        params: {
          LAYERS: 'capabaseargenmap',
          VERSION: '1.1.1'
        }
      })
    }),
    ...capas,
    vectorLayer
  ],
  view
});

let removePreviousInteraction = (map) => { }
function addInteraction(interactionFunction, removeInteractionFunction) {
  map.getViewport().style.cursor = 'auto';
  removePreviousInteraction(map)
  interactionFunction(map)
  removePreviousInteraction = removeInteractionFunction
}

document.getElementById("measure")
  .addEventListener("click", () => addInteraction(addMeasure, removeMeasure))
document.getElementById("line")
  .addEventListener("click", () => addInteraction(addLine, removeLine))
document.getElementById("controles_navegacion")
  .addEventListener('click', () => addInteraction(addNavigate, removeNavigate))
document.getElementById("controles_consulta")
  .addEventListener('click', () => addInteraction(addQuery, removeQuery))

// por defecto
addInteraction(addNavigate, removeNavigate)
document.getElementById("controles_navegacion").checked = true