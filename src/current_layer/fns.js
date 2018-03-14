export function getCurrentLayerName(currentLayer) {
  return currentLayer.name;
}

export function getCurrentLayerHoldback(currentLayer) {
  return currentLayer.holdback;
}

export default {
  getCurrentLayerName: getCurrentLayerName,
  getCurrentLayerHoldback: getCurrentLayerHoldback,
};
