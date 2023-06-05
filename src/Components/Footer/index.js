import React from "react";

export default function Footer({heading}){
    return(
        <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright © {heading}</p></div>
    </footer>
    )
}