

async function client() {
    const getClients = "http://localhost:8080/api/client/list";
    let request = await fetch(getClients);
    let response = await request.json();

    console.log(response);

    let clientsTable = document.getElementById('clients');
    let tableBody = document.getElementById('tbody');

    response.forEach(element => {
        let row = document.createElement('tr');
        let td = document.createElement('td');

        td.innerHTML = '<i class="icon-user-circle-o" id="icon-user"></i>';
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.id;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.adress;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.cellPhone;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.mail;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = element.name;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = '<div class="size"><button class="icon-trash btn btn-outline-primary btn-sm" onclick="deleteClient(' + element.id +')" id="btnDelete"></button>'
            +' '+ '<button class="icon-edit btn btn-outline-primary btn-sm" id="btnEdit"></button></div>';
        row.appendChild(td);

        tableBody.appendChild(row);
    });

    clientsTable.appendChild(tableBody);


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
window.onload = client; 