async function login(){
    let user = {};

    user.mail = document.getElementById('txtMail').value;

    user.password = document.getElementById('txtPassword').value;
    
    console.log(user);

    const request = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
    });

    const response = await request.text();

    console.log(response);

    if (response == 'fail'){
        alert('Usuario o contrasena no correctos. Verifique las credenciales');
    } else {
        console.log('si entro');
        localStorage.token = response;
        localStorage.email = user.mail;
        window.location.replace('home.html');
    }
}