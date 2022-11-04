import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useState} from "react";
import { Link } from "react-router-dom";



function Navbar(){

    // const [current,setCurrent]=useState('');
    const[toggle,setToggle]=useState(false);
   

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
    ];

    return(
      <nav className="navbar">
        <div className="brand-title">Shopping</div>
        <span className="toggle-button" onClick={e=>{
            setToggle(!toggle);
            }}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            
        </span>
        <div className={`nav-links ${toggle?"active":""}`}>
            <ul>
                {navLink.map(link=>
                
                <li key={link.title}>
                    <Link to={link.title} className="" >{link.title}</Link>
                </li>
                    
                )}
                </ul>
                <Link to="cart">
                    <i className="icons">
                        <FontAwesomeIcon icon={faBagShopping} />
                    </i>  
                    </Link>    
        </div>
      </nav>
    );
}

export default Navbar;
