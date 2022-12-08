function isComputing(placement, adjustedPlacement, autoAdjustOverflow) {
  if (autoAdjustOverflow) {
    return !adjustedPlacement;
  }
  return false;
}

function getPlacement(placement, adjustedPlacement, autoAdjustOverflow) {
  if (isComputing(placement, adjustedPlacement, autoAdjustOverflow)) {
    return placement;
  }
  return adjustedPlacement;
}
export default { isComputing, getPlacement };
