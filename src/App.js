import React from "react";
// import Counterpage from "./pages/Counter";
// import Princingpage from "./pages/PricingDetails";
// import Test from "./Components/Test";
// import Team from "./mocks/Team";
// import Product from "./pages/Courses";
// import Courses from "./pages/Courses";
// import CoursesDetails from "./pages/CoursesDetails";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import routes from "./congig/Routes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";



function App() {
  const [cart, setcart] = useState([]);
  
  function handleaddtocart(data={}){
    if(data){
        let cartcopy = [...cart];
        cartcopy.push(data);
        setcart(cartcopy);
    }
}
    const newprops={cart, handleaddtocart};
    return(
      <div className="">
           
        <Routes>
          {/* <Route path="/" Component={Courses}/>
          <Route path="/courses/:id" Component={CoursesDetails} /> */}
          {
            routes.map((route,index)=> <Route key={`app-route ${route.name}-${index}`} path={route.path} 
            element={<route.Component {...newprops}
            pageTitle={route.name}
            />}/>)
          }
          </Routes>

        

      </div>
    )
}

export default App;

