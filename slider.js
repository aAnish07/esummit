var firebaseConfig = {
    apiKey: "AIzaSyCuI9p--uQFbg6mmm-skoH1eLKiGMTT764",
    authDomain: "e-cell-iith.firebaseapp.com",
    databaseURL: "https://e-cell-iith.firebaseio.com",
    projectId: "e-cell-iith",
    storageBucket: "e-cell-iith.appspot.com",
    messagingSenderId: "796712758296",
    appId: "1:796712758296:web:f8eccb20bb876292dce76d",
    measurementId: "G-Y2S58PKNF9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();


function add_data() {
    const addemail = document.getElementById('add');
    console.log(addemail.value);
    db = db.collection("esummit").doc(addemail.value);
    db.set({
        email: addemail.value,
    }).then(() => {
        addemail.value = "";
        window.alert("Email has been recorded");
    });
}


document.getElementById("outer3").addEventListener("click", toggleState3);

function toggleState3() {
    let galleryView = document.getElementById("galleryView")
    let tilesView = document.getElementById("tilesView")
    let outer = document.getElementById("outer3");
    let slider = document.getElementById("slider3");
    let tilesContainer = document.getElementById("tilesContainer");
    if (slider.classList.contains("active")) {
        slider.classList.remove("active");
        outer.classList.remove("outerActive");
        galleryView.style.display = "flex";
        tilesView.style.display = "none";

        while (tilesContainer.hasChildNodes()) {
            tilesContainer.removeChild(tilesContainer.firstChild)
        }
    } else {
        slider.classList.add("active");
        outer.classList.add("outerActive");
        galleryView.style.display = "none";
        tilesView.style.display = "flex";

        for (let i = 0; i < imgObject.length - 1; i++) {
            let tileItem = document.createElement("div");
            tileItem.classList.add("tileItem");
            tileItem.style.background = "url(" + imgObject[i] + ")";
            tileItem.style.backgroundSize = "contain";
            tilesContainer.appendChild(tileItem);
        }
    };
}

let imgObject = [
    "speakers/AjeetKhurana.jpg",
    "speakers/DevvratArya.jpg",
    "speakers/tapan_misra.jpg",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

    let mainView = document.getElementById("mainView");
    mainView.style.background = "url(" + imgObject[mainImg] + ") no-repeat center";
    mainView.style.backgroundRepeat = "no-repeat";

    let leftView = document.getElementById("leftView");
    leftView.style.background = "url(" + imgObject[prevImg] + ")";
    leftView.style.backgroundRepeat = "no-repeat";

    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgObject[nextImg] + ")";
    rightView.style.backgroundRepeat = "no-repeat";

    let linkTag = document.getElementById("linkTag")
    // linkTag.href = imgObject[mainImg];

};

function scrollRight() {

    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= (imgObject.length - 1)) {
        nextImg = 0;
    } else {
        nextImg++;
    };
    loadGallery();
};

function scrollLeft() {
    nextImg = mainImg
    mainImg = prevImg;

    if (prevImg === 0) {
        prevImg = imgObject.length - 1;
    } else {
        prevImg--;
    };
    loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup', function (e) {
    if (e.keyCode === 37) {
        scrollLeft();
    } else if (e.keyCode === 39) {
        scrollRight();
    }
});

loadGallery();



var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if ($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}
