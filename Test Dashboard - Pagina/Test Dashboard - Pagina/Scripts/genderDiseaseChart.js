
var pieChart1;
var ctx1;
function reloadGenderDeathsChart(manPer, womenPer) {

    pieChart1.destroy();
    drawGenderDeathsChart(manPer, womenPer);
}
function drawGenderDeathsChart(manPer, womenPer) {
    ctx1 = document.getElementById("pie1");
    
    pieChart1 = new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ["Hombres", "Mujeres"],
            datasets: [
                {
                    data: [manPer, womenPer],
                    backgroundColor: ['#3f80e1', '#dca5e1']
                }
            ]
        }
    });
}

