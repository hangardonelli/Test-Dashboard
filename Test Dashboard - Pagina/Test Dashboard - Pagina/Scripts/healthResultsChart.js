
var donutChart;
var donutContext;

function reloadHealthResultsChart(sicks, deaths, recovered) {
    donutChart.destroy();
    drawHealthResultsChart(sicks, deaths, recovered);
}
function drawHealthResultsChart(sicks, deaths, recovered) {

    const data = {
        labels: [
            'Enfermos',
            'Muertos',
            'Recuperados'
        ],
        datasets: [{

            data: [sicks, deaths, recovered],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(56, 56, 56)',
                'rgb(127, 172, 123)'
            ]
        }]
    };

    donutContext = document.getElementById('donut1');

    donutChart = new Chart(donutContext, {
        data: data,
        type: 'doughnut'
    });
}
