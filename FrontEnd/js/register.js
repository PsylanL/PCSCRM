

var data = '';


async function us(){
    const getUsers = "http://localhost:8080/api/user/list";
    let request = await fetch(getUsers);
    let response = await request.json();
    this.data = response;
    console.log(data);
    list(this.data);
   
}
 

async function list(elem) {
    let UsersTable = document.getElementById('users');
    let tableBody = document.getElementById('tbody');

    if(elem != this.data){
        tableBody.innerHTML = "";
    }

    for(element of elem) {
        let row = document.createElement('tr');
        let td = document.createElement('td');

        td.innerHTML = '<i class="icon-user-circle-o" id="icon-user"></i>';
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.id;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.name;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.cellPhone;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.adress;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.mail;
        row.appendChild(td);
       
        td = document.createElement('td');
        td.innerText = element.type;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = '<div class="size"><button class="icon-trash btn btn-outline-primary btn-sm" onclick="deleteUser(' + element.id +')" id="btnDelete"></button>'
            +' '+ '<button class="icon-edit btn btn-outline-primary btn-sm" id="btnEdit"></button></div>';
        row.appendChild(td);

        tableBody.appendChild(row);
    }

    UsersTable.appendChild(tableBody);

    elem = '';

}

const openModal = document.getElementById('btn-agg-user');
const  modal1 = document.querySelector('.modal1');
const closeModal = document.querySelector('.modal_close');
openModal.addEventListener('click', (e)=>{ 
    e.preventDefault();/*Evita que se ponga un # en el url cada que se abre el modal */
    modal1.classList.add('modal1--show')
})

closeModal.addEventListener('click', (e)=>{ 
    e.preventDefault();/*Evita que se ponga un # en el url cada que se abre el modal */
    modal1.classList.remove('modal1--show')
})




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
        window.location.replace('manage.html');
    } else {
        alert('Las contraseñas no coinciden, por favor retifique');
    }

}
window.onload = us();




