const name = document.getElementById('name')
const password = document.getElementById('password')
const olho = document.getElementById('eye')

olho.addEventListener('click', function () {
    olho.classList.toggle('fa-eye')
    olho.classList.toggle('fa-eye-slash')

    password.type =
        password.type === 'password' ? 'text' : 'password'
})

