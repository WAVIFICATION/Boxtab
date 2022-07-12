const stopPropagation = (e) => {
  switch (e.key) {
    case 'ArrowDown':
    case 'ArrowUp':
    case 'Home':
    case 'End':
      break;
    default:
      e.stopPropagation();
  }
};
export default stopPropagation;
