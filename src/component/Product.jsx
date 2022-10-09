import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


const Product=({title,image,description,price})=>{
    return(
        <article className="product">
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
<section className="size-selector" style={{"marginTop":"-30px"}}>
    <div> Select A Size</div>
    <span className="">XS</span>
    <span className="">S</span>
    <span className="">M</span>
    <span className="">L</span>
    <span className="">XL</span>


</section>

const ColorSelector=()=><section className="color-selector">
<span className=""></span>
<span className=""></span>
<span className=""></span>



</section>




const WishButton=()=><FontAwesomeIcon icon={faHeart}/>
export default Product;