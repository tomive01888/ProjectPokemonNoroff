
document.addEventListener("DOMContentLoaded", function() {
    var images = ["home-of-celebi.png", "home-of-celebi-dawn.jpg", "home-of-celebi-night.png"];
    var currentIndex = 0;
    var homepage = document.getElementById("index-body");
    var preloadedImages = [];

    function preloadImages(urls) {
        urls.forEach(function(url) {
            var img = new Image();
            img.src = "./assets/" + url;
            preloadedImages.push(img);
        });
    }

    preloadImages(images);

    function changeBackground() {
        homepage.style.backgroundImage = "url(./assets/" + images[currentIndex] + ")";
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground();

    setInterval(changeBackground, 6000);
});

