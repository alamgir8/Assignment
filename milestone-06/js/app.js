const imagesArea = document.querySelector('.images');
const gallery = document.querySelector('.gallery');
const galleryHeader = document.querySelector('.gallery-header');
const searchBtn = document.getElementById('search-btn');
const sliderBtn = document.getElementById('create-slider');
const sliderContainer = document.getElementById('sliders');
// selected image 
let sliders = [];


// If this key doesn't work
// Find the name in the url and go to their website
// to create your own api key
const KEY = '15674931-a9d714b6e9d654524df198e00&q';

// show images 
const showImages = (images) => {
  imagesArea.style.display = 'block';
  gallery.innerHTML = '';
  // show gallery title
  galleryHeader.style.display = 'flex';
  images.forEach(image => {
    let div = document.createElement('div');
    div.className = 'col-lg-3 col-md-5 col-xs-5 my-3 img-col';
    div.innerHTML = `<img class="img-fluid rounded shadow-sm" onclick=selectItem(event,"${image.webformatURL}") src="${image.webformatURL}" alt="${image.tags}"><div class = 'item-info'>
    <span><i class="far fa-eye"></i> ${image.views}</span>  <span><i class="far fa-heart"></i> ${image.favorites}</span> <span><i class="fas fa-arrow-down"></i> ${image.downloads}</span></div>`;
    gallery.appendChild(div)
    displayLoadingSpinner(false);
  
  })

}

const getImages = (query) => {
  displayLoadingSpinner(true);
  fetch(`https://pixabay.com/api/?key=${KEY}=${query}&image_type=photo&pretty=true`)
    .then(response => response.json())
    .then(data => {
      console.log(data.hits[0]);
      showImages(data.hits)
    })
    .catch(err => console.log(err))
}



let slideIndex = 0;

const selectItem = (event, img) => {
  let element = event.target;
  element.classList.toggle('added');
 
  let item = sliders.indexOf(img);
  if (item === -1) {
    sliders.push(img);
  }

   else {
    sliders.splice(item, 1);
   
  }
};
var timer
const createSlider = () => {
  // check slider image length
  if (sliders.length < 2) {
    alert('Select at least 2 image.')
    return;
  }
  // crate slider previous next area
  sliderContainer.innerHTML = '';
  const prevNext = document.createElement('div');
  prevNext.className = "prev-next d-flex w-100 justify-content-between align-items-center ";
  prevNext.innerHTML = ` 
  <span class="prev" onclick="changeItem(-1)"><i class="fas fa-chevron-left"></i></span>
  <span class="next" onclick="changeItem(1)"><i class="fas fa-chevron-right"></i></span>
  `;

  sliderContainer.appendChild(prevNext)
  document.querySelector('.main').style.display = 'block';
  // hide image area
  imagesArea.style.display = 'none';
    let duration = document.getElementById('duration').value  || 2000;
    //to make slider duration minimum two second if user input negative or less then two second value then it will count two second, this is for better showing or experience
    if (duration < 2000) {
      duration = 2000;
    }

  sliders.forEach(slide => {
    let item = document.createElement('div')
    item.className = "slider-item ";
    item.innerHTML = `<img class="w-100"
    src="${slide}"
    alt="">`;
    sliderContainer.appendChild(item)
  })
  changeSlide(0)
  timer = setInterval(function () {
    slideIndex++;
    changeSlide(slideIndex);
  }, duration);
}

// change slider index 
const changeItem = index => {
  changeSlide(slideIndex += index);
}

// change slide item
const changeSlide = (index) => {

  const items = document.querySelectorAll('.slider-item');
  if (index < 0) {
    slideIndex = items.length - 1
    index = slideIndex;
  };

  if (index >= items.length) {
    index = 0;
    slideIndex = 0;
  }

  items.forEach(item => {
    item.style.display = "none"
  })

  items[index].style.display = "block"
}

searchBtn.addEventListener('click', function () {
  document.querySelector('.main').style.display = 'none';
  clearInterval(timer);
  const search = document.getElementById('search');
  getImages(search.value)
  sliders.length = 0;
  
})

sliderBtn.addEventListener('click', function () {
  createSlider()
  
})

//function for keyboard inter active option
let input = document.getElementById("search");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("search-btn").click();
  }
});


//function for display loading spinner
const displayLoadingSpinner = (show) =>{
  const loadingSpinner = document.getElementById('spinner');
  if (show) {
    loadingSpinner.classList.remove('d-lg-none' && 'd-md-none' && 'd-sm-none' && 'd-none');
  }
  else{
    loadingSpinner.classList.add('d-lg-none' && 'd-md-none'&& 'd-sm-none' && 'd-none');
  }
}