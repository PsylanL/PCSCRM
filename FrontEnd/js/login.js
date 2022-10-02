async function login(){
    let user = {};

    user.id = document.getElementById('txtMail').value;

    user.name = document.getElementById('txtPassword').value;

    const request = await fetch('http://localhost:8080/api/user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
    });

    const response = await request.json();

    console.log(response);
}