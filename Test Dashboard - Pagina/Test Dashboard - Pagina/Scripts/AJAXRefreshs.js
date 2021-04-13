let ProgramURL = window.location.href.substring(0, window.location.href.lastIndexOf('/'));


function updateAllCharts() {

    updateGenderDeathsChart();
    updateHealthResultsChart();
    updateDeathsAgeChart()
    updateVaccineDoses();
    updateCasesChart();
    updateDeathsChart();
    updateUTIUsage();
    
}



function updateHealthResultsChart() {
    $.ajax({
        url: ProgramURL + "/Sicks",
        success: function (response) {

            let sicks = response.infectedsState.sicks;
            let deaths = response.infectedsState.deads;
            let recovereds = response.infectedsState.recovered;

            reloadHealthResultsChart(sicks, deaths, recovereds);

        },
        error: function (xhr) {
            alert('Hubo un error al solicitar los datos');
        }
    });
}


function updateGenderDeathsChart() {
    $.ajax({
        url: ProgramURL + "/Sicks",
        success: function (response) {

            let femaleDeaths = response.infectedsState.female;
            let maleDeaths = response.genderDeaths.male;

            reloadGenderDeathsChart(maleDeaths, femaleDeaths);
        },
        error: function (xhr) {
            alert('Hubo un error al solicitar los datos');
        }
    });
}

function updateUTIUsage() {
    $.ajax({
        url: ProgramURL + "/UTIUsage",
        success: function (response) {

            let ambaPercentage = (response.amba.used / response.amba.total) * 100;
            let bsasPercentage = (response.bsas.used / response.bsas.total) * 100;
            let restPercentage = (response.rest.used / response.rest.total) * 100;

            reloadUTIUsageChart(ambaPercentage, bsasPercentage, restPercentage);

        },
        error: function (xhr) {
            alert('Hubo un error al solicitar los datos');
        }
    });
}


function updateDeathsAgeChart() {
    $.ajax({
        url: ProgramURL + "/Sicks",
        success: function (response) {

            let x = response.ages.range0_9;
            let y = response.ages.range10_39;
            let z = response.ages.range40_79;
            let a = response.ages.range80;

            reloadAgeDeathsChart(x, y, z, a);

        },
        error: function (xhr) {
            alert('Hubo un error al solicitar los datos');
        }
    });
}

function updateVaccineDoses() {
    $.ajax({
        url: ProgramURL + "/Vaccines",
        success: function (response) {

            let firstDose = response.firstDose;
            let secondDose = response.secondDose;

            setFirstDoseValue(firstDose);
            setSecondDoseValue(secondDose);
            
        },
        error: function (xhr) {
            alert('Hubo un error al solicitar los datos');
        }
    });
}

function updateCasesChart() {

    $.ajax({
        url: ProgramURL + "/MedicalReport",
        success: function (response) {

            let todayNumber = response.today.contagios;
            let yesterdayNumber = response.yesterday.contagios;
            let beforeYesterdayNumber = response.beforeYesterday.contagios;

            reloadCasesChart(todayNumber, yesterdayNumber, beforeYesterdayNumber)

        },
        error: function (xhr) {
            alert('Hubo un error al solicitar los datos');
        }
    });
}

function updateDeathsChart() {
    
    $.ajax({
        url: ProgramURL + "/MedicalReport",
        success: function (response) {

            let todayNumber = response.today.muertos;
            let yesterdayNumber = response.yesterday.muertos;
            let beforeYesterdayNumber = response.beforeYesterday.muertos;

            reloadDeathsChart(todayNumber, yesterdayNumber, beforeYesterdayNumber)

        },
        error: function (xhr) {
            alert('Hubo un error al solicitar los datos');
        }
    });
}



function updateGenderDeathsChart() {
    $.ajax({
        url: ProgramURL + "/Sicks",
        success: function (response) {

            let femaleDeaths = response.genderDeaths.female;
            let maleDeaths = response.genderDeaths.male;
            reloadGenderDeathsChart(maleDeaths, femaleDeaths);

        },
        error: function (xhr) {
            alert('Hubo un error al solicitar los datos');
        }
    });
}