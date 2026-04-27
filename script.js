/**ARRAY mit Bildern mit je zwei Eigenschaften*/
const imageList = [
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
        src: "img/Palace.jpg",
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

/**Diese Variable merkt sich, welches Bild aktuell im Dialog angezeigt wird. "0", weil Array ab "0" zählt und nicht ab "1" */
let currentImageIndex = 0;

/**wird über onclick=openImage aufgerufen. Der angeklickte Button/Bild übergibt eine Zahl(als aktuell ausgewähltes Bild).*/
function openImage(index) {
    currentImageIndex = index;
    updateDialog();/**aktualisiert Bild, Titeel und den alt-Text und den Zähler im Dialog*/
    document.getElementById("imageDialog").showModal();/**showModal öffnet das Dialog-Element als modales Fenster*/
}

function updateDialog() {/**function sorgt dafür, dass der Dialog immer den Inhalt des aktuell ausgewählten Bildes zeigt*/
    document.getElementById("dialogImage").src = imageList[currentImageIndex].src;/**setzt das Bild in den Dialog*/
    document.getElementById("dialogImage").alt = imageList[currentImageIndex].title;/**dialogImage.alt setzt den Alt-Text passend zum Bildtitel*/
    document.getElementById("dialogTitle").innerText = imageList[currentImageIndex].title;/**dialogTitle.innerText setzt die Überschrift */
    document.getElementById("imageCounter").innerText = (currentImageIndex + 1) + "/" + imageList.length;/**imageCounter.innerText erstellt den Zähler (z.B. 1/12)*/
}

function showNextImage() {/**Diese Funktion wird bei klick auf den rechten Pfeil im Dialog aufgerufen*/
    currentImageIndex++;/**Erhöht den Index um 1*/

    if (currentImageIndex >= imageList.length) {/**wenn Index>=der Anzahl der Bilder, dann wird er wieder auf 0 gesetzt.*/
        currentImageIndex = 0;
    }

    updateDialog();/**zeigt danach das neue Bild.*/
}

function showPreviousImage() {/**siehe function showNextImage() nur andersherum*/
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = imageList.length - 1;
    }

    updateDialog();
}

function closeDialog() {/**schließt Dialog durch klick auf "x"-Button */
    document.getElementById("imageDialog").close();
}

function closeOnBackground(event) {
    if (event.target.id === "imageDialog") {/**event.target ist das Element, auf das wirklich geklickt wird.Wenn die id dieses Elements imageDialog ist, wurde auf Hintergrund geklickt*/
        closeDialog();/**dann wird der dialog geschlossen */
    }
}
