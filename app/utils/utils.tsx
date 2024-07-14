export const getClassMaker = (block = '') => {
  return (element = '', modifier = '') => {
    let className = block;
    if (element) {
      className += `__${element}`;
    }
    if (modifier) {
      className += `--${modifier}`;
    }
    return className;
  };
};
