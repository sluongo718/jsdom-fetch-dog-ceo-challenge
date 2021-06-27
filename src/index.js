document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(json => renderImgs(json));
  
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => renderBreads(json));
  });
  
  const renderImgs = (json) => {
    const dogImages = document.querySelector('#dog-image-container');
  
    json.message.forEach(imgUrl => {
      const img = document.createElement('img');
      img.width = '200';
      img.height = '200';
      img.src = imgUrl;
      dogImages.appendChild(img);
    });
  }
  
  const renderBreads = (json) => {
    const dogBreeds = document.querySelector('#dog-breeds');
    const selectBreed = document.querySelector('#breed-dropdown')
    const breeds = json.message
  
    for(const key in breeds) {
      const li = document.createElement('li');
      li.className = 'breed-name'
      li.innerText = key;
      dogBreeds.appendChild(li);
  
      li.addEventListener('click', () => {
        li.style.color = 'blue';
      });
    }
  
    selectBreed.addEventListener('click', () => {
      const allBreeds = document.querySelectorAll('.breed-name');
      
      allBreeds.forEach(breed => {
        if (selectBreed.value != breed.innerText.split('')[0]) {
          breed.style.display = 'none';
        } else {
          breed.style.display = '';
        }
      });
    });
  }