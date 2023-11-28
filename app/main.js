import './style.css';
import { Map, View } from 'ol';
import { ImageWMS, TileWMS } from 'ol/source'
import { Image, Tile } from 'ol/layer'
import { addLine, removeLine, vectorLayer, vectorSource } from './map/line';
import Overlay from 'ol/Overlay'
import Draw from 'ol/interaction/Draw'
import { Style, Fill, Stroke, Circle as CircleStyle } from 'ol/style'
import { Vector as VectorSource } from 'ol/source';
import { getLength } from 'ol/sphere';
import { addPoint, removePoint, vectorLayer } from './map/point';
import { addMeasure, removeMeasure } from './map/measure';
import { scaleControl } from './map/scale';
import { zoomControl } from './map/zoom';
import { clearMap } from './map/clear';

const url = "http://localhost/cgi-bin/qgis_mapserv.fcgi?map=/usr/local/share/qgis/TPI.qgz"

var helpTooltip;
var helpTooltipElement = document.createElement('div');
helpTooltipElement.className = 'ol-tooltip';
helpTooltip = new Overlay({
    element: helpTooltipElement,
    offset: [15, 0],
    positioning: 'center-left',
});

// const draw = new Draw({
//   source: new VectorSource(),
//   type: 'LineString',
//   style: new Style({
//       fill: new Fill({
//           color: 'rgba(255, 255, 255, 0.2)',
//       }),
//       stroke: new Stroke({
//           color: 'rgba(0, 0, 0, 0.5)',
//           lineDash: [10, 10],
//           width: 2,
//       }),
//       image: new CircleStyle({
//           radius: 5,
//           stroke: new Stroke({
//               color: 'rgba(0, 0, 0, 0.7)',
//           }),
//           fill: new Fill({
//               color: 'rgba(255, 255, 255, 0.2)',
//           }),
//       }),
//   }),
// });

// var pointerMoveHandler = function (evt) {
//   if (evt.dragging) {
//       return;
//   }

//   var helpMsg = 'Click para empezar';

//   helpTooltipElement.innerHTML = helpMsg;
//   helpTooltip.setPosition(evt.coordinate);

// };

// var measureTooltipElement = document.createElement('div');
// measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
// const measureTooltip = new Overlay({
//   element: measureTooltipElement,
//   offset: [0, -15],
//   positioning: 'bottom-center',
// });

//SE AÑADEN LAS CAPAS
const act_agrop = new Image({
  title: "Actividades Agropecuarias",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'actividades_agropecuarias'
    }
  })
});

const act_economicas = new Image({
  title: "Actividades Económicas",
  visible: true,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'actividades_economicas'
    }
  })
});

const comp_energia = new Image({
  title: "Complejos de Energía",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'complejo_de_energia_ene'
    }
  })
});

const cur_agua = new Image({
  title: "Curso de Agua",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'curso_de_agua_hid'
    }
  })
});

const curvas_nivel = new Image({
  title: "Curvas de Nivel",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'curvas_de_nivel'
    }
  })
});

const edif_construcciones_turisticas = new Image({
  title: "Edificios de Construcciones Turísticas",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'edif_construcciones_turisticas'
    }
  })
});

const edif_depor_y_esparcimiento = new Image({
  title: "Edificios de Depor y Esparcimiento",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'edif_depor_y_esparcimiento'
    }
  })
});

const edif_educacion = new Image({
  title: "Edificios de Educación",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'edif_educacion'
    }
  })
});

const edif_religiosos = new Image({
  title: "Edificios Religiosos",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'edif_religiosos'
    }
  })
});

const edif_seguridad = new Image({
  title: "Edificios de Seguridad",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'edificio_de_seguridad_ips'
    }
  })
});

const edif_publico = new Image({
  title: "Edificios Públicos",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'edificio_publico_ips'
    }
  })
});

const edif_ferroviarios = new Image({
  title: "Edificios Ferroviarios",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'edificios_ferroviarios'
    }
  })
});

