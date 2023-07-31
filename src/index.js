
const button = document.getElementById('button')
const inputs = document.querySelectorAll('.forma')
const msgErro = document.querySelectorAll('.requeridos')

button.addEventListener('click', (e) => {
    e.preventDefault()

    inputs.forEach((input, indice) => {
        if (input.value === '') {
            input.classList.add("bordas-vermelhas-f")
            msgErro[indice].classList.add('mostrar')

        } else {
            input.classList.remove('bordas-vermelhas-f')
            input.classList.add('bordas-verde-v')
            msgErro[indice].classList.remove('mostrar')
        }
    })
})