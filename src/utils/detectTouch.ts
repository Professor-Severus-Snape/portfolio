// утилита для проверки на touch-устройства:
const detectTouchDevice = () => {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add('no-hover');
  }
};

export default detectTouchDevice;
