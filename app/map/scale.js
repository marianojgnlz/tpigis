import { ScaleLine } from 'ol/control';

var scaleBarSteps = 4;
var scaleBarText = true;

export const scaleControl = new ScaleLine({
    bar: true,
    steps: scaleBarSteps,
    text: scaleBarText,
    minWidth: 140,
});

