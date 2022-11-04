import React from 'react';

function Carousel({img,title,description}) {
  return (
    <div className='carousel'>
        <img src={img} alt={title}/>
        <div className='info'>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={title}>View more</a>
        </div>
    </div>
  );
}

export default Carousel;
