function applyStyle(element, binding) {
  element.style.position = 'absolute';
  Object.keys(binding.value)
    .forEach((position) => {
      element.style[position] = binding.value[position];
    });
}

export default {
  bind: (element, binding) => {
    applyStyle(element, binding);
  },
  update: {
    applyStyle(element, binding);
  },
};
