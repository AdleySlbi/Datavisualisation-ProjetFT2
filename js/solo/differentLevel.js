google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
      var data = new google.visualization.DataTable();


      var data = google.visualization.arrayToDataTable([
        ['Country', 'Easy', 'Medium', 'Hard', 'Expert'],
        ['United States', 28878, 13970, 28911, 1068,],
        ['France', 7573, 3014, 5245, 3918],
        ['Canada', 5189, 3517, 4461, 1907],
        ['United Kingdom', 5449, 2656, 3602, 1983],
        ['Germany', 3293, 1493, 1706, 984],
        ['Australia', 1851, 982, 1388, 758],
        ['South Korea', 2046, 531, 1123, 880],
        ['Italy', 1480, 418, 887, 845],
        ['Japan', 1080, 729, 1222, 372],
        ['Spain', 1563, 634, 779, 249]
      ]);

      var options = {
        width: 800,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
        colors: ['#931883','#EFA802','#209C51', '#F0A497']
      };

      var materialChart = new google.charts.Bar(document.getElementById('graph_level'));
      materialChart.draw(data, options);
    }
/*Changer le titre dans le HTML en Repartion des modes de jeu par pays */