const openModal = document.getElementById('btn-agg-client');
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