import React from "react";
import "../styles/pricingdetails.css";
import PricingCard from "../Components/PricingCard";

export default function Princingpage(){
    const data=[{
        plan:"Free",
        price:10
    },{
        plan:"Padi",
        price:20
    },{
        plan:"Pro",
        price:15
    }]
    return(<section className="pricing py-5">
    <div className="container">
      <div className="row">
        {data && data.map((card,index)=>(
                <div key={`pricing-details ${index}`} class="col-lg-4">
                    <PricingCard details={card}/>
                </div>
            ))
        }
        </div>
      </div>
  </section>);
}