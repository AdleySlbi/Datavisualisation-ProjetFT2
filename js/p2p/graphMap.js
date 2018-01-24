google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country','total',{role: 'tooltip', p:{html:true}}],
    ['United States',73652, '<b> Total de parties lancées : </b>	3156	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	732	<br>	<b> Parties non terminées : </b>	2424'],
    ['France', 1068, '<b> Total de parties lancées : </b>	1068	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	266	<br>	<b> Parties non terminées : </b>	802'],
    ['United Kingdom', 656, '<b> Total de parties lancées : </b>	656	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	221	<br>	<b> Parties non terminées : </b>	435'],
    ['Canada', 617, '<b> Total de parties lancées : </b>	617	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	201	<br>	<b> Parties non terminées : </b>	416'],
    ['South Korea', 471, '<b> Total de parties lancées : </b>	471	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	24	<br>	<b> Parties non terminées : </b>	447'],
    ['Germany', 297, '<b> Total de parties lancées : </b>	297	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	58	<br>	<b> Parties non terminées : </b>	239'],
    ['Australia', 213, '<b> Total de parties lancées : </b>	213	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	57	<br>	<b> Parties non terminées : </b>	156'],
    ['China', 192, '<b> Total de parties lancées : </b>	192	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	17	<br>	<b> Parties non terminées : </b>	175'],
    ['Spain', 170, '<b> Total de parties lancées : </b>	170	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	24	<br>	<b> Parties non terminées : </b>	146'],
    ['Brazil', 160, '<b> Total de parties lancées : </b>	160	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	8	<br>	<b> Parties non terminées : </b>	152'],
    ['Japan', 137, '<b> Total de parties lancées : </b>	137	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	7	<br>	<b> Parties non terminées : </b>	130'],
    ['Poland', 123, '<b> Total de parties lancées : </b>	123	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	21	<br>	<b> Parties non terminées : </b>	102'],
    ['Switzerland', 122, '<b> Total de parties lancées : </b>	122	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	46	<br>	<b> Parties non terminées : </b>	76'],
    ['Italy', 119, '<b> Total de parties lancées : </b>	119	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	26	<br>	<b> Parties non terminées : </b>	93'],
    ['Russia', 112, '<b> Total de parties lancées : </b>	112	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	21	<br>	<b> Parties non terminées : </b>	91'],
    ['Thailand', 111, '<b> Total de parties lancées : </b>	111	<br><br>	<b> Détail de fin de partie </b>	<br>	<b> Parties terminées : </b>	21	<br>	<b> Parties non terminées : </b>	90']
  ]);

  var options = {
      colorAxis: {colors: ['#EFA802', /* Plus petit au plus grand, revoir avec l'équipe */
                          '#B72227']},
      datalessRegionColor: '#DFF2FF',
      tooltip: { isHtml: true },

  };

  var chart = new google.visualization.GeoChart(document.getElementById('graph_map'));

  chart.draw(data, options);
}