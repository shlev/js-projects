( function () {

    const buttons = document.querySelectorAll(".btn");
    const images = document.querySelectorAll(".products.image");
    buttons.forEach( button => {
        const btnText = button.textContent;
        button.addEventListener('click', (e) => {
            filterImages (btntext);
        });
    });

    function filterImages(selector) {
        images
    }

})()