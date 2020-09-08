(function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', submitForm);

    function submitForm(e) {
        e.preventDefault();
        
        const messageInput = document.querySelector("#message");
        if ( messageInput.value === "") {
            showError();
        } else {
            const messageTarget = document.querySelector(".message-target");
            messageTarget.textContent = messageInput.value;
        }
    }

    function showError() {
        const p = document.querySelector(".error");
        p.classList.add('show');
        setTimeout( () => {
            p.classList.remove('show');
        }, 2000)
    }

})();