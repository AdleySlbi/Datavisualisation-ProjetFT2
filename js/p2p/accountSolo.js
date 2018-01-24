google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Signed In', 'Not Signed In'],
        ['United State',2403,753],
        ['France', 784	,284],
        ['United Kingdom', 518,	138],
        ['Canada', 469, 148], 
        ['South Korea', 290, 181], 
        ['Germany', 205, 92], 
        ['Australia', 166, 47], 
        ['China', 134, 58], 
        ['Spain', 113, 57], 
        ['Brazil', 103, 57], 
        ['Japan', 111, 26], 
        ['Poland', 98, 25], 
        ['Switzerland', 90, 32], 
        ['Italy', 85, 34]
      ])
      
      var options = {
        chartArea: {width: '60%'},
        height:500,
        isStacked: true,
        colors: ['#931883', '#EFA802'],
        hAxis: {
          title: 'Total des parties',
          minValue: 0,
          ticks: [0, 1000,2000,3000,4000]
        },
        vAxis: {
          title: 'Pays'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('graph_account'));
      chart.draw(data, options);
    }