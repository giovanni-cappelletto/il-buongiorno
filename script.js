// Variables 
// const month = document.querySelector('#month')
// const day = document.querySelector('#day')
// const pageNumber = document.querySelector('#number')
// const args = document.querySelector('#args')
// const periodical = document.querySelector('.periodical')
// const leftArrow = document.querySelector('#left-arrow')
// const rightArrow = document.querySelector('#right-arrow')
// const dots = document.querySelectorAll('.dot')
// let counter = 0, mese

// Database
// const database = [
    // {
    //     "month": "Marzo",
    //     "day": "10 Marzo 2022", 
    //     "pages": "20", 
    //     "arguments": "guerra in Ucraina, interviste, Olimpiadi e molto altro!",
    //    "path": "/pdf/giornalino.pdf"
    // },
    // {
    //     "month": "Aprile",
    //     "day": "10 Aprile 2022", 
    //     "pages": "15", 
    //     "arguments": "Pace nel mondo e altro...!",
    //     "path": "/pdf/giornalino.pdf"
    // },
    // {
    //     "month": "Giugno",
    //     "day": "10 Giugno 2022", 
    //     "pages": "12", 
    //     "arguments": "Fine della guerra e sospensione del giornalino!",
    //    "path": "/pdf/giornalino.pdf"
    // }
// ]

// Display datas
// const start = (n) => {
//     month.textContent = database[n].month
//     day.textContent = database[n].day
//     pageNumber.textContent = database[n].pages
//     args.textContent = database[n].arguments
//     periodical.setAttribute('href', database[n].path) 
// 
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].classList.remove('active')
//     }
// 
//     dots[n].classList.add('active')
// }

// window.addEventListener('load', start(counter))

// leftArrow.addEventListener('click', () => {
//     counter === 0 ? counter = database.length - 1 : counter--
// 
//     start(counter)
// })

// rightArrow.addEventListener('click', () => {
//     counter === database.length - 1 ? counter = 0 : counter++
//     
//     start(counter)
// })

// dots.forEach((dot, numb) => {
//    dot.addEventListener('click', () => {
//        start(numb)
//    })
// })
