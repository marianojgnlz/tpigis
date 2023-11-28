import { Draw } from 'ol/interaction';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source'

export const vectorSource = new VectorSource({ wrapX: false });
export const vectorLayer = new VectorLayer({
    source: vectorSource,
});

const PointDraw = new Draw({
    source: vectorSource,
    type: 'Point'
  });



// function addGeom() {}

export function addPoint(map) {
    // map.on('click', addGeom);
    map.addInteraction(PointDraw);
    map.getViewport().style.cursor = 'none';
}


export function removePoint(map) {
    map.removeInteraction(PointDraw);
}