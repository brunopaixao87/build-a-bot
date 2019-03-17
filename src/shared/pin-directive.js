export default {
  bind: (element, binding) => {
    element.style.position = 'absolute';
    Object.keys(binding.value)
      .forEach((position) => {
        element.style[position] = binding.value[position];
      });
  },
};
