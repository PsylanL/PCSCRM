async function register(){
    let user = {};

    user.id = document.getElementById('txtId').value;

    user.name = document.getElementById('txtName').value;

    user.cellPhone = document.getElementById('txtCellPhone').value;
    
    user.adress = document.getElementById('txtAdress').value;

    user.mail = document.getElementById('txtMail').value;

    user.password = document.getElementById('txtPassword').value;

    user.type = document.getElementById('txtType').value;

    console.log(user);

    if(user.password == document.getElementById('txtRepeat').value){
        const request = await fetch('http://localhost:8080/api/user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        window.location.replace('index.html');
    } else {
        alert('Las contraseñas no coinciden, por favor retifique');
    }

}