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


**Llamadas**
El programa, para obtener la información, hace llamadas a controladores. La respuesta siempre es en JSON
 - GET **/Vaccines**: devuelve la cantidad de personas vacunadas con la primer y segunda dosis. El valor de la segunda dosis siempre será inferior al valor de la primera. Inicialmente, estos datos eran obtenidos de la página oficial del Ministerio de Salud analizando las etiquetas div y encontrar el número y parsearlo, sin embargo, a último momento cambiaron la estructura de la página y decidí que los valores sean aleatorios (siempre respetando la condición dicha al principio.
 - GET **/MedicalReport**: devuelve un reporte de infectados y contagiados en los últimos 3 días.
 - GET **/UTIUsage**: devuelve la cantidad de camas UTI usadas y totales en el AMBA, Prov. de Buenos Aires y el resto del país.
 - GET **/Sicks**: devuelve la cantidad de muertes por grupo etario, cantidad de muertes por genero, y estado de los infectados (enfermos, fallecidos y recuperados)


**Base de datos**
 - 

![Organización de tablas](https://i.ibb.co/0B8jN35/Base-De-Datos-Test-Dashboard.png)
*Aclaración: las filas introducidas en las tablas InformesDiarios e Infectados fueron completamente aleatorias (las agregué con un script para generar datos aleatorios) por lo que no tienen ninguna relación con la realidad de la pandemia en Argentina.* 
 

 

 
