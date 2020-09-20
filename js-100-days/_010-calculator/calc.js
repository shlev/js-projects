( function() {
    console.log("init calc");

    const buttons = document.querySelectorAll('.btn');
    const board = document.querySelector('.result input');
    let calcText = "";

    buttons.forEach( button => {
        button.addEventListener('click', btnClicked);
    });

    function btnClicked(e) {
        const clickedElem = e.target;
        if ( clickedElem.classList.contains('action')) {
            addAction(clickedElem.innerText);
        } else if (clickedElem.classList.contains('run')){
            run();
        } else if (clickedElem.classList.contains('clear')) {
            clear();
        } else {
            updateBoard(clickedElem.innerText);
        }
    }

    function addAction(action) {
        if ( calcText.match(/\d+$/)) { 
             updateBoard(action);
        }
    }

    function updateBoard( newChar) {
        calcText += newChar;
        board.value = calcText;
    }

    function clear() {
        calcText = '';
        updateBoard(calcText);
    }

    function run() {
        try {
            const result = eval(calcText);
            if ( isNaN(result)) {
                console.error("wierd result: " + result);
            } else {
                calcText = result;
                board.value = calcText;
            }
        } catch ( e) {
            console.error(e);
        }
    }
})();