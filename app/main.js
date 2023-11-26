import './style.css';
import { Map, View } from 'ol';
import { ImageWMS, TileWMS } from 'ol/source'
import { Image, Tile } from 'ol/layer'

const url = "http://localhost:8080/cgi-bin/qgis_mapserv.fcgi?map=/usr/local/share/qgis/test.qgz"

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
