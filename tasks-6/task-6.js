// https://codepen.io/misha_klymenko/pen/dyjyeGO
const colors = document.querySelector('.colors');
const sizes = document.querySelector('.sizes');
const materials = document.querySelector('.materials');

colors.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
        if (!event.target.classList.contains('active')) {
            document.querySelector('.color.active').classList.remove('active');
            event.target.classList.add('active');
            switch (event.target.getAttribute('color')) {
                case 'red':
                    getPriceByColor(event.target.getAttribute('data-price'));
                    updatePrice(priceColor, priceMaterial, priceSize);
                    break;
                case 'green':
                    getPriceByColor(event.target.getAttribute('data-price'));
                    updatePrice(priceColor, priceMaterial, priceSize);
                    break;
                case 'orange':
                    getPriceByColor(event.target.getAttribute('data-price'));
                    updatePrice(priceColor, priceMaterial, priceSize);
                    break;
                default:
                    getPriceByColor(event.target.getAttribute('data-price'));
                    updatePrice(priceColor, priceMaterial, priceSize);
            }
        }
    }
});

sizes.addEventListener('change', () => {
    switch (sizes.value) {
        case '36':
        case '37':
            getPriceBySize(0);
            updatePrice(priceColor, priceMaterial, priceSize);
            break;
        case '38':
        case '39':
        case '43':
        case '44':
            getPriceBySize(20);
            updatePrice(priceColor, priceMaterial, priceSize);
            break;
        case '40':
        case '41':
        case '42':
        case '45':
        case '46':
            getPriceBySize(10);
            updatePrice(priceColor, priceMaterial, priceSize);
            break;
    }
});

materials.addEventListener('change', () => {
    switch (materials.value) {
        case 'leather':
            getPriceByMaterial(0);
            updatePrice(priceColor, priceMaterial, priceSize);
            break;
        case 'synthetic':
            getPriceByMaterial(-10);
            updatePrice(priceColor, priceMaterial, priceSize);
            break;
    }
});
let priceColor = 170,
    priceMaterial = 0,
    priceSize = 0;
const getPriceByColor = (price) => priceColor = +price;
const getPriceBySize = (price) => priceSize = +price;
const getPriceByMaterial = (price) => priceMaterial = +price;

function updatePrice(priceColor, priceMaterial, priceSize) {
    const basePrice = priceColor;
    const newPrice = basePrice + priceMaterial + priceSize;
    document.querySelector('#outprice').innerHTML = newPrice;
}