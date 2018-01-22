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
      ['United States',4389, 'Hello world'],
      ['France',2291,'<b>Total de partie lancé:</b> 2291 <br> Total de partie finis: 1650 <br> End reason <br> Problème de connexion: 232 <br> Parties finis suite à une défaite: 753 <br> Parties qui se finis avant la fin du jeu: 409 <br> Parties qui se fini suite à une victoire: 897 '],
      ['Canada',1902,'Hello world'],
      ['United Kingdom',1146,'Hello world'],
      ['South Korea',1025,'Hello world'],
      ['Germany',929,'Hello world'],
      ['Switzerland',484,'HelloWorld']
    ]);

    var options = {
        colorAxis: {colors: ['#3A9897', /* Plus petit au plus grand, revoir avec l'équipe */
                            '#DD021B',]},
        datalessRegionColor: '#f8bbd0',
        tooltip: { isHtml: true },

    };

    var chart = new google.visualization.GeoChart(document.getElementById('graph_map'));

    chart.draw(data, options);
  }