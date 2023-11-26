const layersString =
  'provincias,obra_de_comunicacion,obra_portuaria,otras_edificaciones,pais_lim,puente_red_vial_puntos,puntos_del_terreno,puntos_de_alturas_topograficas,actividades_agropecuarias,actividades_economicas,complejo_de_energia_ene,curso_de_agua_hid,curvas_de_nivel,edificios_ferroviarios,edificio_de_salud_ips,edificio_de_seguridad_ips,edificio_publico_ips,edif_construcciones_turisticas,edif_depor_y_esparcimiento,edif_educacion,edif_religiosos,ejido,espejo_de_agua_hid,estructuras_portuarias,infraestructura_aeroportuaria_punto,infraestructura_hidro,isla,limite_politico_administrativo_lim,localidades,lineas_de_conduccion_ene,marcas_y_senales,muro_embalse,red_ferroviaria,red_vial,salvado_de_obstaculo,senalizaciones,sue_congelado,sue_consolidado,sue_costero,sue_hidromorfologico,sue_no_consolidado,veg_arborea,veg_arbustiva,veg_cultivos,veg_hidrofila,veg_suelo_desnudo,vias_secundarias'

const assignZIndex = (layer) => {
  if (layer.match(/(Puntos|Edif|Edificio|Edificios|Complejo|Veg|Infraestructura|Estructuras|Red|Salvado|Señalizaciones|Marcas|Vias|Obra|Actividades|Curvas)/)) {
    return 2
  }
  if (layer.match(/(Provincias|Pais)/)) {
    return 1
  }
  return 3
}

export const availableLayers = layersString
  .split(',')
  .map((layer) => {
    return {
      sourceName: layer,
      name: layer
        .replace(/_/g, ' ')
        .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())
        .replace(/(Veg)/, 'Vegetación')
        .replace(/(Sue)/, 'Suelo')
        .replace(/\b(Edif)\b/, 'Edificios')
        .replace(/\b(Lim)\b/, 'Limítrofe')
        .replace(/\b(Depor)\b/, 'Deportivos'),
      zIndex: assignZIndex(layer),
      visible: false
    }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

export const TOGGLE_LAYER = 'TOGGLE_LAYER'

export const CLEAR_ALL_LAYERS = 'CLEAR_ALL_LAYERS'

export const FILTER_LAYERS = 'FILTER_LAYERS'

export const layersReducer = (state = availableLayers, action) => {
  switch (action.type) {
    case TOGGLE_LAYER:
      return state.map((layer) => {
        if (layer.name === action.name) {
          return {
            ...layer,
            visible: !layer.visible
          }
        }
        return layer
      })
    case CLEAR_ALL_LAYERS:
      return state.map((layer) => {
        return {
          ...layer,
          visible: false
        }
      })
    default:
      return state
  }
}
