import './style.css';
import { Map, View } from 'ol';
import { ImageWMS, TileWMS } from 'ol/source'
import { Image, Tile } from 'ol/layer'
import { addLine, removeLine, vectorLayer, vectorSource } from './map/line';
import { addMeasure, removeMeasure } from './map/measure';
import { scaleControl } from './map/scale';
import { zoomControl } from './map/zoom';
import { clearMap } from './map/clear';
import { extendFlatCoordinates } from 'ol/extent';
import { addNavigate, removeNavigate } from './map/navigate';

const url = "http://localhost/cgi-bin/qgis_mapserv.fcgi?map=/usr/local/share/qgis/TPI.qgz"





//var layerSwitcher = new ol.control.LayerSwitcher({
//  tipLabel: 'Leyenda' // Etiqueta para el control de leyenda
//});

const act_agrop = new Image({
  title: "Actividad Agropecuaria",
  visible: true,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'actividades_agropecuarias'
    }
  })
}
)
const veg_arborea = new Image({
  title: "Vegetacion Arborea",
  visible: true,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'veg_arborea'
    }
  })
}
)

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
    veg_arborea,
    act_agrop,
    vectorLayer

  ],
  view: new View({
    projection: 'EPSG:4326',
    center: [-59, -27.5],
    zoom: 6
  })
});

//map.addControl(layerSwitcher);

let removePreviousInteraction = (map) => {}
function addInteraction(interactionFunction, removeInteractionFunction) {
  map.getViewport().style.cursor = 'auto';
  clearMap(map);
  removePreviousInteraction(map)
  interactionFunction(map)
  removePreviousInteraction = removeInteractionFunction
}

document.getElementById("measure").addEventListener("click", () => addInteraction(addMeasure, removeMeasure))
document.getElementById("line").addEventListener("click", () => addInteraction(addLine, removeLine))
document.getElementById("navigate").addEventListener("click", () => addInteraction(addNavigate, removeNavigate))
// document.getElementById("clear").addEventListener("click", () => addInteraction(clearMap, () => {}))

