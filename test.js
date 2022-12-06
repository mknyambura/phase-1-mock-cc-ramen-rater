// function renderOneRamen(ramen){
//     let card = document.createElement('li')
//     card.className = 'card'
//     card.innerHTML = `
//         <div class="content">
//             <img class='image'src="${ramen.image}">
//             <h3 class='name'>${ramen.name}</h3>
//             <h3 class='restaurant'>${ramen.restaurant}</h3>
//             <h3 class='comment'>${ramen.comment}</h3>
//         </div>
//         <div>
//             <button class="rating">Like: ${ramen.rating}</button>
//         </div>
//         `

//         document.querySelector()
// }
const createMenuImg = (ramen) => {
    const image = document.createElement('img')
    image.src = ramen.image
    image.id = ramen.name
    image.alt = ramen.id
    image.addEventListener('click', handleDetail)
    menu.append(image)
}

const detail = document.getElementById('ramen-detail')
const ramenName = document.getElementsByClassName('name')
const imageDetails = document.getElementsByClassName('detail-image')
const restaurant = document.getElementsByClassName('restaurant')
const ratingDisplay = document.getElementById('rating-display')
const commentDisplay = document.getElementById('comment-display')

function getAllRamens(){
    fetch('http://localhost:3000/ramens')
        .then(resp => console.log(resp))
}

function initialize(){

}
initialize()