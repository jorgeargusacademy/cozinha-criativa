// quando clicar em assinar, enviar o form
const btnAssinarNewsletter = document.getElementById('btnAssinarNewsletter')
        
// quando clciar em cancelar, fechar o modal (dialog)
const btnFecharNewsletter = document.getElementById('btnFecharNewsletter')

// selecionar o dialog
const newsletterDialog = document.getElementById('newsletterDialog')

btnAssinarNewsletter.addEventListener('click', () => {
    // enviar o form
    const formAssinarNewsletter = document.getElementById('formAssinarNewsletter')
    formAssinarNewsletter.submit()
})

btnFecharNewsletter.addEventListener('click', () => {
    // fechar o dialog
    newsletterDialog.close()
})

const showNewsletter = () => {
    // abrir o dialog
    setTimeout(() => {
        newsletterDialog.showModal()
    }, 3000)
}

// abrir o modal (dialog) automaticamente
window.onload = showNewsletter()