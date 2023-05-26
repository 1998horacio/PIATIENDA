using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult CMPNT()
        {
            return View();
        }

        public ActionResult cel()
        {
            return View();
        }

        public ActionResult smart()
        {
            return View();
        }

        public ActionResult lap()
        {
            return View();
        }
    }
}