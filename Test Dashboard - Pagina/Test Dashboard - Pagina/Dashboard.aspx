<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Dashboard.aspx.cs" Inherits="Test_Dashboard___Pagina.WebForm1" %>

<!DOCTYPE html>
<html>
   <head>
      <title>Estadísticas de la Pandemia COVID-19</title>
	  
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="Scripts/vaccines.js"></script>
      <script src="Scripts/genderDiseaseChart.js"></script>
      <script src="Scripts/ageDiseaseChart.js"></script>
      <script src="Scripts/UTIUsageChart.js"></script>
      <script src="Scripts/healthResultsChart.js"></script>
      <script src="Scripts/deathsChart.js"></script>
      <script src="Scripts/casesChart.js"></script>
      <script src="Scripts/AJAXRefreshs.js"></script>

	  
	  
             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

      <link rel="stylesheet" type="text/css" href="Content/page.css"/>

   </head>
   <body>
       <form id="form1" runat="server">

         <header>
           <h1>
               Estadísticas de la Pandemia COVID-19
           </h1>
             </header>
      <div class="container">
 <div class="col-md-12">
               <div class="Dose-Container">
                       <div class="text-center">
                   <h3 class="display-4">Porcentaje del país vacunado con la primera dosis</h3>
                           </div>
					<progress id="firstDoseBar" max="44930000" value="20" ></progress>
					           

			   </div>
            </div>
			  <div class="col-md-12">
			  <div class="Dose-Container">
                     <div class="text-center">
                   <h3 class="display-4">Porcentaje del país vacunado con la segunda dosis</h3>
                         </div>
               <progress id="secondtDoseBar" max="44930000" value="20"></progress>>			     </div>
          <div class="text-center">
                  <input class="btn btn-outline-primary" type="button" onclick="updateVaccineDoses()" value="Refrescar por ajax"/>
</div>
                  </div>
          
         <div class="row">
	
            <div class="col-md-6">
                   <div class="text-center">
                <h2 class="display-4">Contagios en los últimos 3 días</h2>
                       <</div>
               <canvas data-region="RO1" data-role="sales"  id="line1" ></canvas>
                <div class="text-center">
                <input class="btn btn-outline-primary" type="button" onclick="updateCasesChart()" value="Refrescar por ajax"/>
                </div>
            </div>
            <div class="col-md-6">
                   <div class="text-center">
			 <h2 class="display-4">Fallecimientos en los últimos 3 días</h2>
                       </div>
               <canvas data-region="RO1" data-role="sales"   id="line2" ></canvas>
                <div class="text-center">
                <input class="btn btn-outline-primary" type="button" onclick="updateDeathsChart()" value="Refrescar por ajax"/>
            </div>
                </div>
         </div>
         <div class="row">
                <div class="text-center">
              <h2 class="display-4">Muertes por grupo etario</h2>
                    </div>
            <canvas data-region="RO1" data-role="sales"    id="bar1" ></canvas>
             
                 </div>
            <div class="text-center">
                    <div class="text-center">
             <input class="btn btn-outline-primary" type="button" onclick="updateDeathsAgeChart()" value="Refrescar por ajax"/>
            </div>
               </div>
		  <div class="row">
         <div class="col-md-4">
                <div class="text-center">
              <h2 class="display-4">Muertes por sexo</h2>
                    </div>
               <canvas data-region="RO1" data-role="sales"   id="pie1" ></canvas>
             <div class="text-center">
                  <br />
              <input class="btn btn-outline-primary" type="button" onclick="updateGenderDeathsChart()" value="Refrescar por ajax"/>
                 <br />
                 </div>
            </div>
            <div class="col-md-4">
                   <div class="text-center">
                 <h2 class="display-4">Ocupación de UTIs en el país</h2>
                       </div>

               <canvas data-region="RO1" data-role="sales"  id="polar1" ></canvas>
                <div class="text-center">
                     <br />
                 <input class="btn btn-outline-primary" type="button" onclick="updateUTIUsage()" value="Refrescar por ajax"/>
          <br />
                    </div>
                    </div>
            <div class="col-md-3">
                   <div class="text-center">
                 <h2 class="display-4">Estado de los enfermos</h2>
                       </div>
               <canvas data-region="RO1" data-role="sales"   id="donut1" ></canvas>
                 <br />
                <div class="text-center">
                    <br />
                <input class="btn btn-outline-primary" type="button" onclick="updateHealthResultsChart()" value="Refrescar por ajax" />
                </div>
            </div>
         </div>
      <script>


          //Inicia algunos valores de prueba para mostrar contenido en las tablas
          drawCasesChart(23000, 22000, 20000);
          drawGenderDeathsChart(80, 20);
          drawAgeDeathsChart(10, 20, 30, 40);
          drawUTIUsageChart(10, 40, 90);
          drawHealthResultsChart(1500, 8200, 800);
          drawDeathsChart(290, 185, 250);
          setFirstDoseValue(5000000);
          setSecondDoseValue(2000000);


         
      </script>
          </div>
       </form>
   </body>
  
</html>