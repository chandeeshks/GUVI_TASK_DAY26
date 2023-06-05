import React, { useState } from "react";

export default function CartCard({data={}}){
    const [count, setcount] = useState(0)
    function addcount(type=""){
        if(type === "increment"){
            setcount(count+1);
        }
        else{
            setcount(count-1)
        }
    }

    return(<div className="card mb-3">
    <div className="row">
        <div className="col-3">
            <img
             style={{
            width:"150px"
             }}
             src={data.courseimage} />
        </div>
        <div className="col-7 p-3">
            <h5>{data.coursename}</h5>
            <p>Course description</p>
            <h5>${data.actualprice}</h5>
        </div>
        <div className="col-2 py-3 d-flex align-items-end">
            <div className=" cart-counter">
                <button className="btn btn-primary btn-sm" onClick={()=>addcount("decrement")}>-</button>
                <p>{count}</p>
                <button className="btn btn-primary btn-sm" onClick={()=>addcount("increment")}>+</button>
            </div>
        </div>
    </div>
</div>)
}