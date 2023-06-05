import React from "react";
import "../styles/admin.min.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";


export default function Adminlayout({children}){
    return (<div><div>
        <div id="wrapper">
    
           <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
    
                <div id="content">
    
                <Navbar/>
    
                    <div className="container-fluid">
    
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1><div className="container">{children}</div>
                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                        </div>
    
                        <div className="row">
    
                        </div>
    
    
                        <div className="row">
    
                           
                        </div>
    
                        <div className="row">
    
                        </div>
    
                    </div>
    
                </div>
    
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
    
            </div>
    
        </div>
    
        <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
        </a>
    
        <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a className="btn btn-primary" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div></div>)
}