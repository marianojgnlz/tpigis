import { Image } from 'ol/layer'
import { ImageWMS } from 'ol/source';

export const url = "http://localhost/cgi-bin/qgis_mapserv.fcgi?map=/usr/local/share/qgis/TPI.qgz"

export const act_agrop = new Image({
    title: "Actividades Agropecuarias",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'actividades_agropecuarias'
        }
    })
});

export const act_economicas = new Image({
    title: "Actividades Económicas",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'actividades_economicas'
        }
    })
});

export const comp_energia = new Image({
    title: "Complejos de Energía",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'complejo_de_energia_ene'
        }
    })
});

export const cur_agua = new Image({
    title: "Curso de Agua",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'curso_de_agua_hid'
        }
    })
});

export const curvas_nivel = new Image({
    title: "Curvas de Nivel",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'curvas_de_nivel'
        }
    })
});

export const edif_construcciones_turisticas = new Image({
    title: "Edificios de Construcciones Turísticas",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'edif_construcciones_turisticas'
        }
    })
});

export const edif_depor_y_esparcimiento = new Image({
    title: "Edificios de Depor y Esparcimiento",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'edif_depor_y_esparcimiento'
        }
    })
});

export const edif_educacion = new Image({
    title: "Edificios de Educación",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'edif_educacion'
        }
    })
});

export const edif_religiosos = new Image({
    title: "Edificios Religiosos",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'edif_religiosos'
        }
    })
});

export const edif_seguridad = new Image({
    title: "Edificios de Seguridad",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'edificio_de_seguridad_ips'
        }
    })
});

export const edif_publico = new Image({
    title: "Edificios Públicos",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'edificio_publico_ips'
        }
    })
});

export const edif_ferroviarios = new Image({
    title: "Edificios Ferroviarios",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'edificios_ferroviarios'
        }
    })
});

export const edif_salud = new Image({
    title: "Edificios de Salud",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'edificio_de_salud_ips'
        }
    })
});

export const ejido = new Image({
    title: "Ejido",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'ejido'
        }
    })
});

export const espejos_de_agua = new Image({
    title: "Espejos de Agua",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'espejo_de_agua_hid'
        }
    })
});

export const estructuras_portuarias = new Image({
    title: "Estructuras Portuarias",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'estructuras_portuarias'
        }
    })
});

export const infraest_aeroportuaria_punto = new Image({
    title: "Infraestructura Aeroportuaria",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'infraestructura_aeroportuaria_punto'
        }
    })
});

export const infraest_hidro = new Image({
    title: "Infraestructura Hidrográfica",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'infraestructura_hidro'
        }
    })
});

export const isla = new Image({
    title: "Isla",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'isla'
        }
    })
});

export const limite_politico_administrativo = new Image({
    title: "Límite Político Administrativo",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'limite_politico_administrativo_lim'
        }
    })
});

export const lineas_de_conduccion_ene = new Image({
    title: "Líneas de Conducción ENE",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'lineas_de_conduccion_ene'
        }
    })
});

export const localidad = new Image({
    title: "Localidad",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'localidades'
        }
    })
});

export const marcas_y_senales = new Image({
    title: "Marcas y Señales",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'marcas_y_senales'
        }
    })
});

export const muro_embalse = new Image({
    title: "Muro Embalse",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'muro_embalse'
        }
    })
});

export const obra_portuaria = new Image({
    title: "Obra Portuaria",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'obra_portuaria'
        }
    })
});

export const obras_de_comunicacion = new Image({
    title: "Obras de Comunicación",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'obra_de_comunicacion'
        }
    })
});

export const otras_edificaciones = new Image({
    title: "Otras Edificaciones",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'otras_edificaciones'
        }
    })
});

export const pais = new Image({
    title: "País",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'pais_lim'
        }
    })
});

export const puente_red_vial_punto = new Image({
    title: "Puente Red Vial Punto",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'puente_red_vial_puntos'
        }
    })
});

export const puntos_alturas_topograficas = new Image({
    title: "Puntos de Alturas Topográficas",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'puntos_de_alturas_topograficas'
        }
    })
});

export const puntos_del_terreno = new Image({
    title: "Puntos del Terreno",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'puntos_del_terreno'
        }
    })
});

export const red_ferroviaria = new Image({
    title: "Red Ferroviaria",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'red_ferroviaria'
        }
    })
});

export const red_vial = new Image({
    title: "Red Vial",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'red_vial'
        }
    })
});

export const salvado_de_obstaculo = new Image({
    title: "Salvado de Obstáculo",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'salvado_de_obstaculo'
        }
    })
});

