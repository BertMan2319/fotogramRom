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

/** This variable stores which image is currently displayed in the dialog. "0" because arrays start at "0" and not at "1". */
let currentImageIndex = 0;

/** Called via onclick="openImage(...)". The clicked button/image passes a number (the currently selected image index). */
function openImage(index) {
    currentImageIndex = index;
    updateDialog();/**aktualisiert Bild, Titeel und den alt-Text und den Zähler im Dialog*/
    document.getElementById("imageDialog").showModal();/**showModal öffnet das Dialog-Element als modales Fenster*/
    document.body.classList.add("no-scroll");
}

function updateDialog() {/**function sorgt dafür, dass der Dialog immer den Inhalt des aktuell ausgewählten Bildes zeigt*/
    document.getElementById("dialogImage").src = IMAGE_LIST[currentImageIndex].src;/**setzt das Bild in den Dialog*/
    document.getElementById("dialogImage").alt = IMAGE_LIST[currentImageIndex].title;/**dialogImage.alt setzt den Alt-Text passend zum Bildtitel*/
    document.getElementById("dialogTitle").innerText = IMAGE_LIST[currentImageIndex].title;/**dialogTitle.innerText setzt die Überschrift */
    document.getElementById("imageCounter").innerText = (currentImageIndex + 1) + "/" + IMAGE_LIST.length;/**imageCounter.innerText erstellt den Zähler (z.B. 1/12)*/
}

function showNextImage() {/**Diese Funktion wird bei klick auf den rechten Pfeil im Dialog aufgerufen*/
    currentImageIndex++;/**Erhöht den Index um 1*/

    if (currentImageIndex >= IMAGE_LIST.length) {/**wenn Index>=der Anzahl der Bilder, dann wird er wieder auf 0 gesetzt.*/
        currentImageIndex = 0;
    }

    updateDialog();/**zeigt danach das neue Bild.*/
}

function showPreviousImage() {/**siehe function showNextImage() nur andersherum*/
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = IMAGE_LIST.length - 1;
    }

    updateDialog();
}

function closeDialog() {/**schließt Dialog durch klick auf "x"-Button */
    document.getElementById("imageDialog").close();
     document.body.classList.remove("no-scroll");
}

function closeOnBackground(event) {
    if (event.target.id === "imageDialog") {/**event.target ist das Element, auf das wirklich geklickt wird.Wenn die id dieses Elements imageDialog ist, wurde auf Hintergrund geklickt*/
        closeDialog();/**dann wird der dialog geschlossen */
    }
}
