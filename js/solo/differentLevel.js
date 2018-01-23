google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
      var data = new google.visualization.DataTable();


      var data = google.visualization.arrayToDataTable([
        ['Country', 'Online', 'Story', 'Solo', 'Pass & Play'],
        ['France', 2291, 45144, 16898, 1068,],
        ['France', 2291, 45144, 16898, 1068,],
        ['France', 2291, 45144, 16898, 1068,],
        ['France', 2291, 45144, 16898, 1068,],
        ['France', 2291, 45144, 16898, 1068,],
        ['France', 2291, 45144, 16898, 1068,],
        ['France', 2291, 45144, 16898, 1068,]
      ]);

      var options = {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
      };

      var materialChart = new google.charts.Bar(document.getElementById('graph_level'));
      materialChart.draw(data, options);
    }
/*Changer le titre dans le HTML en Repartion des modes de jeu par pays */