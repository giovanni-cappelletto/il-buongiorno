const displayMonth = document.querySelector('#mese')

const today = new Date().toLocaleString('it-IT', { month: 'long' })

displayMonth.textContent = today
