document.addEventListener('DOMContentLoaded', () => {
    const imageData = [
        {
            src: "https://images.pexels.com/photos/18355843/pexels-photo-18355843/free-photo-of-madison-street-in-new-york-city-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "New York City street"
        },
        {
            src: "https://images.pexels.com/photos/31669033/pexels-photo-31669033/free-photo-of-tranquil-black-and-white-swans-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Swans on a lake"
        },
        {
            src: "https://images.pexels.com/photos/32053424/pexels-photo-32053424/free-photo-of-black-and-white-urban-alley-with-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Urban alley"
        },
        {
            src: "https://images.pexels.com/photos/27956127/pexels-photo-27956127/free-photo-of-black-and-white-castle-black-amp-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Castle in black and white"
        }
    ];

    const container = document.getElementById("imageContainer");
    const body = document.querySelector("body");

    const renderImages = () => {
        container.innerHTML = '';
        imageData.forEach((image, index) => {
            const card = document.createElement("div");
            card.className = "image-card";

            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.title;

            const title = document.createElement("p");
            title.textContent = image.title;

            const desc = document.createElement("p");
            desc.textContent = image.description;

            const delBtn = document.createElement("button");
            delBtn.className = "delete-button editOnly";
            delBtn.textContent = "Löschen";
            delBtn.onclick = () => {
                imageData.splice(index, 1);
                renderImages();
            };

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(desc);
            card.appendChild(delBtn);
            container.appendChild(card);
        });
    };

    renderImages();

    const editButton = document.getElementById("editButton");
    editButton.addEventListener("click", () => {
        document.body.classList.toggle("edit-mode");
    });

    const form = document.getElementById("addImageForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const src = document.getElementById("imageUrl").value;
        const title = document.getElementById("imageTitle").value;
        const description = document.getElementById("imageDescription").value;

        imageData.push({ src, title, description });
        renderImages();
        form.reset();
    });
});
