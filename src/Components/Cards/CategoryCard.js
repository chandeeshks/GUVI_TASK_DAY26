import React from "react";
import { Link } from "react-router-dom";



export default function CategoryCard(){
    <div className="col-xl-4 col mb-5">
    <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
       
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Images"/>
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder"><Link style={{
                    textDecoration:"none"
                }}to={""}><p className="course-name">Category</p></Link></h5>
              <div>
                    <span className="text-muted text-decoration-line-through">₹Actualprice</span>
                    <span className="text-muted text-decoration-line-through">₹Dsicountprice</span>
                </div>  
            </div>
        </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                <button className="btn btn-outline-dark mt-auto" onClick={""} disabled={false}>Add to cart</button>
            </div>
        </div>

    </div>
</div>
}