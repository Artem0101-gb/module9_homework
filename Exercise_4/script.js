const resultNode = document.querySelector('.j-result');

const btnNode = document.querySelector('.btn-value');

btnNode.addEventListener('click', () => {
  const valueFirst = document.querySelector('.limit-first').value;
  const valueSecond = document.querySelector('.limit-second').value;
  if (valueFirst >= 100 && valueSecond <= 300) {
    fetch(`https://picsum.photos/${valueFirst}/${valueSecond}`)
    .then((response) => {
      console.log('response', response);
      const result = response.json();
      return result;
    })
    .then((data) => {
      displayResult;
    })
    .catch(() => {alert('Одно из чисел вне диапазона от 100 до 300')})
  }
  
function displayResult(apiData) {
  let cards = '';

  apiData.forEach(item => {
      const cardBlock = `
      <div class="card">
      <img src="${item.download_url}" class="card-image"/>
    </div>
    `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}
  
  });