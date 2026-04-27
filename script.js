let imageList = [
    {
        src: "img/neroPalaceTor.jpg",
        title: "Nero Palast Tor"
    },
    {
        src: "img/neroPalaceSide.jpg",
        title: "Nero Palast Side"
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

let currentImageIndex = 0;

function openImage(index) {
    currentImageIndex = index;
    updateDialog();
    document.getElementById("imageDialog").showModal();
}

function updateDialog() {
    document.getElementById("dialogImage").src = imageList[currentImageIndex].src;
    document.getElementById("dialogImage").alt = imageList[currentImageIndex].title;
    document.getElementById("dialogTitle").innerText = imageList[currentImageIndex].title;
    document.getElementById("imageCounter").innerText = (currentImageIndex + 1) + "/" + imageList.length;
}

function showNextImage() {
    currentImageIndex++;

    if (currentImageIndex >= imageList.length) {
        currentImageIndex = 0;
    }

    updateDialog();
}

function showPreviousImage() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = imageList.length - 1;
    }

    updateDialog();
}

function closeDialog() {
    document.getElementById("imageDialog").close();
}

function closeOnBackground(event) {
    if (event.target.id === "imageDialog") {
        closeDialog();
    }
}