const edif_salud = new Image({
  title: "Edificios de Salud",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'edificio_de_salud_ips'
    }
  })
});

const ejido = new Image({
  title: "Ejido",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'ejido'
    }
  })
});

const espejos_de_agua = new Image({
  title: "Espejos de Agua",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'espejo_de_agua_hid'
    }
  })
});

const estructuras_portuarias = new Image({
  title: "Estructuras Portuarias",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'estructuras_portuarias'
    }
  })
});

const infraest_aeroportuaria_punto = new Image({
  title: "Infraestructura Aeroportuaria",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'infraestructura_aeroportuaria_punto'
    }
  })
});

const infraest_hidro = new Image({
  title: "Infraestructura Hidrográfica",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'infraestructura_hidro'
    }
  })
});

const isla = new Image({
  title: "Isla",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'isla'
    }
  })
});

const limite_politico_administrativo = new Image({
  title: "Límite Político Administrativo",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'limite_politico_administrativo_lim'
    }
  })
});

const lineas_de_conduccion_ene = new Image({
  title: "Líneas de Conducción ENE",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'lineas_de_conduccion_ene'
    }
  })
});

const localidad = new Image({
  title: "Localidad",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'localidades'
    }
  })
});

const marcas_y_senales = new Image({
  title: "Marcas y Señales",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'marcas_y_senales'
    }
  })
});

const muro_embalse = new Image({
  title: "Muro Embalse",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'muro_embalse'
    }
  })
});

const obra_portuaria = new Image({
  title: "Obra Portuaria",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'obra_portuaria'
    }
  })
});

const obras_de_comunicacion = new Image({
  title: "Obras de Comunicación",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'obra_de_comunicacion'
    }
  })
});

const otras_edificaciones = new Image({
  title: "Otras Edificaciones",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'otras_edificaciones'
    }
  })
});

const pais = new Image({
  title: "País",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'pais_lim'
    }
  })
});

const puente_red_vial_punto = new Image({
  title: "Puente Red Vial Punto",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'puente_red_vial_puntos'
    }
  })
});

const puntos_alturas_topograficas = new Image({
  title: "Puntos de Alturas Topográficas",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'puntos_de_alturas_topograficas'
    }
  })
});

const puntos_del_terreno = new Image({
  title: "Puntos del Terreno",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'puntos_del_terreno'
    }
  })
});

const red_ferroviaria = new Image({
  title: "Red Ferroviaria",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'red_ferroviaria'
    }
  })
});

const red_vial = new Image({
  title: "Red Vial",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'red_vial'
    }
  })
});

const salvado_de_obstaculo = new Image({
  title: "Salvado de Obstáculo",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'salvado_de_obstaculo'
    }
  })
});

const senalizaciones = new Image({
  title: "Señalizaciones",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'senalizaciones'
    }
  })
});

const sue_congelado = new Image({
  title: "Suelo Congelado",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'sue_congelado'
    }
  })
});

const sue_consolidado = new Image({
  title: "Suelo Consolidado",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'sue_consolidado'
    }
  })
});

const sue_costero = new Image({
  title: "Suelo Costero",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'sue_costero'
    }
  })
});

const sue_hidromorfologico = new Image({
  title: "Suelo Hidromorfológico",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'sue_hidromorfologico'
    }
  })
});

const sue_no_consolidado = new Image({
  title: "Suelo No Consolidado",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'sue_no_consolidado'
    }
  })
});

const veg_arborea = new Image({
  title: "Vegetación Arbórea",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'veg_arborea'
    }
  })
});

const veg_arbustiva = new Image({
  title: "Vegetación Arbustiva",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'veg_arbustiva'
    }
  })
});

const veg_cultivos = new Image({
  title: "Vegetación Cultivos",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'veg_cultivos'
    }
  })
});

const veg_hidrofila = new Image({
  title: "Vegetación Hidrófila",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'veg_hidrofila'
    }
  })
});

const veg_suelo_desnudo = new Image({
  title: "Vegetación Suelo Desnudo",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'veg_suelo_desnudo'
    }
  })
});

