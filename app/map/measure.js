import Overlay from 'ol/Overlay'
import Draw from 'ol/interaction/Draw'
import { Style, Fill, Stroke, Circle as CircleStyle } from 'ol/style'
import { Vector as VectorSource } from 'ol/source';
import { getLength } from 'ol/sphere';




var helpTooltip;
var helpTooltipElement = document.createElement('div');
helpTooltipElement.className = 'ol-tooltip';
helpTooltip = new Overlay({
    element: helpTooltipElement,
    offset: [15, 0],
    positioning: 'center-left',
});



var pointerMoveHandler = function (evt) {
    if (evt.dragging) {
        return;
    }

    var helpMsg = 'SELECCIONAR PUNTO';

    helpTooltipElement.innerHTML = helpMsg;
    helpTooltip.setPosition(evt.coordinate);

};



const draw = new Draw({
    source: new VectorSource(),
    type: 'LineString',
    style: new Style({
        fill: new Fill({
            color: 'rgba(255, 0, 128, 0.2)',
        }),
        stroke: new Stroke({
            color: 'rgba(255, 0, 128, 0.5)',
            lineDash: [10, 10],
            width: 2,
        }),
        image: new CircleStyle({
            radius: 5,
            stroke: new Stroke({
                color: 'rgba(255, 0, 128, 0.7)',
            }),
            fill: new Fill({
                color: 'rgba(255, 0, 128, 0.2)',
            }),
        }),
    }),
});


var measureTooltipElement = document.createElement('div');
measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
const measureTooltip = new Overlay({
    element: measureTooltipElement,
    offset: [0, -15],
    positioning: 'bottom-center',
});


var formatLength = function (line) {
    var length = getLength(line);
    var output = Math.round(length * 10000) / 100 + ' ' + 'km';
    return output;
};

draw.on('drawstart', function (evt) {
    helpTooltipElement.classList.add('hidden');
    var sketch = evt.feature;
    sketch.getGeometry().on('change', function (evt) {
        var geom = evt.target;
        var tooltipCoord = geom.getLastCoordinate();
        measureTooltipElement.innerHTML = formatLength(geom);
        measureTooltip.setPosition(tooltipCoord);
    });
});

export function addMeasure(map) {
    map.addOverlay(helpTooltip);
    map.addOverlay(measureTooltip);
    map.on('pointermove', pointerMoveHandler);
    map.addInteraction(draw);
    map.getViewport().style.cursor = 'none';
}

export function removeMeasure(map) {
    map.removeOverlay(helpTooltip);
    map.removeOverlay(measureTooltip);
    map.un('pointermove', pointerMoveHandler);
    map.removeInteraction(draw);
}
