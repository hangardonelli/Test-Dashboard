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
    public class UTIUsageController : Controller
    {
        // GET: UTIUsage
        /// <summary>
        /// Devuelve un JSON denotando el porcentaje de disponibilidad de camas en las distintas regiones del país
        /// </summary>
        public ActionResult Index()
        {
            using(DatabaseEntities1 db = new DatabaseEntities1())
            {
                var UTIs = db.OcupacionUTIs;

                OcupacionUTIs amba = UTIs.Where(x => x.Id == 1).First();
                OcupacionUTIs bsas = UTIs.Where(x => x.Id == 2).First();
                OcupacionUTIs restofCountry = UTIs.Where(x => x.Id == 3).First();

                return Content($"{{\"amba\":{{\"used\":{amba.Camas_usadas},\"total\":{amba.Camas_totales}}},\"bsas\":{{\"used\":{bsas.Camas_usadas},\"total\":{bsas.Camas_totales}}},\"rest\":{{\"used\":{restofCountry.Camas_usadas},\"total\":{restofCountry.Camas_totales}}}}}", "application/json");


            }

        }

    }
}
