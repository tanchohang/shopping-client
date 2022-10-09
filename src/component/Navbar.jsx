import React,{useState} from "react";
import { Link } from "react-router-dom";



function Navbar(){

    const [current,setCurrent]=useState('')
    const[toggle,setToggle]=useState(false)
   

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
      <nav className="navbar">
        <div className="brand-title">Shopping</div>
        <Link className="toggle-button" onClick={e=>{
            console.log(toggle)
            setToggle(!toggle)
            }}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            
        </Link>
        <div className={`nav-links ${toggle?"active":""}`}>
            <ul>
                {navLink.map(link=>
                
                <li>
                    <Link to="sale" className="" >{link}</Link>
                </li>
                    
                )}
            </ul>
        </div>
      </nav>
    )
}

export default Navbar;
