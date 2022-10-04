let mail = localStorage.email;
let user = {} ;

function cerrarSesion() {
    localStorage.token = null;
    localStorage.email = null;
    localStorage.id = null;
    window.location.replace('index.html');
}

async function getIdByEmail (){
    const getUsers = "http://localhost:8080/api/user/list";
    let request = await fetch(getUsers);
    let response = await request.json();
    response.forEach(element => {
        if (element.mail == mail){
            localStorage.id = element.id;
        }
    });
    getUser();
}

async function getUser (){
    const getUser = 'http://localhost:8080/api/user/search/'+localStorage.id;
    let request = await fetch(getUser);
    user = await request.json();
    let userHTML = document.getElementById('user');
    userHTML.innerHTML = ' <i class="icon-users" ></i>' + user[0].name;
}
window.onload = getIdByEmail(); 
