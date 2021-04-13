
var casesChart;
var casesContext;


function reloadCasesChart(today, yesterday, beforeYesterday) {
    casesChart.destroy();
    drawCasesChart(today, yesterday, beforeYesterday);
}
function drawCasesChart(today, yesterday, beforeYesterday) {

    casesContext = document.getElementById('line1');


    const labels = ['Anteayer', 'Ayer', 'Hoy'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Cantidad de casos recientemente',
            data: [beforeYesterday, yesterday, today],
            fill: false,
            borderColor: 'rgb(75, 75, 255)',
            tension: 0.1
        }]
    };

    casesChart = new Chart(casesContext, {
        type: 'line',
        data: data
    });

}
