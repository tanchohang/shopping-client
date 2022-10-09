import {Dropdown } from "bootstrap";
import React,{useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";



function Navbar(){

    const [current,setCurrent]=useState('')
    const ddRef = useRef() 

    useEffect(() => {
        var dd = new Dropdown(ddRef.current, {})
    })

    const navLink=[

        {
        "title":"men",
        "isSubmenu":true,
        "sublinks":["new arrivals","winterwear","summerwear","topwear","outerwear"]
        },
        {
            "title":"women",
            "isSubmenu":true,
            "sublinks":["new arrivals","winterwear","summerwear","topwear","outerwear"]
        },
        {
            "title":"kids",
            "isSubmenu":true,
            "sublinks":["new arrivals","winterwear","summerwear","topwear","outerwear"]
        }
    ]

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="home" className="navbar-brand" >Shopping</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className=" nav-item ">
            <Link to="sale" className="nav-link text-danger" >Sale</Link>
        </li>
      {navLink.map(link=>(
                         <li className="nav-item" key={link.title} onMouseEnter={()=>setCurrent(link.title)} onMouseLeave={()=>setCurrent('')}> 
                         <Link className="nav-link" to={link.title}>{link.title}</Link>
                         {
                            <ul className="">
                            {link.isSubmenu &&(                                    
                                        link.sublinks.map(sublink=>(
                                            <li key={sublink} className={current===link.title?"":"d-none"}>
                                                <Link to={sublink}>{sublink}</Link>
                                            </li>
                                        ))          
                            )}
                            </ul>
                         }                      
                     </li>
                    ))}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" ref={ddRef} aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" >Action</a></li>
            <li><a className="dropdown-item" >Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" >Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar;
