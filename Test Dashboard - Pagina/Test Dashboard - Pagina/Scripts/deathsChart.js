
var lineChart;
var lineContext;


function reloadDeathsChart(today, yesterday, beforeYesterday) {
    lineChart.destroy();
    drawDeathsChart(today, yesterday, beforeYesterday);
}
function drawDeathsChart(today, yesterday, beforeYesterday) {

    lineContext = document.getElementById('line2');


    const labels = ['Anteayer', 'Ayer', 'Hoy'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Cantidad de muertos recientemente',
            data: [beforeYesterday, yesterday, today],
            fill: false,
            borderColor: 'rgb(75, 75, 75)',
            tension: 0.1
        }]
    };


    const config = {
        type: 'line',
        data: data,
    };


    lineChart = new Chart(lineContext, {
        type: 'line',
        data: data
    });

}