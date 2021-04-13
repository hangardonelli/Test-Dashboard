using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Test_Dashboard___Pagina.Model;

namespace Test_Dashboard___Pagina.Controllers
{
    public class SicksController : Controller
    {
        // GET: Sicks
        /// <summary>
        /// Devuelve un JSON con la siguiente información:
        /// Número de enfermos
        /// Número de muertos
        /// Numeros de personas que se han recuperado
        /// Cantidad de hombres y mujeres que fallecieron 
        /// Rango de edades de quienes perecieron por COVID-19
        /// </summary>
        /// 
        public ActionResult Index()
        {

            using (DatabaseEntities1 db = new DatabaseEntities1())
            {
                var Infecteds = db.Infectados;

                int sicks = Infecteds.Where(x => x.Estado == "enfermo").Count();
                int deads = Infecteds.Where(x => x.Estado == "muerto").Count();
                int recovered = Infecteds.Where(x => x.Estado == "recuperado").Count();

                int femDeaths = Infecteds.Where(x => x.Sexo == "mujer" && x.Estado == "muerto" ).Count();
                int maleDeaths = Infecteds.Where(x => x.Sexo == "hombre" && x.Estado == "muerto").Count();

                int age_9 = Infecteds.Where(x => x.Edad < 10).Count();
                int age_39 = Infecteds.Where(x => x.Edad <= 40 && x.Edad> 9 ).Count();
                int age_79 = Infecteds.Where(x => x.Edad <= 80 && x.Edad > 39).Count();
                int age_80 = Infecteds.Where(x => x.Edad >= 80).Count();


                return Content($"{{\"ages\":{{\"range0_9\": {age_9},\"range10_39\": {age_39},\"range40_79\": {age_79},\"range80\": {age_80}}},\"infectedsState\":{{\"sicks\":{sicks},\"deads\":{deads},\"recovered\":{recovered}}},\"genderDeaths\":{{\"female\":{femDeaths}, \"male\":{maleDeaths}}}}}", "application/json");
            }
        }
    }

    
}
