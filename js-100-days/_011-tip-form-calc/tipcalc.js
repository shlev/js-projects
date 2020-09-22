( function() {

    const services = [
        { value: 1, title: "great - 20%"},
        { value: 2, title: "good - 10%"},
        { value: 3, title: "bad - 2%"},
    ]

    const validateInput = function(billAmount, numUsers, selectedService) {
        let isFeedback = false;
        const feedback = document.querySelector('.feedback');
        feedback.innerHTML = '';
        
        if ( billAmount === "" || billAmount <= "0") {
            feedback.classList.add('showItem', 'alert-danger');
            feedback.innerHTML += `<p>Bill amount cannot be blank</p>`;
            isFeedback = true;
        }
    }
})()