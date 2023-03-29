export function fetchCountries(name) {
  const URL = `https://restcountries.com/v3.1/name/${name}?fields=flags,name,capital,population,languages`;
  return fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error(error);
    });
}