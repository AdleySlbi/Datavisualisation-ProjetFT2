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
    ['United States',73652, '<b> Total de parties lancées : </b>	73652	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	40319	<br>	<b> Défaite : </b>	25284	<br>	<b> Abandon : </b>	8049'],
    ['France',16898, '<b> Total de parties lancées : </b>	16898	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	9067	<br>	<b> Défaite : </b>	5853	<br>	<b> Abandon : </b>	1978'],
    ['Canada',12736	, '<b> Total de parties lancées : </b>	12736	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	7112	<br>	<b> Défaite : </b>	4136	<br>	<b> Abandon : </b>	1488'],
    ['United Kingdom',11466	, '<b> Total de parties lancées : </b>	11466	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	6425	<br>	<b> Défaite : </b>	3809	<br>	<b> Abandon : </b>	1232'],
    ['Germany',6220	, '<b> Total de parties lancées : </b>	6220	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	3529	<br>	<b> Défaite : </b>	1903	<br>	<b> Abandon : </b>	788'],
    ['Australia',4298	, '<b> Total de parties lancées : </b>	4298	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	2359	<br>	<b> Défaite : </b>	1456	<br>	<b> Abandon : </b>	483'],
    ['South Korea',4159	, '<b> Total de parties lancées : </b>	4159	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	1776	<br>	<b> Défaite : </b>	1467	<br>	<b> Abandon : </b>	916'],
    ['Italy',3161	, '<b> Total de parties lancées : </b>	3161	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	1485	<br>	<b> Défaite : </b>	1234	<br>	<b> Abandon : </b>	442'],
    ['Japan',2942	, '<b> Total de parties lancées : </b>	2942	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	1582	<br>	<b> Défaite : </b>	1018	<br>	<b> Abandon : </b>	342'],
    ['Spain',2820	, '<b> Total de parties lancées : </b>	2820	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	1286	<br>	<b> Défaite : </b>	824	<br>	<b> Abandon : </b>	710'],
    ['China',2610	, '<b> Total de parties lancées : </b>	2610	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	1077	<br>	<b> Défaite : </b>	914	<br>	<b> Abandon : </b>	619'],
    ['Brazil',2469	, '<b> Total de parties lancées : </b>	2469	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	1344	<br>	<b> Défaite : </b>	798	<br>	<b> Abandon : </b>	327'],
    ['Switzerland',2059	, '<b> Total de parties lancées : </b>	2059	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	1193	<br>	<b> Défaite : </b>	618	<br>	<b> Abandon : </b>	248'],
    ['Belgium',2016	, '<b> Total de parties lancées : </b>	2016	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	1007	<br>	<b> Défaite : </b>	712	<br>	<b> Abandon : </b>	297'],
    ['Denmark',1893	, '<b> Total de parties lancées : </b>	1893	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	1030	<br>	<b> Défaite : </b>	646	<br>	<b> Abandon : </b>	217'],
    ['Russia',1822	, '<b> Total de parties lancées : </b>	1822	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	857	<br>	<b> Défaite : </b>	627	<br>	<b> Abandon : </b>	338'],
    ['Sweden',1564	, '<b> Total de parties lancées : </b>	1564	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	821	<br>	<b> Défaite : </b>	563	<br>	<b> Abandon : </b>	180'],
    ['Thailand',1456	, '<b> Total de parties lancées : </b>	1456	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	597	<br>	<b> Défaite : </b>	556	<br>	<b> Abandon : </b>	303'],
    ['Poland',1421	, '<b> Total de parties lancées : </b>	1421	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	717	<br>	<b> Défaite : </b>	439	<br>	<b> Abandon : </b>	265'],
    ['India',1328	, '<b> Total de parties lancées : </b>	1328	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	505	<br>	<b> Défaite : </b>	506	<br>	<b> Abandon : </b>	317'],
    ['Netherlands',1312	, '<b> Total de parties lancées : </b>	1312	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	717	<br>	<b> Défaite : </b>	369	<br>	<b> Abandon : </b>	226'],
    ['Finland',1146	, '<b> Total de parties lancées : </b>	1146	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	556	<br>	<b> Défaite : </b>	454	<br>	<b> Abandon : </b>	136'],
    ['Taiwan',847	, '<b> Total de parties lancées : </b>	847	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	397	<br>	<b> Défaite : </b>	241	<br>	<b> Abandon : </b>	209'],
    ['Chile',831	, '<b> Total de parties lancées : </b>	831	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	269	<br>	<b> Défaite : </b>	494	<br>	<b> Abandon : </b>	68'],
    ['Norway',640	, '<b> Total de parties lancées : </b>	640	<br><br>	<b> Détail de la fin de partie </b>	<br>	<b> Victoire : </b>	344	<br>	<b> Défaite : </b>	219	<br>	<b> Abandon : </b>	77']
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