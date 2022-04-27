import { renderMarkup, RenderPosition } from './render';
import { createSortTemplate } from './view/sort';
import { createMenuTemplate } from './view/menu';
import { createFiltersTemplate } from './view/filters';

const navigationElement = document.querySelector('.trip-controls__navigation');
const filtersElement = document.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');

renderMarkup(navigationElement, createMenuTemplate(), RenderPosition.BEFORE_END);
renderMarkup(filtersElement, createFiltersTemplate(), RenderPosition.BEFORE_END);
renderMarkup(eventsElement, createSortTemplate(), RenderPosition.BEFORE_END);
