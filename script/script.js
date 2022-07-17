let password = document.getElementById('password');
let login = document.getElementById('login');
let enter = document.getElementById('enter')
let btn = document.getElementById('btn')

function greet() {
    if (login.value == 'admin' && password.value == 1234) {
        window.location.href = 'enterPage.html'
    }
    else {
        alert('Wrong Password')
    }
}

btn.addEventListener('click', greet)