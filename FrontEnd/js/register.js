

var data = '';


async function us(){
    const getUsers = "http://localhost:8080/api/user/list";
    let request = await fetch(getUsers);
    let response = await request.json();
    this.data = response;
    console.log(data);
    list(this.data);
   
}
 
window.onload = us();

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
            +' '+ '<button class="icon-edit btn btn-outline-primary btn-sm" id="btnEdit" onclick="listEditUser('+ element.id +');" data-bs-toggle="modal" data-bs-target="#editModal"></button></div>';
        row.appendChild(td);

        tableBody.appendChild(row);
    }

    UsersTable.appendChild(tableBody);

    elem = '';

}

const openModal = document.getElementById('btn-agg-user');
const  modal1 = document.querySelector('.modal1');
const  modal11 = document.querySelector('.modal_container');
const closeModal = document.querySelector('.modal_close');
openModal.addEventListener('click', (e)=>{ 
    e.preventDefault();/*Evita que se ponga un # en el url cada que se abre el modal */
    modal1.classList.add('modal1--show')
    modal11.classList.add('modal11--show')
})

closeModal.addEventListener('click', (e)=>{ 
    e.preventDefault();/*Evita que se ponga un # en el url cada que se abre el modal */
    modal1.classList.remove('modal1--show')
    modal11.classList.remove('modal11--show')
})

/*Expresiones regulares*/
const expresiones = {
	password: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros rango [4,16]
    id: /^\d{7,14}$/, // 7 a 14 numeros.
	nombre: /^[a-zA-Z??-??\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

/*Register*/


async function sendRegister(user){
    const request = await fetch('http://localhost:8080/api/user/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
        notification("success", "REGISTERED CLIENT ", "Successfully Registered");
        setTimeout(function(){ window.location.href = 'manage.html';}, 1000);
}


async function register(){
    let user = {};
    user.id = document.getElementById('txtId').value;
    user.name = document.getElementById('txtName').value;
    user.cellPhone = document.getElementById('txtCellPhone').value;
    user.adress = document.getElementById('txtAdress').value;
    user.mail = document.getElementById('txtMail').value;
    user.password = document.getElementById('txtPassword').value;     
    user.type = document.getElementById('txtType').value;

    let check = 0;      
        for(let i=0; i < this.data.length; i++){ 
        if(user.id === data[i].id){
            check = 1;         
            }
        }
        switch (check){
            case 0:{
                if(user.id != '' && user.name != '' && user.cellPhone  != ''
            && user.adress != '' && user.mail != '' && user.password != '' &&  user.type != ''){

                    if(expresiones.id.test(user.id)){

                        if(expresiones.nombre.test(user.name)){

                             if(expresiones.telefono.test(user.cellPhone)){

                                if(expresiones.correo.test(user.mail)){

                                     if(expresiones.password.test(user.password)){

                                         sendRegister(user);

                                     }else{
                                        notification("error", "Enter a valid Password", "Minimum 4 characters, at least one letter and one number (no special characters")
                                    }
                                }else{
                                   notification("error", "Enter a valid Email", "Please verify ")
                                }
                            }else{
                                notification("error", "Enter a valid CellPhone", " Enter only numbers, with range (7-14 digits)")
                            }
                        }else{
                            notification("error", "Enter a valid Name", " Name from 4 to 40 letter name")
                        }
                    }else{
                        notification("error", "Enter a valid Id", " Enter only numbers, with range (7-14 digits)")
                    }                 
                }else {
                    notification("error", "INCOMPLETE FIELDS", "Please verify")
                }
                break;
            }

            case 1:{
                notification("error", "ID ALREADY EXISTS", "Incomplete Registration");
                break;
            }
        } 
            console.log(user);

            
    }



async function deleteUser(id){
    if(confirm("alerta, va a eliminar al usuario con id: "+id)){
        const request = await fetch('http://localhost:8080/api/user/delete/'+id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            let response = await request.text();
        alert(response);
        location.reload();
    }
}

/*BEGINNING SEARCH FUNCTION*/
function searchUser(){

    let form = document.querySelector('#input-search');
    let filtered = {};
    let array = [];

    console.log(form.value);

        for(let data of this.data ){
            let inf = data.id;
            //console.log(inf);
            if (inf.includes(form.value)) {
                filtered = data;
                array.push(filtered);
            }
        }


        if(array.length != 0){
            list(array);
        } else{
            notification("error","USER NOT FOUND", "Please verify Id");
        }
        
 }

/*FIN SEARCH */

/*NOTIFICATIONS */

function notification(type,title,msg){

    toastr[type](msg, title);
}

/*FIN NOTIFICATIONS */

/*EDIT */
var editUserC = '';

 function listEditUser(elem){
    let array = []

    for(let data of this.data){
        if(data.id == elem){
            array = data
        }
    }
    
    this.editUserC = array;
    $("#id-modal").val(array.id);
    $("#name-modal").val(array.name);
    $("#cel-modal").val(array.cellPhone);
    $("#mail-modal").val(array.mail);
    $("#address-modal").val(array.adress);
    $("#type-modal").val(array.type);
}


async function editUser(){
    
    let user = editUserC;
    user.name = document.getElementById('name-modal').value;
    user.cellPhone = document.getElementById('cel-modal').value;
    user.adress = document.getElementById('address-modal').value;
    user.mail = document.getElementById('mail-modal').value;

    if(expresiones.nombre.test(user.name)){

        if(expresiones.telefono.test(user.cellPhone)){

            try {
                const request = await fetch('http://localhost:8080/api/user/edit', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    });
                notification("success", "USER EDITED", "Edited correctly");
                setTimeout(function(){ window.location.href = 'manage.html';}, 1000);
            } catch (error) {
                notification("error", "UNEDITED USER", "Not edited correctly");
            }
            
       }else{
           notification("error", "Enter a valid CellPhone", " Enter only numbers, with range (7-14 digits)")
       }
   }else{
       notification("error", "Enter a valid Name", " Name from 4 to 40 letter name")
   }

       
}


/*FIN EDIT */


