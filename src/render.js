export const RenderPosition = {
  BEFORE_BEGIN: 'beforebegin',
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER_END: 'afterend',
};

export const renderMarkup = (container, markup, position) => {
  console.warn(markup);
  container.insertAdjacentHTML(position, markup);
};

