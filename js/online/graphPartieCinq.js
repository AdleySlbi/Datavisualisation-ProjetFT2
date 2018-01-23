google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
      var data = new google.visualization.DataTable();


      var data = google.visualization.arrayToDataTable([
        ['Country', 'Online', 'Pass & Play','Solo','Story'],
        ['Canada',1902,	617,	12736,	32666],
        ['United Kingdom',	1146,	656,	11466,	29971],
        ['Germany',	929,297,	6221,	17413],
        ['Australia',	391,	213,	4298,	11748],
        ['South Korea',	1025,	471,	4159,	8976],
        ['Spain',	374,	170,	2822,	10421],
        ['Italy',	204,	119,	3161,	5542],
        ['Switzerland',	484,	122,	2059,	5972],
        ['Belgium',	140,	102,	2016,	6276],
        ['Brazil',	309,	160,	2469,	5557],
        ['China',	261,	192,	2610,	3634]
      ]);

      var options = {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true
      };

      var materialChart = new google.charts.Bar(document.getElementById('graph_part_5'));
      materialChart.draw(data, options);
    }
/*Changer le titre dans le HTML en Repartion des modes de jeu par pays */
    