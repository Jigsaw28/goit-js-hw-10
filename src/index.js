import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
    inputEl: document.querySelector("#search-box"),
    countryList: document.querySelector(".country-list"),
    countryInfo: document.querySelector(".country-info")
}

refs.inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
    fetchCountries(name)
        .then((name) => renderNameList(name))
        .catch((error) => console.log(error));
}

function renderNameList(names) {
    const markup = names.map((name) => {
        return `<p><b>Name</b>: ${name.name}</p>
        <p><b>Name</b>: ${name.capital}</p>
        <p><b>Name</b>: ${name.population}</p>
        <p><b>Name</b>: ${name.flags}</p>
        <p><b>Name</b>: ${name.languages}</p>`
    })
        .join("");
    refs.countryInfo.innerHTML = markup;
}