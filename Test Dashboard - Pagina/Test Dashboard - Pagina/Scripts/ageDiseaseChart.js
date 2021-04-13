var myBarChart;
var barCont;


function reloadAgeDeathsChart(x, y, z, a) {
    myBarChart.destroy();
    drawAgeDeathsChart(x, y, z, a);
}

function drawAgeDeathsChart(x, y, z, a) {
    barCont = document.getElementById("bar1");
    const labels = ["0-9", "10-39", "40-79", "+80"];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Muertos por edades',
            data: [x, y, z, a],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
            ],
            borderWidth: 2
        }]
    };


    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };



    myBarChart = new Chart(barCont, {
        type: 'bar',
        data: data
    });


}