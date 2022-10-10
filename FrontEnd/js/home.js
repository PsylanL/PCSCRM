google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Colombia', 1],
      ['Chile', 1],
      ['Mexico', 1],
      ['United States', 1],
      ['Ecuador', 1],
      ['Peru', 1],
      ['Venezuela', 1],
      ['Malaysia', 1]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }