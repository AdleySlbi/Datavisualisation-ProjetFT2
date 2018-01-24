google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Status', 'Signed In', 'Not SignedIn'],
        ['United State', 121021, 42418],
        ['France', 31934, 13210],
        ['Canada', 24854, 7812],
        ['United Kingdom', 23188, 6783],
        ['Germany', 13566, 3847],
        ['Australia', 9359, 2389],
        ['Spain', 6946, 3475],
        ['South Korea', 5772, 3204],
        ['Belgium', 4346, 1930],
        ['Switzerland', 4357, 1615]
      ]);
      
      var options = {
        chartArea: {width: '50%'},
        isStacked: true,
        height: 400,
        hAxis: {
          title: 'Total des parties',
          minValue: 0,
          ticks: [0, 34000, 68000, 102000, 136000, 170000]
        },
        vAxis: {
          title: 'Pays'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('graph_account'));
      chart.draw(data, options);
    }