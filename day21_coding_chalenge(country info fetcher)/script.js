const searchInput = document.getElementById('search');
const resultDiv = document.getElementById('result');

searchInput.addEventListener('input', async function () {
  const query = searchInput.value.trim();
  if (query.length < 2) {
    resultDiv.innerHTML = '';
    return;
  }

  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
    const data = await res.json();

    if (data.status === 404) {
      resultDiv.innerHTML = '<p>Country not found.</p>';
      return;
    }

    const country = data[0];
    const flag = country.flags.png;
    const name = country.name.common;
    const capital = country.capital?.[0] || 'N/A';
    const region = country.region;
    const population = country.population.toLocaleString();
    const currencies = country.currencies
      ? Object.values(country.currencies).map(c => c.name).join(', ')
      : 'N/A';
    const languages = country.languages
      ? Object.values(country.languages).join(', ')
      : 'N/A';

    resultDiv.innerHTML = `
      <h2>${name}</h2>
      <img src="${flag}" alt="Flag of ${name}" class="flag"/>
      <p><strong>Capital:</strong> ${capital}</p>
      <p><strong>Region:</strong> ${region}</p>
      <p><strong>Population:</strong> ${population}</p>
      <p><strong>Currency:</strong> ${currencies}</p>
      <p><strong>Language(s):</strong> ${languages}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = '<p>Error fetching country data.</p>';
  }
});
