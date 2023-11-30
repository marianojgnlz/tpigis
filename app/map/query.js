import { DragBox } from 'ol/interaction';
import { Style, Stroke } from 'ol/style';
import { always } from 'ol/events/condition';
import { boxRequest, pointRequest } from './request'

let view

const selectInteraction = new DragBox({
    condition: always, //noModifierKeys
    style: new Style({
        stroke: new Stroke({
            color: [0, 0, 255, 1]
        })
    })
});

selectInteraction.on('boxend', function (evt) {
    //this: referencia al selectInteraction

    const $capasSeleccionadas = document.querySelectorAll('input[id^="check"]:checked')
    const capasSeleccionadas = [...$capasSeleccionadas].map(e => e.getAttribute('alt'));

    boxRequest(this.getGeometry().getCoordinates(), capasSeleccionadas[0])
});

//funcion para el evento click en el mapa
var clickEnMapa = function (evt) {
    //muestro por consola las coordenadas del evento
    console.log('click', evt.coordinate);

    const $capasSeleccionadas = document.querySelectorAll('input[id^="check"]:checked')
    const capasSeleccionadas = [...$capasSeleccionadas].map(e => e.getAttribute('alt'));

    pointRequest(evt.coordinate, capasSeleccionadas[0], view.getResolution())
};

document.getElementById("requestButton")
    .addEventListener("click", () => {
        const modal = document.getElementById("request");
        modal.classList.remove("requestShow");
        const table = document.querySelector("table");
        modal.removeChild(table);
        modal.close();
    })


export function addQuery(map) {
    view = map.getView();
    //agrego la interaccion del dragbox
    //la cual tiene precedencia sobre las otras
    map.addInteraction(selectInteraction);

    //subscribo una funcion al evento click del mapa
    map.on('click', clickEnMapa);
}

export function removeQuery(map) {
    // la remuevo...
    map.removeInteraction(selectInteraction);
    // remueveo la subscripcion de la funcion al evento click del mapa
    map.un('click', clickEnMapa);
}