export const senalizaciones = new Image({
    title: "Señalizaciones",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'senalizaciones'
        }
    })
});

export const sue_congelado = new Image({
    title: "Suelo Congelado",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'sue_congelado'
        }
    })
});

export const sue_consolidado = new Image({
    title: "Suelo Consolidado",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'sue_consolidado'
        }
    })
});

export const sue_costero = new Image({
    title: "Suelo Costero",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'sue_costero'
        }
    })
});

export const sue_hidromorfologico = new Image({
    title: "Suelo Hidromorfológico",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'sue_hidromorfologico'
        }
    })
});

export const sue_no_consolidado = new Image({
    title: "Suelo No Consolidado",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'sue_no_consolidado'
        }
    })
});

export const veg_arborea = new Image({
    title: "Vegetación Arbórea",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'veg_arborea'
        }
    })
});

export const veg_arbustiva = new Image({
    title: "Vegetación Arbustiva",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'veg_arbustiva'
        }
    })
});

export const veg_cultivos = new Image({
    title: "Vegetación Cultivos",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'veg_cultivos'
        }
    })
});

export const veg_hidrofila = new Image({
    title: "Vegetación Hidrófila",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'veg_hidrofila'
        }
    })
});

export const veg_suelo_desnudo = new Image({
    title: "Vegetación Suelo Desnudo",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'veg_suelo_desnudo'
        }
    })
});

export const vias_secundarias = new Image({
    title: "Vías Secundarias",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'vias_secundarias'
        }
    })
});

export const provincias = new Image({
    title: "Provincias",
    visible: false,
    source: new ImageWMS({
        url: url,
        params: {
            LAYERS: 'provincias'
        }
    })
});

//Seleccion de capas

const leyendaURL = (layerName, e) => {
    const wmsSource = new ImageWMS({
        url: url + '&TRANSPARENT=TRUE&ITEMFONTCOLOR=0x213547',
        params: {
            LAYERS: layerName,
            FORMAT: 'image/png'
        }
    })

    return wmsSource.getLegendUrl();
}

export const capas = [act_agrop, act_economicas, comp_energia, cur_agua, curvas_nivel, edif_construcciones_turisticas, edif_depor_y_esparcimiento, edif_educacion, edif_religiosos, edif_seguridad, edif_publico, edif_ferroviarios, edif_salud, ejido, espejos_de_agua, estructuras_portuarias, infraest_aeroportuaria_punto, infraest_hidro, isla, limite_politico_administrativo, lineas_de_conduccion_ene, localidad, marcas_y_senales, muro_embalse, obra_portuaria, obras_de_comunicacion, otras_edificaciones, pais, provincias, puente_red_vial_punto, puntos_alturas_topograficas, puntos_del_terreno, red_ferroviaria, red_vial, salvado_de_obstaculo, senalizaciones, sue_congelado, sue_consolidado, sue_costero, sue_hidromorfologico, sue_no_consolidado, veg_cultivos, veg_arborea, veg_arbustiva, veg_hidrofila, veg_suelo_desnudo, vias_secundarias]

//actualizar leyendas
const actualizarLeyenda = (index) => {
    const capasSeleccionadas = capas.filter((capa) => capa.getVisible());
    const img = document.querySelector('#leyenda');

    if (capasSeleccionadas.length > 0) {
        const layerName = (index !== -1) ? capas[index].getSource().getParams().LAYERS : capasSeleccionadas[0].getSource().getParams().LAYERS;
        const leyendaIMG = leyendaURL(layerName, img);
        img.src = leyendaIMG;
        img.style.display = 'block';
    } else {
        img.src = '';
        img.style.display = 'none';
    }
};

capas.forEach((capa, index) => {
    // Crea un checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('alt', capa.getSource().getParams().LAYERS);
    checkbox.id = 'check_layer_' + index; // Asigna un ID único a cada checkbox
    checkbox.checked = capa.getVisible();

    // Agrega un listener al evento 'change' del checkbox
    checkbox.addEventListener('change', function () {
        var checked = this.checked;
        if (checked !== capa.getVisible()) {
            capa.setVisible(checked);
            const index1 = checked ? index : -1;
            actualizarLeyenda(index1);

        }

    });

    // Crea una etiqueta para el checkbox
    var label = document.createElement('label');
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(capa.get('title'))); // Puedes usar el título de la capa como texto de la etiqueta

    var container = document.getElementById('capasContainer'); // Reemplaza 'checkboxContainer' con el ID de tu contenedor
    container.appendChild(label)
})