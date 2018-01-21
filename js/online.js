// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// /!\ GRAPH 1 /!\
// /!\ GRAPH 1 /!\
// /!\ GRAPH 1 /!\
// /!\ GRAPH 1 /!\
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
      var data = google.visualization.arrayToDataTable([
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
      ]);

      var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          title: 'Total Population',
          minValue: 0,
        },
        vAxis: {
          title: 'City'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('graph_1'));
      chart.draw(data, options);
    }





// /!\ GRAPH 2 /!\
// /!\ GRAPH 2 /!\
// /!\ GRAPH 2 /!\
// /!\ GRAPH 2 /!\
  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart2);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart2() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['United States', 12223],
      ['France', 2508],
      ['Canada', 2120],
      ['United Kingdom', 1246],
      ['South Korea', 1101],
      ['Germany', 992],
      ['Switzerland', 504],
      ['Russia', 492],
      ['Australia', 451],
      ['Spain', 409]
    ]);

    // Changement de couleur et taille (couleurs dans l'ordre)
    var options = {'width':650,
                   'height':350,
                   'colors': ['#3A9897',
                             '#DD021B',
                             '#EFA802', 
                             '#931883', 
                             '#47971B', 
                             '#FF8A2C', 
                             '#F0A497', 
                             '#CF310B', 
                             '#2236C3', 
                             '#A42CFF']};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('graph_2'));
    chart.draw(data, options);
  }
//END GRAPH 2

// /!\ GRAPH 3 /!\
// /!\ GRAPH 3 /!\
// /!\ GRAPH 3 /!\
// /!\ GRAPH 3 /!\

//Change Data
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart3);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart3() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['United States', 12223],
    ['France', 2508],
    ['Canada', 2120],
    ['United Kingdom', 1246],
    ['South Korea', 1101],
    ['Germany', 992],
    ['Switzerland', 504],
    ['Russia', 492],
    ['Australia', 451],
    ['Spain', 409]
  ]);

  // Changement de couleur et taille (couleurs dans l'ordre)
  var options = {'width':650,
                 'height':350,
                 'colors': ['#3A9897',
                           '#DD021B',
                           '#EFA802', 
                           '#931883', 
                           '#47971B', 
                           '#FF8A2C', 
                           '#F0A497', 
                           '#CF310B', 
                           '#2236C3', 
                           '#A42CFF']};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('graph_3'));
  chart.draw(data, options);
}


// /!\ GRAPH 4 /!\
// /!\ GRAPH 4 /!\
// /!\ GRAPH 4 /!\
// /!\ GRAPH 4 /!\

google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {

      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');

      data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 1],
        [{v: [9, 0, 0], f: '9 am'}, 2],
        [{v: [10, 0, 0], f:'10 am'}, 3],
        [{v: [11, 0, 0], f: '11 am'}, 4],
        [{v: [12, 0, 0], f: '12 pm'}, 5],
        [{v: [13, 0, 0], f: '1 pm'}, 6],
        [{v: [14, 0, 0], f: '2 pm'}, 7],
        [{v: [15, 0, 0], f: '3 pm'}, 8],
        [{v: [16, 0, 0], f: '4 pm'}, 9],
        [{v: [17, 0, 0], f: '5 pm'}, 10],
      ]);

      var options = {
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('graph_4'));

      chart.draw(data, options);
    }