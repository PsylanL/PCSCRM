var data = '';

async function lead() {
    const getLeads = "http://localhost:8080/api/lead/list";
    let request = await fetch(getLeads);
    let response = await request.json();
    this.data = response;
    console.log(response);
    list(this.data);
}

window.onload = lead();

async function list(elem){
    let leadsTable = document.getElementById('leads');
    let tableBody = document.getElementById('tbody');

    if(elem != this.data){
        tableBody.innerHTML = "";
        //console.log('hola')
    }

    for (element of elem) {
        let row = document.createElement('tr');
        let td = document.createElement('td');

        td.innerHTML = '<i class="icon-user-plus" id="icon-user"></i>';
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
        td.innerText = element.mail;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.adress;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = '<div class="size"><button class="icon-trash btn btn-outline-primary btn-sm" onclick="deleteLead(' + element.id +')" id="btnDelete"></button>'
            +' '+ '<button class="icon-edit btn btn-outline-primary btn-sm"  id="btnEdit" onclick="listEditLead('+ element.id +');" data-bs-toggle="modal" data-bs-target="#editModal"></button></div>';
        row.appendChild(td);

        tableBody.appendChild(row);
    }

    leadsTable.appendChild(tableBody);
    elem = '';
}


async function deleteLead(id){
    if(confirm("alerta, va a eliminar al cliente potencial con id: "+id)){
        const request = await fetch('http://localhost:8080/api/lead/delete/'+id, {
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


const openModal = document.getElementById('btn-agg-lead');
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

/* REGISTER FUNCTION*/

async function registerLead(){
    let user = {};
    user.id = document.getElementById('txtId').value;
    user.name = document.getElementById('txtName').value;
    user.cellPhone = document.getElementById('txtCellPhone').value; 
    user.adress = document.getElementById('txtAdress').value;
    user.mail = document.getElementById('txtMail').value;

    console.log(user);

    const request = await fetch('http://localhost:8080/api/lead/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    notification("success", "REGISTERED LEAD ", "Successfully Registered");
    setTimeout(function(){ window.location.href = 'lead.html';}, 1000);

}
/*BEGINNING SEARCH FUNCTION*/
function searchLead(){

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
            notification("error","LEAD NOT FOUND", "Please verify Id");
        }
        
        
        //console.log(filtered);
        //console.log('a',array);

}

/*FIN SEARCH */

/*NOTIFICATIONS */

function notification(type,title,msg){

    toastr[type](msg, title);
}

/*FIN NOTIFICATIONS */


/*EDIT */
var editLeadC = '';

 function listEditLead(elem){
    let array = []

    for(let data of this.data){
        if(data.id == elem){
            array = data
        }
    }
    
    this.editLeadC = array;

    $("#id-modal").val(array.id);
    $("#name-modal").val(array.name);
    $("#cel-modal").val(array.cellPhone);
    $("#mail-modal").val(array.mail);
    $("#address-modal").val(array.adress);



}


async function editLead(){
    let userLead = editLeadC;
    userLead.name = document.getElementById('name-modal').value;
    userLead.cellPhone = document.getElementById('cel-modal').value;
    userLead.adress = document.getElementById('address-modal').value;
    userLead.mail = document.getElementById('mail-modal').value;
    
    try {
        const request = await fetch('http://localhost:8080/api/lead/edit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userLead)
            });
        notification("success", "LEAD EDITED", "Edited correctly");
        setTimeout(function(){ window.location.href = 'lead.html';}, 1000);
    } catch (error) {
        notification("error", "UNEDITED LEAD", "Not edited correctly");
    }
    
    
}


/*FIN EDIT */