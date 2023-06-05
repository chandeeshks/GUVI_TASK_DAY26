import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import routes from "../congig/Routes";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home(props){
  //  const {pageTitle = ""} = props;
 //   const childrenroutes = routes.find((route)=>route.name === pageTitle);
    return (<div>
        <Navbar heading="LearningCommunity" cartcount={0}/>
       
        <Footer heading="LearningCommunity 2023"/>

    </div>)
}
//  <Routes>
            
          {/* <Route path="/" Component={Courses}/>
          <Route path="/courses/:id" Component={CoursesDetails} /> */}
     //     {
        //     childrenroutes.length > 0 && childrenroutes.map((route,index)=> <Route key={`app-route ${route.name}-${index}`} path={`/home/${route.path}`} 
        //     element={<route.Component {...props} pageTitle={route.name}
        //     />}{...props} 
        //     />)}
        //   </Routes>
        //   <Outlet/>