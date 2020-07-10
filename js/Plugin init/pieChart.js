/**
 * This is a demo for PieChart.
 *
 * Demo uses JSON-based config.
 *
 * Refer to the following link(s) for reference:
 * @see {@link https://www.amcharts.com/docs/v4/chart-types/pie-chart/}
 * @see {@link https://www.amcharts.com/docs/v4/concepts/json-config/}
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

/** Define data for each year **/
var chartData = {
  "2019": [
    { "sector": "TraffiCredits Earned", "size": 3.7 },
    { "sector": "TraffiCredits Withdrawn", "size": 0.2 } ]
};

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data
chart.data = [
  { "sector": "TraffiCredits Earned", "size": 6.6 },
  { "sector": "TraffiCredits Withdrawn", "size": 0.6 }
];

// Add label
chart.innerRadius = 100;
var label = chart.seriesContainer.createChild(am4core.Label);
label.text = "1995";
label.horizontalCenter = "middle";
label.verticalCenter = "middle";
label.fontSize = 50;

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "size";
pieSeries.dataFields.category = "sector";

// Animate chart data
var currentYear = 1995;
function getCurrentData() {
  label.text = currentYear;
  var data = chartData[currentYear];
  currentYear++;
  if (currentYear > 2014)
    currentYear = 1995;
  return data;
}

function loop() {
  //chart.allLabels[0].text = currentYear;
  var data = getCurrentData();
  for(var i = 0; i < data.length; i++) {
    chart.data[i].size = data[i].size;
  }
  chart.invalidateRawData();
  chart.setTimeout( loop, 4000 );
}

loop();