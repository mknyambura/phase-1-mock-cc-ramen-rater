const menu = document.getElementById('ramen-menu')
const getAllRamens = () => {
    fetch('http://localhost:3000/ramens/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(ramen => {
            createMenuImg(ramen)
        })
    })
}

const createMenuImg = (ramen) => {
    const image = document.createElement('img')
    image.src = ramen.image
    image.id = ramen.name
    image.alt = ramen.id
    image.addEventListener('click', handleDetail)
    menu.append(image)
}

const detail = document.getElementById('ramen-detail')
const ramenName = detail.getElementsByClassName('name')
const imageDetails = detail.getElementsByClassName('detail-image')
const restaurant = detail.getElementsByClassName('restaurant')
const ratingDisplay = document.getElementById('rating-display')
const commentDisplay = document.getElementById('comment-display')

const updateDetail = (ramen) => {
    ramenName.textContent = ramen.name;
    restaurant.innerText = ramen.restaurant;
    detail.src = ramen.image;
    detail.alt = ramen.image;
    ratingDisplay.innerText = ramen.rating;
    commentDisplay.innerText = ramen.comment;
};
const handleDetail = (event) => {
    fetchRamen(event.target.id)
}
const fetchRamen = (id) => {
    fetch('http://localhost:3000/ramens' + id)
    .then(response => response.json)
    .then((ramen) => {
        console.log(ramen)
        handleDetail(ramen)
    })
    .catch(err => {
        console.log(err)
    });
};

const form = document.getElementById('new-ramen')
const Submit = event => {
    event.preventDefault()
    const ramenObject = {
        name: form[0].value,
        restaurant: form[1].value,
        image: form[3].value,
        comment: form[4].value,
    }
    createMenuImg(ramenObject)
    form.reset()
}

const initialize =() => {
    getAllRamens();
    form.addEventListener('submit', Submit)
};
initialize()