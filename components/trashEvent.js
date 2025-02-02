import { removeItem } from "./removeItem.js";

export function trashEvent(trashIcon, itemWrapper) {
    trashIcon.addEventListener('click', () => {
        removeItem(itemWrapper);
        
      })
}