const vias_secundarias = new Image({
  title: "Vías Secundarias",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'vias_secundarias'
    }
  })
});

const provincias = new Image({
  title: "Provincias",
  visible: false,
  source: new ImageWMS({
    url: url,
    params: {
      LAYERS: 'provincias'
    }
  })
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
    act_agrop,
    act_economicas,
    comp_energia,
    cur_agua,
    curvas_nivel,
    edif_construcciones_turisticas,
    edif_depor_y_esparcimiento,
    edif_educacion,
    edif_religiosos,
    edif_seguridad,
    edif_publico,
    edif_ferroviarios,
    edif_salud,
    ejido,
    espejos_de_agua,
    estructuras_portuarias,
    infraest_aeroportuaria_punto,
    infraest_hidro,
    isla,
    limite_politico_administrativo,
    lineas_de_conduccion_ene,
    localidad,
    marcas_y_senales,
    muro_embalse,
    obra_portuaria,
    obras_de_comunicacion,
    otras_edificaciones,
    pais,
    provincias,
    puente_red_vial_punto,
    puntos_alturas_topograficas,
    puntos_del_terreno,
    red_ferroviaria,
    red_vial,
    salvado_de_obstaculo,
    senalizaciones,
    sue_congelado,
    sue_consolidado,
    sue_costero,
    sue_hidromorfologico,
    sue_no_consolidado,
    veg_cultivos,
    veg_arborea,
    veg_arbustiva,
    veg_hidrofila,
    veg_suelo_desnudo,
    vias_secundarias,
    vectorLayer

  ],
  view: new View({
    projection: 'EPSG:4326',
    center: [-59, -27.5],
    zoom: 6
  })
});

//SEleccion de capas
const capas = [act_agrop, act_economicas, comp_energia, cur_agua, curvas_nivel, edif_construcciones_turisticas, edif_depor_y_esparcimiento, edif_educacion, edif_religiosos, edif_seguridad, edif_publico, edif_ferroviarios, edif_salud, ejido, espejos_de_agua, estructuras_portuarias, infraest_aeroportuaria_punto, infraest_hidro, isla, limite_politico_administrativo, lineas_de_conduccion_ene, localidad, marcas_y_senales, muro_embalse, obra_portuaria, obras_de_comunicacion, otras_edificaciones, pais, provincias, puente_red_vial_punto, puntos_alturas_topograficas, puntos_del_terreno, red_ferroviaria, red_vial, salvado_de_obstaculo, senalizaciones, sue_congelado, sue_consolidado, sue_costero, sue_hidromorfologico, sue_no_consolidado, veg_cultivos, veg_arborea, veg_arbustiva, veg_hidrofila, veg_suelo_desnudo, vias_secundarias]

capas.forEach((capa, index) => {
  // Crea un checkbox
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'check_layer_' + index; // Asigna un ID único a cada checkbox
  checkbox.checked = capa.getVisible();

 // Agrega un listener al evento 'change' del checkbox
 checkbox.addEventListener('change', function () {
  var checked = this.checked;
  if (checked !== capa.getVisible()) {
      capa.setVisible(checked);
  }
});
// Agrega un listener al evento 'change:visible' de la capa
capa.on('change:visible', function () {
  var visible = this.getVisible();
  if (visible !== checkbox.checked) {
      checkbox.checked = visible;
  }
});

// Crea una etiqueta para el checkbox
var label = document.createElement('label');
label.appendChild(checkbox);
label.appendChild(document.createTextNode(capa.get('title'))); // Puedes usar el título de la capa como texto de la etiqueta

var container = document.getElementById('capasContainer'); // Reemplaza 'checkboxContainer' con el ID de tu contenedor
    container.appendChild(label)})



//MEdicion
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
document.getElementById("clear").addEventListener("click", () => addInteraction(clearMap, () => {}))


document.getElementById("save_line").addEventListener("click", (e) => {
  console.log(vectorSource.getFeatures())
})

