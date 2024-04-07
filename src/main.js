
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";

const form = document.querySelector("form");
const loader = document.querySelector('.loader');

function showLoader() {
    loader.classList.remove("is-hidden");
}

function hideLoader() {
    loader.classList.add("is-hidden");
}

form.addEventListener("submit", async e => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();

    const galleryList = document.querySelector(".gallery");
    galleryList.innerHTML = "";

    showLoader();

    if (query === "") {
        iziToast.warning({
            color: 'yellow',
            message: "Please fill in the field for search!",
            position: 'topRight'
        });
        return;
    }

    try {
        const data = await fetchImages(query);
        if (data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                backgroundColor: "red",
                messageColor: "white",
                position: 'topRight'
            });
        } else {
            renderImages(data.hits);
        }
    } catch (error) {
        console.log(error);
        iziToast.error({
            title: 'Error',
            message: `Sorry, there are no images matching your search query. Please, try again!`,
            position: 'topRight'
        });
    } finally {
        hideLoader();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
});