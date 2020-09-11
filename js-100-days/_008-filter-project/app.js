( function () {

    const buttons = document.querySelectorAll(".btn");
    const images = document.querySelectorAll(".products .image");
    const textBox = document.querySelector(".textual input")
    
    buttons.forEach( button => {
        
        button.addEventListener('click', (e) => {
            const btnText = e.target.textContent;
            filterImages (btnText);
        });
    });

    textBox.addEventListener('keyup', filterByText);

    function filterByText( e) {
        const textBox = e.target;
        alert(textBox.value);
    }

    function filterImages(selector) {
        if ( selector === 'all') {
            images.forEach( image => showImage(image, true));
        } else {
            selector = selector.substring(0, 3);
            
            images.forEach( image => {
                const imageBackground = window.getComputedStyle(image).background;
                if ( imageBackground.indexOf(selector) > -1 ) {
                    showImage(image, true);
                } else {
                    showImage(image, false);
                }
            });
        } 
    }

    function showImage( image, show ) {
        const parent = image.parentElement;
        parent.style.display = show ? "block" : "none";
    }

    

})()