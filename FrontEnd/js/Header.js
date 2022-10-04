let userHTML = document.getElementById('user');

let mail = localStorage.email;

userHTML.innerHTML = ' <i class="icon-users" ></i>' + mail;

function cerrarSesion() {
    localStorage.token = null;
    localStorage.email = null;
    window.location.replace('index.html');
}