using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Core;
using Test_Dashboard___Pagina.Model;


namespace Test_Dashboard___Pagina.Controllers
{
    public class MedicalReportController : Controller
    {
        // GET: MedicalReport
        /// <summary>
        /// Devuelve un JSON con el reporte de contagios y muertes de hoy, ayer y anteayer
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {

            using(DatabaseEntities1 dbcontext = new DatabaseEntities1()){

                var now = DateTime.Now;
                string today = $"{now.Day}/{now.Month}/{now.Year}";
                string yesterday = $"{now.AddDays(-1).Day}/{now.AddDays(-1).Month}/{now.AddDays(-1).Year}";
                string beforeYesterday = $"{now.AddDays(-2).Day}/{now.AddDays(-2).Month}/{now.AddDays(-2).Year}";


                var reports = dbcontext.InformesDiarios;

                var todayJSON = new InformesDiarios();
                var yesterDayJSON = new InformesDiarios();
                var beforeYesterdayJSON = new InformesDiarios();

                foreach (InformesDiarios report in reports)
                {
                    if (report.Fecha.ToString().Contains(today))
                    {
                        todayJSON = report;
                        continue;
                    }
                    if (report.Fecha.ToString().Contains(yesterday))
                    {
                        yesterDayJSON = report;
                        continue;
                    }
                    if (report.Fecha.ToString().Contains(beforeYesterday))
                    {
                        beforeYesterdayJSON = report;
                        continue;
                    }
                    
                }
               
                return Content($"{{\"today\":{{\"contagios\":{todayJSON.Contagios},\"muertos\":{todayJSON.Fallecimientos}}},\"yesterday\":{{\"contagios\":{yesterDayJSON.Contagios},\"muertos\":{yesterDayJSON.Fallecimientos}}},\"beforeYesterday\":{{\"contagios\":{beforeYesterdayJSON.Contagios},\"muertos\":{beforeYesterdayJSON.Fallecimientos}}}}}", "application/json");
            }

                
        }

       

    }
}
