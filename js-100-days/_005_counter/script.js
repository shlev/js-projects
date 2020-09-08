( function () {
    const lower = document.querySelector(".lower");
    const upper = document.querySelector(".upper");
    const counter = document.querySelector('.count');

    lower.addEventListener('click', lowerCount);
    upper.addEventListener('click', addCount);

    let count = new Number(counter.innerHTML);
    function lowerCount() {
        count--;
        update();
    }

    function addCount() {
        count++;
        update();
    }

    function update() {
        counter.innerHTML = count;
        if ( count > 0 ) counter.classList.add("plus");
        if ( count == 0 ) counter.classList.remove('plus','minus');
        if ( count < 0 ) counter.classList.add('minus');
    }
})()