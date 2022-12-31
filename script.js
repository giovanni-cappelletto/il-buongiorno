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

// Animation 
const canvas = document.querySelector('#canvas')

const animation = new rive.Rive({
    src: './images/animation.riv',
    canvas, 
    autoplay: false,
    animations: ['Initialize', 'Loop Animation'],
    fit: rive.Fit.cover,
})

const animationObserver = new IntersectionObserver(entry => {
    if (entry[0].isIntersecting) animation.play()
})
animationObserver.observe(canvas)
