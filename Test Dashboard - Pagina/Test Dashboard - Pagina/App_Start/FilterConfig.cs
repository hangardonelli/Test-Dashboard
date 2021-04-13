using System.Web;
using System.Web.Mvc;

namespace Test_Dashboard___Pagina
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
