/**ARRAY with images, each having two properties*/
const IMAGE_LIST = [
    {
        src: "img/neroPalaceTor.jpg",
        title: "Nero Palast Tor"
    },
    {
        src: "img/neroPalaceSide.jpg",
        title: "Nero Palast Seite"
    },
    {
        src: "img/place.jpg",
        title: "Place de Roma"
    },
    {
        src: "img/hinterhof.jpg",
        title: "Hinterhof"
    },
    {
        src: "img/neroPalace4.jpg",
        title: "Nero Palast Nord"
    },
    {
        src: "img/neroPalace.jpg",
        title: "Nero Palast Gräber"
    },
    {
        src: "img/neroPalace2.jpg",
        title: "Nero Palast West"
    },
    {
        src: "img/neroPalace3.jpg",
        title: "Nero Palast Steine"
    },
    {
        src: "img/oldHouse.jpg",
        title: "Altes Haus in Rom"
    },
    {
        src: "img/palace.jpg",
        title: "Palast Rom"
    },
    {
        src: "img/spanischeTreppe.jpg",
        title: "Spanische Treppe"
    },
    {
        src: "img/church.jpg",
        title: "Kirche"
    }
];

/* function renderGallery(): Function that dynamically creates the entire image gallery
const gallery = document.getElementById("fotoGalery"): Retrieves the container from the HTML into which the images are inserted
gallery.innerHTML = "": Clears the content of the container to prevent duplicate elements
for (let i = 0; i < IMAGE_LIST.length; i++): Iterates over all elements in the array IMAGE_LIST to create an element for each image
let i = 0; means the loop starts with the first element of the array (index 0)
i < IMAGE_LIST.length; means the loop runs until the last element of the array is reached
i++: Increases the value by 1 in each iteration
gallery.innerHTML += ...: Adds new HTML code to the container without overwriting the existing content
<button class="imageButton" onclick="openImage(${i})" aria-label="Open image: ${IMAGE_LIST[i].title}">: Creates a clickable button for each image and passes the corresponding index to the function when clicked
<img src="${IMAGE_LIST[i].src}" alt="${IMAGE_LIST[i].title}">: Inserts the respective image from the array and sets the appropriate alt text
*/
function renderGallery() {
    const gallery = document.getElementById("fotoGalery");
     gallery.innerHTML = "";

    for (let i = 0; i < IMAGE_LIST.length; i++) {
        gallery.innerHTML += `
            <button class="imageButton" onclick="openImage(${i})" aria-label="Bild öffnen: ${IMAGE_LIST[i].title}">
                <img src="${IMAGE_LIST[i].src}" alt="${IMAGE_LIST[i].title}">
            </button>
        `;
    }
}

/** This variable stores which image is currently displayed in the dialog. "0" because arrays start at "0" and not at "1".
Called via onclick="openImage(...)". The clicked button/image passes a number (the currently selected image index).
updateDialog: /** Updates the image, title, alt text, and the counter in the dialog
showModal() opens the dialog element as a modal window */
let currentImageIndex = 0;


function openImage(index) {
    currentImageIndex = index;
    updateDialog();
    document.getElementById("imageDialog").showModal();
    document.body.classList.add("no-scroll");
}

/** This function ensures that the dialog always displays the content of the currently selected image
 .src Sets the image in the dialog 
 dialogImage.alt sets the alt text to match the image title
imageCounter.innerText creates the counter (e.g., 1/12)*/
function updateDialog() {

    document.getElementById("dialogImage").src = IMAGE_LIST[currentImageIndex].src;
    document.getElementById("dialogImage").alt = IMAGE_LIST[currentImageIndex].title;
    document.getElementById("dialogTitle").innerText = IMAGE_LIST[currentImageIndex].title;
    document.getElementById("imageCounter").innerText = (currentImageIndex + 1) + "/" + IMAGE_LIST.length;
}
/*This function is called when clicking the right arrow in the dialog
currentImageIndex++ increases the index by 1
If the index is greater than or equal to the number of images, it is reset to 0
updateDialog() shows the new picture */
function showNextImage() {
    currentImageIndex++;

    if (currentImageIndex >= IMAGE_LIST.length) {
        currentImageIndex = 0;
    }

    updateDialog();
}
/* see function showNextImage() but vis-versa*/
function showPreviousImage() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = IMAGE_LIST.length - 1;
    }

    updateDialog();
}
/*/** Closes the dialog by clicking the "x" button */
function closeDialog() {
    document.getElementById("imageDialog").close();
     document.body.classList.remove("no-scroll");
}
/*/** event.target is the element that was actually clicked. If this element's id is "imageDialog", the background was clicked */
function closeOnBackground(event) {
    if (event.target.id === "imageDialog") {
        closeDialog();
    }
}

/*Defines the function. It will be called later and then creates the entire gallery.*/
renderGallery();
