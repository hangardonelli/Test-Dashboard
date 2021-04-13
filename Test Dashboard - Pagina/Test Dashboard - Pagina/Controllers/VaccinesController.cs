using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Test_Dashboard___Pagina.Controllers
{
    public class VaccinesController : Controller
    {
        /// <summary>
        /// Devuelve un JSON con números aleatorios que simulan la cantidad de dosis dadas de la primer
        /// y segunda dosis de la vacuna contra el COVID-19
        /// </summary>
        // GET: Vaccines
        public ActionResult Index()
        {
            Random rnd = new Random();
            const int ArgentinaPopulation = 45000000; //Aproximado de la cantidad de habitantes del país


            int firstDose = rnd.Next(1, ArgentinaPopulation); 
            int secondDose = rnd.Next(1, firstDose); //Nos aseguramos de que el valor de la segunda dosis no pueda ser mayor al de la primera



            return Content($"{{\"firstDose\": {firstDose},\"secondDose\": {secondDose}}}","application/json");
        }

        
    }
}
