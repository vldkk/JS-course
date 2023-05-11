const countries = document.querySelector('#country');
const cities = document.querySelector('#cities');
const container = document.querySelector('p');

const germanyCities = ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt am Main', 'Hildesheim'];
const usaCities = ['New-York', 'Washington', 'Boston', 'Chicago'];
const ukraineCities = ['Kharkiv', 'Stanytsia Luhanska', 'Kyiv', 'Luhansk', 'Khmelnytskyi'];

updateCities(germanyCities);
updateContainer();

countries.addEventListener('change', () => {
    cities.innerHTML = '';
    if (countries.value === 'usa') {
        updateCities(usaCities);
    } else if (countries.value === 'ukr') {
        updateCities(ukraineCities);
    } else
        updateCities(germanyCities);
    updateContainer();
});

cities.addEventListener('change', () => {
    updateContainer();
});

function updateCities(country) {
    country.forEach(city => {
        cities.innerHTML += `<option>${city}</option>`;
    });
}
function updateContainer() {
    container.innerHTML = `${countries.options[countries.selectedIndex].textContent}, ${cities.options[cities.selectedIndex].textContent}.`;
};

