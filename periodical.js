class CreatePeriodical {
    constructor(params, lastCard) {
        this.params = params
        this.lastCard = lastCard

        this.params.pdfPath = this.createPDFPath()
        this.params.imgPath = this.createImgPath()

        const { altImg, pdfName } = this.createDescription()
        this.params.altImg = altImg
        this.params.pdfName = pdfName

        document.querySelector('.cards').appendChild(this.createHTMLElement())

        if (this.lastCard) this.updateUI()
    }

    updateUI() {
        const month = document.querySelector('#mese')
        month.textContent = cards[cards.length - 1].month

        const downloadBtn = document.querySelector('.btn-active')
        downloadBtn.href = this.params.pdfPath
        downloadBtn.download = this.params.pdfName
    }

    createPDFPath() {
        return `./pdf/${this.params.year}/${this.params.month}.pdf`
    }

    createImgPath() {
        return `./images/preview/${this.params.year}/${this.params.month}.png`
    }

    createDescription() {
        return { 
            altImg: `Copertina del giornalino di ${this.params.month}`,
            pdfName: `Giornalino di ${this.params.month}`
        }
    }

    createHTMLElement() {
        const card = document.createElement('div') 
        card.classList.add('card')
        card.setAttribute('data-tilt', '')
        card.setAttribute('data-tilt-scale', 1.1)

        const a = document.createElement('a')
        a.href = this.params.pdfPath
        a.download = this.params.pdfName

        const img = document.createElement('img') 
        img.classList.add('preview')
        img.src = this.params.imgPath
        img.alt = this.params.altImg

        const cardContent = document.createElement('div') 
        cardContent.classList.add('card-content') 
        
        const spanTitle = ['Titolo: ', 'Edizione: ', 'Numero di pagine: ']
        const infos = [this.params.title, this.params.editionNumber, this.params.pageNumber]
        
        for (let i = 0; i < 3; i++) {
            const p = document.createElement('p')
            p.classList.add('info')
            p.textContent = infos[i]
            
            const span = document.createElement('span')
            span.classList.add('bold')
            span.textContent = spanTitle[i]
            p.prepend(span)
            
            cardContent.appendChild(p)
        }

        a.append(img, cardContent)
        
        card.appendChild(a)

        return card
    }
}

const cards = [{
    title: 'Si vis pacem, para pacem',
    editionNumber: 1,
    pageNumber: 40, 
    month: 'Aprile',
    year: 2022
}, {
    title: 'Il latte dei sogni',
    editionNumber: 2,
    pageNumber: 40, 
    month: 'Novembre',
    year: 2022
}, {
    title: 'Racconti dalle ombre',
    editionNumber: 3,
    pageNumber: 32, 
    month: 'Marzo',
    year: 2023
}, {
    title: 'Blast from the past',
    editionNumber: 4,
    pageNumber: 32, 
    month: 'Giugno',
    year: 2023
}]

cards.forEach((card, index) => {
    if (index === cards.length - 1) {
        new CreatePeriodical(card, true)

        return 
    }

    new CreatePeriodical(card, false)
})
