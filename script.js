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
