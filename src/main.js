import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { searchForm } from "./js/pixabay-api";
import { imageMarkup } from "./js/render-functions";
import { list } from "./js/render-functions";
const loader = document.querySelector(".loader");
const inputField = document.querySelector(".input-field");
inputField.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    list.innerHTML = "";
    loader.classList.remove(".hidden")
    const names = event.target.elements.designation.value.trim();
    searchForm(names)
        .then(data => {
            if (data.totalHits === 0 || names === '') {
                loader.classList.add(".hidden");
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: 'white',
                    backgroundColor: 'red',
                    position: 'bottomCenter',
                    iconColor: 'white'
                });
            } else {
                loader.classList.add(".hidden");
                iziToast.success({
                    iconColor: 'yellow',
                    message: 'Enjoy watching!',
                    position: 'topRight',
                    backgroundColor: 'blue',
                    messageColor: 'yellow'
                
                
});
imageMarkup(data);  
            }
        });
    event.target.reset();
}