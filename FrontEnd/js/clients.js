var data = '';

async function client(){
    const getClients = "http://localhost:8080/api/client/list";
    let request = await fetch(getClients);
    let response = await request.json();
    this.data = response;
    console.log(data);
    list(this.data);
}

window.onload = client(); 


async function list(elem) {

    let clientsTable = document.getElementById('clients');
    let tableBody = document.getElementById('tbody');

    if(elem != this.data){
        tableBody.innerHTML = "";
        //console.log('hola')
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
        td.innerText = element.mail;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.adress;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = '<div class="size"><button class="icon-trash btn btn-outline-primary btn-sm" onclick="deleteClient(' + element.id +')" id="btnDelete"></button>'
            +' '+ '<button class="icon-edit btn btn-outline-primary btn-sm" id="btnEdit"></button></div>';
        row.appendChild(td);

        tableBody.appendChild(row);
    }

    clientsTable.appendChild(tableBody);

    elem = '';

}



async function deleteClient(id){
    if(confirm("alerta, va a eliminar al usuario con id: "+id)){
        const request = await fetch('http://localhost:8080/api/client/delete/'+id, {
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


/*Modal*/
const openModal = document.getElementById('btn-agg-client');
const  openModal2 = document.querySelector('.register_button');
const  modal1 = document.querySelector('.modal1');
const  modal2 = document.querySelector('.modal2');

//const  modal2 = document.querySelector('.modal2');
const closeModal = document.querySelector('.modal_close');
const closeModal2 = document.getElementById('modal_close2');
openModal.addEventListener('click', (e)=>{ 
    e.preventDefault();/*Evita que se ponga un # en el url cada que se abre el modal */
    modal1.classList.add('modal1--show')
})

openModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.add('modal2--show')
    modal1.classList.remove('modal1--show')
})

closeModal.addEventListener('click', (e)=>{ 
    e.preventDefault();/*Evita que se ponga un # en el url cada que se abre el modal */
    modal1.classList.remove('modal1--show')
})



/*BEGINNING REGISTER FUNCTION*/

async function register(){
    let user = {};
    user.id = document.getElementById('txtId').value;
    user.name = document.getElementById('txtName').value;
    user.cellPhone = document.getElementById('txtCellPhone').value; 
    user.adress = document.getElementById('txtAdress').value;
    user.mail = document.getElementById('txtMail').value;
    console.log(user);

    const request = await fetch('http://localhost:8080/api/client/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    window.location.replace('clients.html');
}
/*END REGISTER FUNCTION*/

/*BEGINNING SEARCH FUNCTION*/
function search(){

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

            if(array.length != 0){
                list(array);
            } else{
                notification();
            }
        }

        
        
        //console.log(filtered);
        //console.log('a',array);

}

/*FIN SEARCH */


function notification(){
let toastTrigger = document.getElementById('btn-search')
let toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
 
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  
}
}
