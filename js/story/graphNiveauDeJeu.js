google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Easy','Medium', 'Hard'],
          ['United States', 31753, 123907, 23434],
          ['France', 8461, 34644, 6111],
          ['Canada', 5729, 25302, 4516],
          ['United Kingdom', 5998, 22419, 4421],
          ['Germany', 3268, 13446, 2315],
          ['Australia', 2176, 9041, 1668],
          ['Spain', 2167, 7830, 1479],
          ['South Korea', 2209, 5863, 1328],
          ['Belgium', 1201, 4935, 871],
          ['Switzerland', 1129, 4978, 752]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  
                  titleTextStyle: {color: '#333'},
                  vAxis: {title: 'Country',ticks: [{v:4, f:"3-4"},{v:8, f:"5-9"},{v:10, f:"9-13"},{v:14, f:"13-14"},{v:20, f:"15-20"}]}
            },
          vAxis: {minValue: 0},
          height: 500,
          isStacked: true
        };

        var chart = new google.visualization.AreaChart(document.getElementById('graph_level'));
        chart.draw(data, options);
      }