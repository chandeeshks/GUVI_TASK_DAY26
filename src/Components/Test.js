import React from "react";

export default function Test({data}){
    return(
    <div className="box App justify-content-center" 
    style={{background : data.teamcolor}}>
    {data.name}
    <img style={{
        width:"100px",
        height:"100px"
    }} src={data.logo} alt={data.name}/>
    <h3>{data.shortname}</h3>
    </div>)
}