import React from "react";
import Product from "../../pages/Courses";
import { Link } from "react-router-dom";

export default function Productcart({data, handleaddtocart=(d)=>{},disabled=()=>{}, 
iscartbuttonvisible=false
}){
    return(
        <div className="col-xl-4 col mb-5">
        <div className="card h-100">
           {
            data.isforsale &&( <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>)
           }
            <img className="card-img-top" src={ data.courseimage || "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"} alt={Product.coursename}/>
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder"><Link style={{
                        textDecoration:"none"
                    }}to={`/courses/${data.id}`}><p className="course-name">{data.coursename}</p></Link></h5>
                   { Product.actualprice && Product.discountprice (<div>
                        <span className="text-muted text-decoration-line-through">₹{data.actualprice}</span>
                        <span className="text-muted text-decoration-line-through">₹{data.discountprice}</span>
                    </div>)}
                </div>
            </div>
            {iscartbuttonvisible && (<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <button className="btn btn-outline-dark mt-auto" onClick={()=>handleaddtocart(data)} disabled={disabled}>Add to cart</button>
                </div>
            </div>)}

        </div>
    </div>
    )
}