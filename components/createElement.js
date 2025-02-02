export function createElement() {
  let itemWrapper = document.createElement('div');
  itemWrapper.classList.add('item-wrapper');

  let check = document.createElement('input');
  check.type = 'checkbox';
  check.classList.add('inputCheck');

  let item = document.createElement('li');


  let trashIcon = document.createElement('button');
  trashIcon.classList.add('ph-trash')
  trashIcon.classList.add('ph')


  return { itemWrapper, check, item, trashIcon }
}
