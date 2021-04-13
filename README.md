# Test dashboard

Repositorio del test del dashboard

**Entorno:**

 - C# 5.0
 - .NET Framewok 4.5
 - Entity Framework 6
 - ASP.NET - Web Application
 - SQL Server (MDF)
 - Bootstrap
 - Página de inicio: Dashboard.aspx

**NuGet Packages**
 - jQuery (para AJAXs)

**Otras librerías de JavaScript usadas**

 - Chart.js *(para el renderizado en HTMLCanvas de los gráficos)*

 

**Temática**
El dashboard consiste en una serie de 8 gráficos relacionados a la pandemia del virus SARS-COV-2 en Argentina.

**Gráficos**
 - Progressbar / Denota el  porcentaje de la población vacunada hasta la fecha con la primer dosis
 - Progressbar / Denota el porcentaje de la población vacunada hasta la fecha con la segunda dosis
 - Gráfico de líneas / Denota el reporte de contagios en los últimos 3 días
 - Gráfico de lineas / Denota el reporte de defunciones en los últimos 3 días
 - Gráfico de torta / Denota la diferencia de fallecimientos discriminadas por sexo
 - Gráfico polar / Denota el porcentaje de camas de Unidad de Terapia Intensiva (UTIs en el programa) disponibles en el AMBA, Provincia de Buenos Aires y resto del país
 - Gráfico de dona / Denota el estado de los infectados (cuantos siguen enfermos, contagiados y recuperados)
 
**Funciones de depuración**
Los gráficos, pueden ser re-generados sin recargar la página y sin la necesidad, si se quiere, de hacer consultas AJAXs a la base de datos. Existen estas funciones para ejecutarlas desde la consola del navegador:
 - **setFirstDoseValue(population: int):** cambia la cantidad de personas que se dieron la primer dosis de la vacuna
 - **setSecondDoseValue(population: int)**: cambia la cantidad de personas que se dieron la segunda dosis de la vacuna
 - **reloadCasesChart(todayNumber, yesterdayNumber, beforeYesterdayNumber)**: modifica el gráfico de casos en los últimos 3 días
 - **reloadDeathsChart(todayNumber, yesterdayNumber, beforeYesterdayNumber)**: modifica el gráfico de fallecimientos en los últimos 3 días
 - **reloadAgeDeathsChart(group0_9, group10_39, group40_79, group_80)**: modifica el gráfico de muertes diferenciadas por grupo etario.
 - **reloadUTIUsageChart(ambaPercentage, bsasPercentage, restPercentage)**: modifica el gráfico de ocupación de UTIs 
 - **reloadHealthResultsChart(sicks, deaths, recovereds)**: modifica el gráfico del estado de los infectados
 - **reloadGenderDeathsChart(maleDeaths, femaleDeaths)**: modifica el gráfico que muestra las muertes diferenciadas por sexo
 
 

 

 
