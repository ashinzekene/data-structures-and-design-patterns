const addListener = (() => {
  const getElements = (sel, single) => {
    return single ?
      [window.document.querySelector(sel)] :
      [...window.document.querySelectorAll(sel)];
  };
  const addElementListeners = (elems, ev, func) => {
    elems.forEach(elem => elem.addEventListener(ev, func));
    return elems;
  };
  return (selector, event, func, single = false) => {
    const elements = getElements(selector, Boolean(single));
    return addElementListeners(elements, event, func);
  };
})();

addListener('.my-buttons', 'click', e => console.log(e.target));
