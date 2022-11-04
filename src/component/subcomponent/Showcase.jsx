import React from 'react';
import SubHero from './SubHero';
import SubProduct1 from './SubProduct1';

function Showcase({heading}) {
    return (
        <div className='showcase'>
            <h2 className='heading'>{heading}</h2>
            <div className='main'>
            <div className='display'>
                <SubHero
                img="https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/homepage/october/221003/pc-l2-newarrivals-m-hybrid-down-coat.jpg"
                title="Hybrid down outerwear"
                description="Our hybrid down outerwear uses a combination of bio-warming padding and down with a laminated lining and durable water-repellent coating."    
                />
            </div>
            <div className='products'>
        <SubProduct1
          imgSrc="https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450200/item/eugoods_31_450200.jpg?width=450&impolicy=quality_70"
          title="WINDPROOF OUTER FLEECE JACKET"
          price="50"
          id="4"
        
        />
         <SubProduct1
          imgSrc="https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450200/item/eugoods_31_450200.jpg?width=450&impolicy=quality_70"
          title="WINDPROOF OUTER FLEECE JACKET"
          price="50"
          id="4"
        
        />
                </div>
                </div>
        </div>
    );
}

export default Showcase;