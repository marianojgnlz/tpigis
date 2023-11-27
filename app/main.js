import './style.css';
import { Map, View } from 'ol';
import { ImageWMS, TileWMS } from 'ol/source'
import { Image, Tile } from 'ol/layer'
import Overlay from 'ol/Overlay'
import Draw from 'ol/interaction/Draw'
import { Style, Fill, Stroke, Circle as CircleStyle } from 'ol/style'
import { Vector as VectorSource } from 'ol/source';
import { getLength } from 'ol/sphere';

const url = "http://localhost/cgi-bin/qgis_mapserv.fcgi?map=/usr/local/share/qgis/TPI.qgz"

var helpTooltip;
var helpTooltipElement = document.createElement('div');
helpTooltipElement.className = 'ol-tooltip';
helpTooltip = new Overlay({
    element: helpTooltipElement,
    offset: [15, 0],
    positioning: 'center-left',
});

const draw = new Draw({
  source: new VectorSource(),
  type: 'LineString',
  style: new Style({
      fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)',
      }),
      stroke: new Stroke({
          color: 'rgba(0, 0, 0, 0.5)',
          lineDash: [10, 10],
          width: 2,
      }),
      image: new CircleStyle({
          radius: 5,
          stroke: new Stroke({
              color: 'rgba(0, 0, 0, 0.7)',
          }),
          fill: new Fill({
              color: 'rgba(255, 255, 255, 0.2)',
          }),
      }),
  }),
});

var pointerMoveHandler = function (evt) {
  if (evt.dragging) {
      return;
  }

  var helpMsg = 'Click para empezar';

  helpTooltipElement.innerHTML = helpMsg;
  helpTooltip.setPosition(evt.coordinate);

};

var measureTooltipElement = document.createElement('div');
measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
const measureTooltip = new Overlay({
  element: measureTooltipElement,
  offset: [0, -15],
  positioning: 'bottom-center',
});

const test = new Image({
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
    test
  ],
  view: new View({
    projection: 'EPSG:4326',
    center: [-59, -27.5],
    zoom: 6
  })
});

map.addOverlay(helpTooltip);
map.addOverlay(measureTooltip);

map.on('pointermove', pointerMoveHandler);
map.addInteraction(draw);

map.getViewport().style.cursor = 'none';

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

