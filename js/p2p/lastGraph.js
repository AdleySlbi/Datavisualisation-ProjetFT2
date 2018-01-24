google.charts.load('current', {
  'packages': ['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawMarkersMap);

function drawMarkersMap() {
var data = google.visualization.arrayToDataTable([
  ['Country',   'Total', {role: 'tooltip', p:{html:true}}],
  ['France',  65401, '<b>Total de parties lancées : </b>	65401	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	2291	<br>	<b>Story : </b>	45144	<br>	<b>Solo : </b>	16898	<br>	<b> Pass And Play : </b>	1068'],
  ['United Kingdom', 43239, '<b>Total de parties lancées : </b>	43239	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	1146	<br>	<b>Story : </b>	29971	<br>	<b>Solo : </b>	11466	<br>	<b> Pass And Play : </b>	656'],
  ['Germany', 24860, '<b>Total de parties lancées : </b>	24860	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	929	<br>	<b>Story : </b>	17413	<br>	<b>Solo : </b>	6221	<br>	<b> Pass And Play : </b>	297'],
  ['Spain', 13787, '<b>Total de parties lancées : </b>	13787	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	374	<br>	<b>Story : </b>	10421	<br>	<b>Solo : </b>	2822	<br>	<b> Pass And Play : </b>	170'],
  ['Italy', 9026, '<b>Total de parties lancées : </b>	9026	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	204	<br>	<b>Story : </b>	5542	<br>	<b>Solo : </b>	3161	<br>	<b> Pass And Play : </b>	119'],
  ['Switzerland', 8637, '<b>Total de parties lancées : </b>	8637	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	484	<br>	<b>Story : </b>	5972	<br>	<b>Solo : </b>	2059	<br>	<b> Pass And Play : </b>	122'],
  ['Belgium', 8534, '<b>Total de parties lancées : </b>	8534	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	140	<br>	<b>Story : </b>	6276	<br>	<b>Solo : </b>	2016	<br>	<b> Pass And Play : </b>	102'],
  ['Netherlands', 5497, '<b>Total de parties lancées : </b>	5497	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	174	<br>	<b>Story : </b>	3944	<br>	<b>Solo : </b>	1312	<br>	<b> Pass And Play : </b>	67'],
  ['Poland', 4906, '<b>Total de parties lancées : </b>	4906	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	276	<br>	<b>Story : </b>	3086	<br>	<b>Solo : </b>	1421	<br>	<b> Pass And Play : </b>	123'],
  ['Denmark', 4877, '<b>Total de parties lancées : </b>	4877	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	146	<br>	<b>Story : </b>	2750	<br>	<b>Solo : </b>	1893	<br>	<b> Pass And Play : </b>	88'],
  ['Finland', 2233, '<b>Total de parties lancées : </b>	2233	<br>	<br><br>	<b>Parties par mode de jeu </b>	<br>	<b> Online : </b>	31	<br>	<b>Story : </b>	1018	<br>	<b>Solo : </b>	1146	<br>	<b> Pass And Play : </b>	38']
]);

var options = {
  sizeAxis: { minValue: 0, maxValue: 100 },
  region: '155', // Western Europe
  displayMode: 'markers',
  tooltip: { isHtml: true },
  colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
};

var chart = new google.visualization.GeoChart(document.getElementById('graph_zoom'));
chart.draw(data, options);
};