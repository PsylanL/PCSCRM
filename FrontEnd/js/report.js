
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

$(document).ready(function () {
    
    $('#btn-report').click(function(){
        
      $('#columnchart_values').printThis();

});

window.onload = consulta().then((data)=>{
    
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Number of Clients", parseInt(this.data), "#b87333"],
    ["Number of Leads", parseInt(this.data2), "silver"],
    ["Number of Products", parseInt(this.data3), "gold"],
    ["Number of Users", parseInt(this.data4), "color: #e5e4e2"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation" },
                2]);

  var options = {
    title: "Report",
    width: 800,
    height: 450,
    bar: {groupWidth: "95%"},
    legend: { position: "absolute" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}
}); 

});



