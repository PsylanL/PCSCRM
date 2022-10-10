let mail = localStorage.email;
let user = {} ;

window.onload = getIdByEmail(); 

function cerrarSesion() {
    localStorage.token = null;
    localStorage.email = null;
    localStorage.id = null;
    window.location.replace('index.html');
}

//Se almacena el usuario logueado
async function getIdByEmail (){
    const getUsers = "http://localhost:8080/api/user/list";
    let request = await fetch(getUsers);
    let response = await request.json();
    response.forEach(element => {
        if (element.mail == mail){
            localStorage.id = element.id;
        }
    });
    getUser().then((userObj) => {
        try {
            userHTML = document.getElementById('user');
            userHTML.innerHTML = ' <i class="icon-users" ></i>' + ' '+userObj[0].name;
            if (userObj[0].type == 'ClientService'){
                document.getElementById('reportLateral').style.display = 'none';
                document.getElementById('manageLateral').style.display = 'none';
                console.log('soy servicio cliente');
            }
            if (userObj[0].type == 'Admin'){
                document.getElementById('manageLateral').style.display = 'block';
            }
        } catch (error) {
            console.log('user not logged');
            window.location.href = 'index.html';
        }
    });
}


async function getUser(){
    const getUsers = "http://localhost:8080/api/user/search/"+localStorage.id;
    let request = await fetch(getUsers);
    let response = await request.json();
    return response;
}
