import React,{useEffect, useState} from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Productcart from "../Components/Cards";
import CategoryCard from "../Components/Cards/CategoryCard";

export default function Courses(){
    const [courses, setcourses] = useState([]);
    const [cart, setcart] = useState([]);
    useEffect(()=>{
        fetch("mocks/courses.json").then((response)=> response.json())
        .then((data)=> {
            if( data && data.courses.length > 0){
                setcourses(data.courses)
            }
        })
        .catch((error)=> console.log(error))
    },[]);
    
    function handleaddtocart(data={}){
        if(data){
            let cartcopy = [...cart];
            cartcopy.push(data);
            setcart(cartcopy);
        }
    }
    // const Removefromcart = value =>{
    //     setcourses(oldvalue  =>{
    //         return oldvalue.filter(d => d != value)
    //     })
    // }

    return(
        <div>
             <Header heading="Choose your course" description={"Get flat 15% discount on course"}/>
            <section className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <CategoryCard/>
                      {
                        courses && courses.length > 0 && courses.map((d,i)=>(
                            <Productcart data={d} key={`Product-details-${i}`}/>
                        ))
                       
                      }
                    </div>
                </div>
                    </div>
                </div>
            </section>
            
    </div>) 
}