async function Register() {
    let users = {};
    users.id = "123";
    users.name = "Nombre";
    users.cellPhone = "phone";
    users.adress = "cra 59";
    users.mail = "algo";
    users.password = "pass";
    users.type = "tipo";

    console.log("Usuarios: " + users);
    const requestPost = await fetch('http://localhost:8080/api/user/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
    });
    alert("revisar base de datos")
}

async function list () {
    const requestGet = await fetch('http://localhost:8080/api/user/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const usersGet = await requestGet.json;
    console.log(usersGet);
    
}

Register();
list();
