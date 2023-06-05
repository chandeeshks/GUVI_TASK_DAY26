import React,{useEffect, useState} from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Productcart from "../Components/Cards";
import data from "../Assests/coursesDetails.json";
import { useParams } from "react-router-dom";

export default function CoursesDetails({cart=[], handleaddtocart=[]}){
    const [courses, setcourses] = useState([]);
    const {id = null} = useParams();

    useEffect(()=>{
        if(data && data.courses.length > 0 && id){
           setcourses(data.courses.filter((d)=>d.categoryId === Number(id)))
        }
  
    },[data]); 
    

    // const Removefromcart = value =>{
    //     setcourses(oldvalue  =>{
    //         return oldvalue.filter(d => d != value)
    //     })
    // }

    return(
        <div>
            <Header heading="Choose your course" description={"Get flat 15% discount on course"}/>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                      {
                        courses && courses.length > 0 && courses.map((d,i)=>(
                            <Productcart data={d} key={`Product-details-${i}`} 
                            handleaddtocart={handleaddtocart} 
                            disabled={cart.filter((cItem)=> cItem.coursename === d.coursename).length > 0 ? true : false}
                            iscartbuttonvisible={true}
                            />
                        ))
                      }
                    </div>
                </div>
            </section>
            
    </div>) 
}