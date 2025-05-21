document.addEventListener('DOMContentLoaded', () => {
    function clickHandler() {
        document.getElementById('testtext').innerHTML = "TEST2";
    }
    let element = document.getElementById('btn1');
    if (element) {
        element.addEventListener('click', clickHandler);
    }

    let images = document.getElementsByTagName('img');
    function resizeImages() {
        Array.from(images).forEach(img => {
            img.style.scale = '1.5';
        });
    }
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', resizeImages);
    }
});