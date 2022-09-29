async function Register() {
    let users = {};
    users.id = "123";
    users.name = "Nombre";
    users.cellPhone = "phone";
    users.adress = "cra 59";
    users.mail = "algo";
    users.password = "pass";
    users.type = "Admin";

    //Metodo POST
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
    //Metodo GET
    const getInitialData = "http://localhost:8080/api/user/list";
    let request = await fetch(getInitialData);
    let response = await request.json();
    console.log(response);
}

Register();
list();
