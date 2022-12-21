// Interactive Move Between Sections
const header = document.querySelector('header')
const main = document.querySelector('main')
const section = document.querySelector('section')
const links = document.querySelectorAll('header .nav-links li a')

const sections = [main, section]

const removeLastClass = element => {
    const classList = element.classList
    classList.remove(classList[0])
}

const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            header.classList.add(entry.target.id)

            if (header.classList.length > 1) removeLastClass(header)
        }
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (header.classList[0] !== link.classList[0]) {
                removeLastClass(header)
                header.classList.add(link.classList[0])
            }
        })
    })
}, { threshold: 0.01})

sections.forEach(section => observer.observe(section))

// Popup
const dialog = document.querySelector('dialog') 
const closeIcon = document.querySelector('.close-icon') 

closeIcon.addEventListener('click', () => {
    dialog.classList.add('closed')
})

// Animation 
// new rive.Rive({
//     src: './images/main-image.riv',
//     canvas: document.querySelector('#canvas'),
//     autoplay: true
// })
