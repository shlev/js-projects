(function () {

    class Customer {
        constructor(imagePostfix, name, rate, quote) {
            this.image = "./img/customer-" + imagePostfix + ".jpg";
            this.name = name;
            this.rate = rate;
            this.quote = quote;
        }
    }

    let testimoialIndex = 0;

    const image = document.querySelector(".image");
    const name = document.querySelector(".name");
    const rate = document.querySelector(".rate");
    const quote = document.querySelector(".quote");

    const buttons = document.querySelectorAll(".btn");
   
    const customer0 = new Customer(0, "name1", 4.5, "Quote1")
    const customer1 = new Customer(1, "name2", 3.5, "Quote2");
    const customer2 = new Customer(2, "name3", 2.5, "Quote3");
    const customer3 = new Customer(3, "name4", 1.5, "Quote4");
    const customer4 = new Customer(4, "name5", 4, "Quote5");
    
    const customers = [ customer0, customer1, customer2, customer3, customer4];
   

    function updateView(customerIndex) {
        const customer = customers[customerIndex];
        image.style.backgroundImage = "url('" + customer.image + "')";
        name.textContent = customer.name;
        updateRate(customer.rate);
        quote.textContent = customer.quote;
    }

    updateView(testimoialIndex);

    buttons.forEach( btn => {
        btn.addEventListener('click', rotateTestimonial)
    })

    function updateRate( rateValue) {
        rate.innerHTML = "";
        let starFA = getFAspan("fa-star");
        const starCount = parseInt(rateValue/1);
        for ( let i=0; i< starCount; i++) {
            let starFA = getFAspan("fa-star");
            rate.appendChild(starFA);
        }

        if ( rateValue%1 != 0) {
            const halfStarFa = getFAspan("fa-star-half");
            rate.appendChild(halfStarFa);
        }
    }

    function getFAspan(faClass) {
        const spanFA = document.createElement('span');
        let faCode = "<i class='fas #'></i>".replace("#", faClass);
        spanFA.innerHTML = faCode;
        return spanFA;
    }

    function rotateTestimonial(event) {
        if ( event.target.classList.contains('left')) testimoialIndex--;
        if ( event.target.classList.contains('right')) testimoialIndex++;

        if ( testimoialIndex > 4) testimoialIndex=0;
        if ( testimoialIndex < 0 ) testimoialIndex=4;

        updateView(testimoialIndex);

    }

})();