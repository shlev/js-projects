( function() {

    const leftBtn = document.querySelector(".left");
    const rightBtn = document.querySelector(".right");
    const images = document.querySelector(".images");
    leftBtn.addEventListener('click', ()=> slideImage(-1));
    rightBtn.addEventListener('click', ()=> slideImage(1));

    let counter = 0;

    function slideImage(direction) {
        counter +=direction;
        if (counter>4) counter = 0;
        if (counter<0) counter = 4;
        let imageSrc = "url('images/contBcg-" + counter + ".jpeg'";
        images.style.backgroundImage = imageSrc;
    }
})();