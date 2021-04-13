
var polarChart;
var polarContext;

function reloadUTIUsageChart(amba, bsas, restOfCountry) {
    polarChart.destroy();
    drawUTIUsageChart(amba, bsas, restOfCountry);
}
function drawUTIUsageChart(amba, bsas, restOfCountry) {
    /*
        Precondición: Dado a que los 3 parametros son porcentajes, no pueden ser mayores a 100
    */

    if (amba > 100 || bsas > 100 || restOfCountry > 100) {
        throw "Error, un porcentaje tiene que ser menor o igual a 100"
    }
    const data = {
        labels: [
            'AMBA',
            'Provincia de Buenos Aires',
            'Resto del país'
        ],
        datasets: [{
            data: [amba, bsas, restOfCountry],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)'
            ]
        }]
    };

    polarContext = document.getElementById('polar1');

    polarChart = new Chart(polarContext, {
        data: data,
        type: 'polarArea'
    });
}