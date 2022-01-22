const btnNode = document.querySelector('.btn-value');
const resultNode = document.querySelector('.j-result');

function useRequest (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status = 200) {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    } else {
      console.log('Статус ответа: ', xhr.status);
    }
  };

  xhr.onerror = function () {
    console.log('Ошибка! Статус сервера: ', xhr.status);
  };

  xhr.send();
};

function displayResult(apiData) {
  let cards = '';
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
      </div>
    `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
  const valueFirst = document.querySelector('.first-input').value;
  const valueSecond = document.querySelector('.second-input').value;

  if(valueFirst >= 1 && valueFirst <= 10){
    if(valueSecond >=1 && valueSecond <= 10){

      useRequest(`https://picsum.photos/v2/list?page=${valueFirst}&limit=${valueSecond}`, displayResult);
      

    } else {alert('Лимит вне диапазона от 1 до 10');}
    } else {alert('Номер страницы вне диапазона от 1 до 10');}

});

