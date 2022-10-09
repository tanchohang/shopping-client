import React,{useState} from "react";
import { Link } from "react-router-dom";



function Navbar(){

    const [current,setCurrent]=useState('')
   

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
      <nav>
    <ul className="">
        <li className=" ">
            <Link to="sale" className="" >Sale</Link>
        </li>
      {navLink.map(link=>(
                         <li className="" key={link.title} onMouseEnter={()=>setCurrent(link.title)} onMouseLeave={()=>setCurrent('')}> 
                         <Link className="" to={link.title}>{link.title}</Link>
                         {
                            <ul className="">
                            {link.isSubmenu &&(                                    
                                        link.sublinks.map(sublink=>(
                                            <li key={sublink} className={current===link.title?"":""}>
                                                <Link to={sublink}>{sublink}</Link>
                                            </li>
                                        ))          
                            )}
                            </ul>
                         }                      
                     </li>
                    ))}
        
      </ul>
      </nav>
    )
}

export default Navbar;
