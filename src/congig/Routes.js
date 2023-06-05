import Dashboard from "../Dashboard";
import Cart from "../pages/Cart";
import Courses from "../pages/Courses";
import CoursesDetails from "../pages/CoursesDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = [
    {
        name:"Login",
        path:"/",
        Component:Login
    },
    {
        name:"Dashboard",
        path:"/dashboard",
        Component:Dashboard
    },
    {
        name:"home",
        path:"/home",
        Component:Home,
           
    },
    {
        name:"Home",
        path:"/courses",
        Component:Courses
    },
    {
        name:"Courses Details",
        path:"/courses/:id",
        Component:CoursesDetails,
   },
   {
        name:"Cart",
        path:"/cart",
        Component:Cart,
   },
]

export default routes;