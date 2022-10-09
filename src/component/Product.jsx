import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


const Product=({title,image,description,price})=>{
    return(
        <article className="product mb-3">
            <Image className="" image={image} desc={description}/>
            <SizeSelector/>
            <WishButton/>
            {/* <div className="row"><span className="col">{title}</span> <span className="col">£{price}</span></div> */}
           <div>{title}</div>
           <div>£{price}</div>
            <ColorSelector/>
        </article>
    )
}

const Image=({image,desc})=>
<img className="product-img" src={image} alt={desc}/>

const SizeSelector=()=>
<section className="size-selector bg-light row" style={{"marginTop":"-30px"}}>
    <div> Select A Size</div>
    <span className="col">XS</span>
    <span className="col">S</span>
    <span className="col">M</span>
    <span className="col">L</span>
    <span className="col">XL</span>


</section>

const ColorSelector=()=><section className="color-selector row">
<span className=" bg-danger"></span>
<span className=" bg-primary"></span>
<span className=" bg-light"></span>



</section>




const WishButton=()=><FontAwesomeIcon icon={faHeart}/>
export default Product;