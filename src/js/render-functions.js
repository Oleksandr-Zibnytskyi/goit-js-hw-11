export function renderImages(images) {
    const galleryList = document.querySelector(".gallery");
    galleryList.innerHTML = "";

    images.forEach(image => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = image.webformatURL;
        img.alt = image.tags;

        card.appendChild(img);
        galleryList.appendChild(card);
    });
}