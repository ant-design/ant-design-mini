const isFrontTick = (item, sliderLeft, sliderWidth) => {
  return item.left >= sliderLeft && item.left <= sliderLeft + sliderWidth;
}

export default {
  isFrontTick
}