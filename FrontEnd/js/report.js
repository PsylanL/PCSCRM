
var data = '';
var data2 = '';
var data3 = '';
var data4 = '';

async function consulta(){
    const getClients = "http://localhost:8080/api/client/consulta";
    const getLead = "http://localhost:8080/api/lead/consulta";
    const getProduct= "http://localhost:8080/api/product/consulta";
    const getUser = "http://localhost:8080/api/user/consulta";
    let request = await fetch(getClients);
    let request2 = await fetch(getLead);
    let request3 = await fetch(getProduct);
    let request4 = await fetch(getUser);
    let response = await request.text();
    let response2 = await request2.text();
    let response3 = await request3.text();
    let response4 = await request4.text();
    this.data = response;
    this.data2 = response2;
    this.data3 = response3;
    this.data4 = response4;
    return data;
}

console.log(consulta());

window.onload = consulta().then((data)=>{
    document.getElementById('campos').innerHTML += '<p><b>Number of Clients: </b> ' + this.data  + ' <br><b> Numbers of Leads  : </b>'+ this.data2 + ' <br><b> Numbers of Products  : </b>'+ this.data3 +  ' <br><b> Numbers of Products  : </b>'+ this.data4 +  '</p>';

}); 

/*Grafica*/

let grafica = document.getElementById('grafica');
var chart = new Chart(grafica,{
    type:"bar",
    data:{
        labels:["Clients","Leads","Products","Users"],
        datasets:[
            {
                label: "Grafica Cantidad",
                backgroundColor:"rgb(0,0,0)",
                data:[10,15,20,5]
            }
        ]
    }
})




