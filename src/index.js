fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(data => {
    ramenCollector(data);
    imageIntialize(ramenContainer);
    ramenDetails();
})



const menu = document.querySelector('div#ramen-menu');
const form = document.querySelector('form#new-ramen');
const details = document.querySelector('div#ramen-detail');

const image = document.querySelector('img.detail-image');
const ramenName = document.querySelector('h2.name');
const restaurant = document.querySelector('h3.restaurant');
const rating = document.querySelector('span#rating-display');
const comment = document.querySelector('p#comment-display');

const ramenContainer = []
const ramenSubmit = []

let submitCounter = 10;

function ramenCollector(param) {
    param.forEach( (ramenObj, i) => {
        ramenContainer.push(param[i]);
    })
    console.log(ramenContainer);
}

function imageIntialize(source) {
    source.forEach((keyValue) => {
        ramenBuilder(keyValue)
    }
)}

function ramenBuilder(source) {
    const ramenImage = document.createElement('img')
    ramenImage.src = source.image;
    ramenImage.alt = source.name;
    if (source.id <= 5) {
        ramenImage.className = 'menu-img';
        ramenImage.id = source.id-1;
    } else {
        ramenImage.id = source.id;
        // console.log(`${source}`)
    }
    menu.append(ramenImage);
}

function ramenDetails(id = 0) {
    let container = ''
    if (id >= 10) {
        container = ramenSubmit;
        id -= 10;
    } else {
        container = ramenContainer;
    }
    image.src = container[id].image;
    ramenName.innerText = container[id].name;
    restaurant.innerText = container[id].restaurant;
    rating.innerText = container[id].rating;
    comment.innerText = container[id].comment;
}

function newRamen() {
    const newName = document.querySelector('input#new-name').value;
    const newRestaurant = document.querySelector('input#new-restaurant').value;
    const newImage = document.querySelector('input#new-image').value;
    const newRating = document.querySelector('input#new-rating').value
    const newComment = document.querySelector('textarea#new-comment').value;

    const newRamen = {};
        newRamen.comment = newComment;
        newRamen.id = submitCounter;
        newRamen.image = newImage;
        newRamen.name = newName;
        newRamen.rating = newRating;
        newRamen.restaurant = newRestaurant;

    return ramenSubmit.push(newRamen);
}

menu.addEventListener('click', e => {
    details(e.target.id);
})

document.addEventListener('submit', e => {
    e.preventDefault();
    newRamen();
    ramenBuilder(ramenSubmit[ramenSubmit.length-1])
    form.reset();
    submitCounter++
})