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
      ['United States',11274, '<b>Total de parties lancées : </b>	11274	<br>	<b>Total de parties terminées : </b>	8027	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	4389	<br>	<b>Défaites : </b>	3638	<br>	<b>Problèmes de connexion : </b>	1192	<br>	<b> Abandons en cours de parties : </b>	2055'],
      ['France',2291,'<b>Total de parties lancées : </b>	2291	<br>	<b>Total de parties terminées : </b>	1650	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	897	<br>	<b>Défaites : </b>	753	<br>	<b>Problèmes de connexion : </b>	232	<br>	<b> Abandons en cours de parties : </b>	409'],
      ['Canada',1902,'<b>Total de parties lancées : </b>	1902	<br>	<b>Total de parties terminées : </b>	1363	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	732	<br>	<b>Défaites : </b>	631	<br>	<b>Problèmes de connexion : </b>	158	<br>	<b> Abandons en cours de parties : </b>	381'],
      ['United Kingdom',1146,'<b>Total de parties lancées : </b>	1146	<br>	<b>Total de parties terminées : </b>	765	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	423	<br>	<b>Défaites : </b>	342	<br>	<b>Problèmes de connexion : </b>	139	<br>	<b> Abandons en cours de parties : </b>	242'],
      ['South Korea',1025,'<b>Total de parties lancées : </b>	1025	<br>	<b>Total de parties terminées : </b>	724	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	386	<br>	<b>Défaites : </b>	338	<br>	<b>Problèmes de connexion : </b>	129	<br>	<b> Abandons en cours de parties : </b>	172'],
      ['Germany',929,'<b>Total de parties lancées : </b>	929	<br>	<b>Total de parties terminées : </b>	715	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	421	<br>	<b>Défaites : </b>	294	<br>	<b>Problèmes de connexion : </b>	74	<br>	<b> Abandons en cours de parties : </b>	140'],
      ['Switzerland',484,'<b>Total de parties lancées : </b>	484	<br>	<b>Total de parties terminées : </b>	369	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	192	<br>	<b>Défaites : </b>	177	<br>	<b>Problèmes de connexion : </b>	29	<br>	<b> Abandons en cours de parties : </b>	86'],
      ['Russia',439,'<b>Total de parties lancées : </b>	439	<br>	<b>Total de parties terminées : </b>	291	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	164	<br>	<b>Défaites : </b>	127	<br>	<b>Problèmes de connexion : </b>	38	<br>	<b> Abandons en cours de parties : </b>	110'],
      ['Australia',391,'<b>Total de parties lancées : </b>	391	<br>	<b>Total de parties terminées : </b>	259	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	131	<br>	<b>Défaites : </b>	128	<br>	<b>Problèmes de connexion : </b>	52	<br>	<b> Abandons en cours de parties : </b>	80'],
      ['Spain',374,'<b>Total de parties lancées : </b>	374	<br>	<b>Total de parties terminées : </b>	235	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	122	<br>	<b>Défaites : </b>	113	<br>	<b>Problèmes de connexion : </b>	58	<br>	<b> Abandons en cours de parties : </b>	81'],
      ['Brazil',309,'<b>Total de parties lancées : </b>	309	<br>	<b>Total de parties terminées : </b>	153	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	81	<br>	<b>Défaites : </b>	72	<br>	<b>Problèmes de connexion : </b>	34	<br>	<b> Abandons en cours de parties : </b>	122'],
      ['Poland',276,'<b>Total de parties lancées : </b>	276	<br>	<b>Total de parties terminées : </b>	173	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	102	<br>	<b>Défaites : </b>	71	<br>	<b>Problèmes de connexion : </b>	18	<br>	<b> Abandons en cours de parties : </b>	85'],
      ['China',261,'<b>Total de parties lancées : </b>	261	<br>	<b>Total de parties terminées : </b>	156	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	81	<br>	<b>Défaites : </b>	75	<br>	<b>Problèmes de connexion : </b>	20	<br>	<b> Abandons en cours de parties : </b>	85'],
      ['Italy',204,'<b>Total de parties lancées : </b>	204	<br>	<b>Total de parties terminées : </b>	131	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	71	<br>	<b>Défaites : </b>	60	<br>	<b>Problèmes de connexion : </b>	28	<br>	<b> Abandons en cours de parties : </b>	45'],
      ['Thailand',201,'<b>Total de parties lancées : </b>	201	<br>	<b>Total de parties terminées : </b>	104	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	57	<br>	<b>Défaites : </b>	47	<br>	<b>Problèmes de connexion : </b>	35	<br>	<b> Abandons en cours de parties : </b>	62'],
      ['India',174,'<b>Total de parties lancées : </b>	174	<br>	<b>Total de parties terminées : </b>	94	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	55	<br>	<b>Défaites : </b>	39	<br>	<b>Problèmes de connexion : </b>	22	<br>	<b> Abandons en cours de parties : </b>	58'],
      ['Netherlands',174,'<b>Total de parties lancées : </b>	174	<br>	<b>Total de parties terminées : </b>	103	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	54	<br>	<b>Défaites : </b>	49	<br>	<b>Problèmes de connexion : </b>	29	<br>	<b> Abandons en cours de parties : </b>	42'],
      ['Sweden',160,'<b>Total de parties lancées : </b>	160	<br>	<b>Total de parties terminées : </b>	95	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	50	<br>	<b>Défaites : </b>	45	<br>	<b>Problèmes de connexion : </b>	21	<br>	<b> Abandons en cours de parties : </b>	44'],
      ['Denmark',146,'<b>Total de parties lancées : </b>	146	<br>	<b>Total de parties terminées : </b>	90	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	51	<br>	<b>Défaites : </b>	39	<br>	<b>Problèmes de connexion : </b>	15	<br>	<b> Abandons en cours de parties : </b>	41'],
      ['Taiwan',144,'<b>Total de parties lancées : </b>	144	<br>	<b>Total de parties terminées : </b>	84	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	46	<br>	<b>Défaites : </b>	38	<br>	<b>Problèmes de connexion : </b>	13	<br>	<b> Abandons en cours de parties : </b>	47'],
      ['Belgium',140,'<b>Total de parties lancées : </b>	140	<br>	<b>Total de parties terminées : </b>	98	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	58	<br>	<b>Défaites : </b>	40	<br>	<b>Problèmes de connexion : </b>	19	<br>	<b> Abandons en cours de parties : </b>	23'],
      ['Japan',135,'<b>Total de parties lancées : </b>	135	<br>	<b>Total de parties terminées : </b>	97	<br><br>	<b>Raisons de fin de parties : </b>	<br>	<b> Victoires : </b>	55	<br>	<b>Défaites : </b>	42	<br>	<b>Problèmes de connexion : </b>	18	<br>	<b> Abandons en cours de parties : </b>	20']
    ]);

    var options = {
        colorAxis: {colors: ['#EFA802', /* Plus petit au plus grand, revoir avec l'équipe */
                            '#B72227',]},
        datalessRegionColor: '#DFF2FF',
        tooltip: { isHtml: true },

    };

    var chart = new google.visualization.GeoChart(document.getElementById('graph_map'));

    chart.draw(data, options);
  }