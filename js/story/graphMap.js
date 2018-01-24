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
    ['United States',163439, '<b> Easy : </b> 	30467	<br>	<b> Medium : </b> 	22173	<br>	<b> Hard : </b> 	110799'],
    ['France',45144,'<b> Easy : </b> 	8097	<br>	<b> Medium : </b> 	5846	<br>	<b> Hard : </b> 	31201'],
    ['Canada',32666,'<b> Easy : </b> 	5502	<br>	<b> Medium : </b> 	4294	<br>	<b> Hard : </b> 	22870'],
    ['United Kingdom',29971,'<b> Easy : </b> 	5709	<br>	<b> Medium : </b> 	4229	<br>	<b> Hard : </b> 	20033'],
    ['Germany',17413,'<b> Easy : </b> 	3117	<br>	<b> Medium : </b> 	2206	<br>	<b> Hard : </b> 	12090'],
    ['Australia',11748,'<b> Easy : </b> 	2065	<br>	<b> Medium : </b> 	1585	<br>	<b> Hard : </b> 	8098'],
    ['Spain',10421,'<b> Easy : </b> 	2030	<br>	<b> Medium : </b> 	1406	<br>	<b> Hard : </b> 	6985'],
    ['South Korea',8976,'<b> Easy : </b> 	2152	<br>	<b> Medium : </b> 	1280	<br>	<b> Hard : </b> 	5544'],
    ['Belgium',6276,'<b> Easy : </b> 	1159	<br>	<b> Medium : </b> 	825	<br>	<b> Hard : </b> 	4292'],
    ['Switzerland',5972,'<b> Easy : </b> 	1061	<br>	<b> Medium : </b> 	712	<br>	<b> Hard : </b> 	4199'],
    ['Brazil',5557,'<b> Easy : </b> 	1111	<br>	<b> Medium : </b> 	683	<br>	<b> Hard : </b> 	3763'],
    ['Italy',5542,'<b> Easy : </b> 	1240	<br>	<b> Medium : </b> 	727	<br>	<b> Hard : </b> 	3575'],
    ['Netherlands',3944,'<b> Easy : </b> 	772	<br>	<b> Medium : </b> 	526	<br>	<b> Hard : </b> 	2646'],
    ['Sweden',3823,'<b> Easy : </b> 	689	<br>	<b> Medium : </b> 	543	<br>	<b> Hard : </b> 	2591'],
    ['Russia',3707,'<b> Easy : </b> 	760	<br>	<b> Medium : </b> 	519	<br>	<b> Hard : </b> 	2428'],
    ['China',3634,'<b> Easy : </b> 	1144	<br>	<b> Medium : </b> 	458	<br>	<b> Hard : </b> 	2032'],
    ['Japan',3134,'<b> Easy : </b> 	730	<br>	<b> Medium : </b> 	421	<br>	<b> Hard : </b> 	1983'],
    ['Poland',3086,'<b> Easy : </b> 	694	<br>	<b> Medium : </b> 	447	<br>	<b> Hard : </b> 	1945'],
    ['Denmark',2750,'<b> Easy : </b> 	517	<br>	<b> Medium : </b> 	368	<br>	<b> Hard : </b> 	1865'],
    ['Singapore',2380,'<b> Easy : </b> 	384	<br>	<b> Medium : </b> 	279	<br>	<b> Hard : </b> 	1717'],
    ['Taiwan',1759,'<b> Easy : </b> 	367	<br>	<b> Medium : </b> 	241	<br>	<b> Hard : </b> 	1151']
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