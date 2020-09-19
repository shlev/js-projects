( function() {
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const rotateLeftBtn = document.querySelector('.rotate-left');
    const rotateRightBtn = document.querySelector('.rotate-right');

    rotateLeftBtn.addEventListener('click', ()=> rotateLeft());
    rotateRightBtn.addEventListener('click', ()=> rotateRight());

    const imagesContainerList = document.querySelectorAll('.image-container');

    let currentIndex = 0;

    const modalImageElem = document.querySelector('.modal-image')
    let imagesUrl = [];

    imagesContainerList.forEach( (image, index) => {
        image.addEventListener('click', image => openModalImage(index));
        imagesUrl.push(image.childNodes[1].src);
    });
    
    closeModalBtn.addEventListener('click', () => showModal(false));

    showModal(false);


    function rotateLeft() {
        currentIndex--;
        if ( currentIndex < 0) currentIndex = 11;
        showModalImage();
    }

    function rotateRight() {
       currentIndex++;
       if ( currentIndex>11) currentIndex = 0;
       showModalImage();
    }

    function openModalImage(index) {
        currentIndex = index;
        showModalImage()
    }

    function showModalImage() {
        modalImageElem.style.backgroundImage = "url('" + imagesUrl[currentIndex] +"')"
        showModal(true);
    }

    function showModal(show) {
        if (show) {
            modal.classList.remove('hide');
        } else {
            modal.classList.add('hide');
        }
    }
})();