import { Draw } from 'ol/interaction';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source'

export const vectorSource = new VectorSource({ wrapX: false });
export const vectorLayer = new VectorLayer({
    source: vectorSource,
});

const LineDraw = new Draw({
    source: vectorSource,
    type: 'LineString'
  });



// function addGeom() {}

export function addLine(map) {
    // map.on('click', addGeom);
    map.addInteraction(LineDraw);
    map.getViewport().style.cursor = 'none';
}


export function removeLine(map) {
    map.removeInteraction(LineDraw);
}