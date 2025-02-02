

const list = document.getElementById("list");
const spanContent = document.querySelector(".span-removed")

export function createRemoveElement() {
    let popUpRemoved = document.createElement('div');
    popUpRemoved.classList.add('removed');

    let icon = document.createElement('i');
    icon.classList.add('ph');
    icon.classList.add('ph-warning-circle');

    let span = document.createElement('span')
    span.classList.add('span-removed');
    span.textContent = spanContent ? spanContent.textContent : "Item";
    
    let btnExit = document.createElement('button');
    btnExit.classList.add('ph-x')
    btnExit.classList.add('ph');

    popUpRemoved.appendChild(icon);
    popUpRemoved.appendChild(span);
    popUpRemoved.appendChild(btnExit);
 
    list.appendChild(popUpRemoved);
    popUpRemoved.style.display = 'flex';

    
    setTimeout(() => {
        popUpRemoved.style.display = 'none';
        
    }, 5000);
    
    btnExit.addEventListener('click', () => {
        popUpRemoved.style.display = 'none';
     
 })

 return popUpRemoved;
 
}


export function removeItem(itemWrapper) {
    itemWrapper.remove();
   createRemoveElement();
}
