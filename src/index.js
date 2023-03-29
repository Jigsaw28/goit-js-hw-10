import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const { inputEl, countryList, countryInfo } = refs;

refs.inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.preventDefault();
  clearMurkup();
  const searchCountryValue = inputEl.value.trim();
  if (!searchCountryValue) {
    return;
  }
  fetchCountries(searchCountryValue)
    .then((response) => renderCountry(response))
    .catch((error) => console.log(error));
}

function renderCountryList(countries) {
  return countries
    .map(({ name, flags }) => {
      return `<li class = "country-list-item">
        <img class = "country__flag" src = "${flags.svg}" alt = "${name.official}" width ="70px">
        <p class = "country__name">${name.official}</p></li>`;
    })
    .join('');
}

function renderCountryInfo(countries) {
  return countries
    .map(({ capital, population, languages }) => {
      return `<p class = "country__capital"><span class = "country-bold">Capital:</span> ${capital}</p>
        <p class = "country__population"><span class = "country-bold">Population:</span> ${population}</p>
        <p class = "country__language"><span class = "country-bold">Languages:</span> ${Object.values(
          languages
        ).join(", ")}`;
    })
    .join('');
}

function renderCountry(countries) {
  if (countries.length === 1) {
    countryList.insertAdjacentHTML('beforeend', renderCountryList(countries));
    countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries));
  } else if (countries.length >= 2 && countries.length <= 10) {
    countryList.insertAdjacentHTML('beforeend', renderCountryList(countries));
  } else if (countries.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if(!countries.length){
      Notiflix.Notify.failure("Oops, there is no country with that name");
  }
}

function clearMurkup() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}
