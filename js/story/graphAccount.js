google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Invite Received', 'Invite Sent', 'Matchmaking'],
        ['United State', 5934, 5727, 562],
        ['France', 1166, 1199, 143],
        ['Canada', 1046, 950, 124],
        ['United Kingdom', 552, 600, 94],
        ['South Korea', 532, 509, 60],
        ['Germany', 384,565, 43],
        ['Switzerland', 258, 192, 54],
        ['Russia', 205, 217, 70],
        ['Australia', 212, 208, 31],
        ['Spain', 163, 192, 54],
        ['Brazil', 153, 171, 14],
        ['Poland', 157, 159, 6],
        ['China', 141, 138, 3],
        ['Italy', 97, 97, 26],
        ['Thailand', 109, 100, 8],
      ]);
      
      var options = {
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          title: 'Total des parties',
          minValue: 0,
          ticks: [0, 2500, 5000, 7500, 10000, 12500]
        },
        vAxis: {
          title: 'Pays'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('graph_account'));
      chart.draw(data, options);
    }