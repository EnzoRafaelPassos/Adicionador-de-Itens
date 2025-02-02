import { createElement } from './createElement.js';
import { errorMessage } from './errorMessage.js';
import { trashEvent } from './trashEvent.js';
const inputProduct = document.getElementById('inputProduct')
const list = document.getElementById("list");


export function boxItem() {
  let { itemWrapper, check, item, trashIcon } = createElement();

  item.textContent = inputProduct.value;

  itemWrapper.appendChild(check);

  itemWrapper.appendChild(item);

  itemWrapper.appendChild(trashIcon);

  list.appendChild(itemWrapper);

  trashEvent(trashIcon, itemWrapper)



  return itemWrapper;
}