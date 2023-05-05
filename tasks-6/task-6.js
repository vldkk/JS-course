// https://codepen.io/misha_klymenko/pen/dyjyeGO
const colors = document.querySelector('.colors');

colors.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
        if (!event.target.classList.contains('active')) {
            document.querySelector('.color.active').classList.remove('active');
            event.target.classList.add('active');
            switch (event.target.getAttribute('color')) {
                case 'red':
                    document.querySelector('#outprice').innerHTML = event.target.getAttribute('data-price');
                    break;
                case 'green':
                    document.querySelector('#outprice').innerHTML = event.target.getAttribute('data-price');
                    break;
                case 'orange':
                    document.querySelector('#outprice').innerHTML = event.target.getAttribute('data-price');
                    break;
                default:
                    document.querySelector('#outprice').innerHTML = event.target.getAttribute('data-price');
            }
        }
    }
    const sizes = document.querySelector('.sizes');

    const materials = document.querySelector('.materials');

    sizes.addEventListener('click', (event) => {
        if (event.target.classList.contains('size')) {
            if (!event.target.classList.contains('active')) {
                document.querySelector('.size.active').classList.remove('active');
                event.target.classList.add('active');
                switch (event.target.getAttribute('size')) {
                    case 'small':
                        updatePrice();
                        break;
                    case 'medium':
                        updatePrice(10);
                        break;
                    case 'large':
                        updatePrice(20);
                        break;
                }
            }
        }
    });

    materials.addEventListener('click', (event) => {
        if (event.target.classList.contains('material')) {
            if (!event.target.classList.contains('active')) {
                document.querySelector('.material.active').classList.remove('active');
                event.target.classList.add('active');
                switch (event.target.getAttribute('material')) {
                    case 'leather':
                        updatePrice();
                        break;
                    case 'synthetic':
                        updatePrice(-10);
                        break;
                }
            }
        }
    });

    function updatePrice(variation = 0) {
        const basePrice = parseFloat(document.querySelector('#outprice').innerHTML);
        const newPrice = basePrice + variation;
        document.querySelector('#outprice').innerHTML = newPrice.toFixed(2);
    }
})