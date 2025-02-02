const error = document.querySelector(".error");
const item = document.getElementById('inputProduct')

export function errorMessage() {
    error.style.display = "flex"
    if (item.textContent == '') {
        setTimeout(() => {
            error.style.display = "none"
        }, 10000);


        return
    }
}