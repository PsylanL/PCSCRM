





var data = '';

async function product(){
    const getProduct = "http://localhost:8080/api/product/list";
    let request = await fetch(getProduct);
    let response = await request.json();
    this.data = response;
    console.log(data);
    list(this.data);
}


window.onload = product(); 

async function list(elem) {

    let listHTML = '';


    for (let element of elem) {
           let productHTML = "<div class='product'>\n\
                            <img id='imgP' src="+element.urlImg+"> \n\
                            <h5><b>"+element.name+"</b></h2>\n\
                            <h6><p><b>ID:</b>"+element.id+"</h4>\n\
                            <p><b>UNITS:</b>"+ element.idInventory +"</p>\n\
                            <button class='btn btn-danger' onclick=deleteProduct('" + element.id + "')>\n\
                            Delete\n\
                            </button>\n\
                            <button class='btn btn-primary' onclick=listEdit('" + element.id + "') data-bs-toggle='modal' data-bs-target='#editModal'>\n\
                            Edit\n\
                            </button>\n\
                          </div>"
        listHTML += productHTML;
        document.querySelector('.products').innerHTML = listHTML;

    }

    elem='';

}


const openModal = document.getElementById('btn-agg-product');
const  modal1 = document.querySelector('.modal1');

//const  modal2 = document.querySelector('.modal2');
const closeModal = document.querySelector('.modal_close');
openModal.addEventListener('click', (e)=>{ 
    e.preventDefault();/*Evita que se ponga un # en el url cada que se abre el modal */
    modal1.classList.add('modal1--show')
})


closeModal.addEventListener('click', (e)=>{ 
    e.preventDefault();/*Evita que se ponga un # en el url cada que se abre el modal */
    modal1.classList.remove('modal1--show')
})

/*BEGINNING REGISTER FUNCTION*/
const expresiones = {
    id: /^\d{2,16}$/, // 2 a 16 numeros.
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    idInventory: /^\d{1,16}$/ // 2 a 16 numeros.

};
/*FIn expresiones Regulares*/
/*COMIENZO FUNCION DE REGISTRO*/

async function sendRegister(user){
    const request = await fetch('http://localhost:8080/api/product/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
        notification("success", "REGISTERED PRODUCT ", "Successfully Registered");
        setTimeout(function(){ window.location.href = 'products.html';}, 1000);
}

async function registerProduct(){
     let user = {};
    user.id = document.getElementById('txtId').value;
    user.name = document.getElementById('txtName').value;
    user.idInventory = document.getElementById('txtIdInventory').value; 
    user.urlImg = document.getElementById('txtUrl').value;
    console.log(user);

    

    let check = 0;      
        for(let i=0; i < this.data.length; i++){ 
        if(user.id === data[i].id){
            check = 1;         
            }
        }
        switch (check){
            case 0:{
                if(user.id != '' && user.name != '' && user.idInventory  != ''
                && user.urlImg != ''){
                     if(expresiones.id.test(user.id)){

                        if(expresiones.nombre.test(user.name)){
                
                            if(expresiones.idInventory.test(user.idInventory)){

                                sendRegister(user);

                            }else{
                                notification("error", "Enter a valid Id", " Enter only numbers, with range (2-16 digits)")
                            }                    
                        }else{
                            notification("error", "Enter a valid Name", " Name from 4 to 40 letter name")
                        }
                    }else{
                        notification("error", "Enter a valid Id", " Enter only numbers, with range (2-16 digits)")
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
    
/*FIN FUNCION DE REGISTRO*/

/*NOTIFICATIONS */

function notification(type,title,msg){

    toastr[type](msg, title);
}

/*FIN NOTIFICATIONS */

async function deleteProduct(id){
    if(confirm("alerta, va a eliminar el producto con id: "+id)){
        const request = await fetch('http://localhost:8080/api/product/delete/'+id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            let response = await request.text();
        notification("success", "Product Deleted", "Product Id: "+id+ " Deleted");
        setTimeout(function(){ window.location.href = 'products.html';}, 1000);
    }
}

/*BEGINNING SEARCH FUNCTION*/
function searchProduct(){

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
            notification("error","PRODUCT NOT FOUND", "Please verify Id");
        }
        

}

/*FIN SEARCH */

/*EDIT */
var editProduct = '';

 function listEdit(elem){
    let array = []

    for(let data of this.data){
        if(data.id == elem){
            array = data
        }
    }

    this.editProduct = array;

    $("#id-modal").val(array.id);
    $("#name-modal").val(array.name);
    $("#idInventory-modal").val(array.idInventory);
    $("#url-modal").val(array.urlImg);

  }

async function edit(){
    let user = editProduct;
    user.name = document.getElementById('name-modal').value;
    user.idInventory = document.getElementById('idInventory-modal').value;


    try {
        const request = await fetch('http://localhost:8080/api/product/edit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
        notification("success", "PRODUCT EDITED", "Edited correctly");
        setTimeout(function(){ window.location.href = 'products.html';}, 1000);
    } catch (error) {
        notification("error", "UNEDITED PRODUCT", "Not edited correctly");
    }

    
    
}


/*FIN EDIT */


window.onload = getIdByEmail(); 

//Se almacena el usuario logueado
async function getIdByEmail (){
    let email = localStorage.email;
    const getUsers = "http://localhost:8080/api/user/list";
    let request = await fetch(getUsers);
    let response = await request.json();
    response.forEach(element => {
        if (element.mail == email){
            localStorage.id = element.id;
        }
    });
    getUser().then((userObj) => {
        try {
            if (userObj[0].type != 'Manager'){
                document.getElementById('btn-agg-product').style.display = 'none';
            }
        } catch (error) {}
    });
}


async function getUser(){
    const getUsers = "http://localhost:8080/api/user/search/"+localStorage.id;
    let request = await fetch(getUsers);
    let response = await request.json();
    return response;
}
