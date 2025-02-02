import { boxItem } from './components/boxItem.js'
import { errorMessage } from './components/errorMessage.js';
const inputProduct = document.getElementById('inputProduct')
const buttonAddItem = document.getElementById("btnAddItem");

const addItem = () => {
    if(inputProduct.value.trim() !== '') {
        boxItem();
        inputProduct.value = '';
    } else {
        errorMessage();
        return
    }
}

buttonAddItem.addEventListener("click", addItem)


inputProduct.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
})



