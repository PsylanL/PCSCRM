var data = '';

async function order(){
    const getOrder = "http://localhost:8080/api/extract/list";
    let request = await fetch(getOrder);
    let response = await request.json();
    this.data = response;
    console.log(this.data);
    list(this.data)
}

window.onload = order();

async function list(elem) {

    let clientsTable = document.getElementById('orders');
    let tableBody = document.getElementById('tbody');

    if(elem != this.data){
        tableBody.innerHTML = "";
        //console.log('hola')
    }

    for(element of elem) {
        let row = document.createElement('tr');
        let td = document.createElement('td');

        td.innerHTML = '<div class="icon-list"> <i class="icon-check" id="icon-order"></i> <div>';
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.id;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.idServiceClient;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.idSupplier;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.orderDate;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.orderQuantity;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = '<div class="size"><button class="icon-trash btn btn-outline-primary btn-sm" onclick="deleteOrder(' + element.id +')" id="btnDelete"></button>'
            +' '+ '<button class="icon-edit btn btn-outline-primary btn-sm" id="btnEdit" onclick="listEdit('+ element.id +');" data-bs-toggle="modal" data-bs-target="#editModal"></button></div>';
        row.appendChild(td);

        tableBody.appendChild(row);
    }

    clientsTable.appendChild(tableBody);

    elem = '';

}

/*BEGINNING SEARCH FUNCTION*/
function searchOrder(){

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
            notification("error","CLIENT NOT FOUND", "Please verify");
        }
        
        
        //console.log(filtered);
        //console.log('a',array);

}

/*FIN SEARCH */


/*EDIT */
var editOrder = '';

 function listEdit(elem){
    let array = []

    for(let data of this.data){
        if(data.id == elem){
            array = data
        }
    }

    this.editOrder = array;

    $("#id-modal").val(array.id);
    $("#id-service-client-modal").val(array.idServiceClient);
    $("#id-supplier-modal").val(array.idSupplier);
    $("#order-date-modal").val(array.orderDate);
    $("#order-quantity-modal").val(array.orderQuantity);



}

async function edit(){
    let user = editOrder;
    user.orderDate = document.getElementById('order-date-modal').value;
    user.orderQuantity = document.getElementById('order-quantity-modal').value;
    console.log(user);

    try {
        const request = await fetch('http://localhost:8080/api/client/edit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
        notification("success", "CLIENT EDITED", "Edited correctly");
        setTimeout(function(){ window.location.href = 'clients.html';}, 1000);
    } catch (error) {
        notification("error", "UNEDITED CLIENT", "Not edited correctly");
    }

    
    
}


/*FIN EDIT */

/*NOTIFICATIONS */

function notification(type,title,msg){

    toastr[type](msg, title);
}

/*FIN NOTIFICATIONS */
