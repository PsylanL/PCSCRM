async function lead() {
    const getLeads = "http://localhost:8080/api/lead/list";
    let request = await fetch(getLeads);
    let response = await request.json();

    console.log(response);

    let leadsTable = document.getElementById('leads');
    let tableBody = document.getElementById('tbody');

    response.forEach(element => {
        let row = document.createElement('tr');
        let td = document.createElement('td');

        td.innerHTML = '<i class="icon-user-plus" id="icon-user"></i>';
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
        td.innerHTML = '<div class="size"><button class="icon-trash btn btn-outline-primary btn-sm" id="btnDelete"></button>'
            +' '+ '<button class="icon-edit btn btn-outline-primary btn-sm" id="btnEdit"></button></div>';
        row.appendChild(td);

        tableBody.appendChild(row);
    });

    leadsTable.appendChild(tableBody);

}

window.onload = lead;

