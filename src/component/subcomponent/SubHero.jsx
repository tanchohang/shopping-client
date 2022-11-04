import React from 'react';

function SubHero({img,title,description}) {
  return (
    <div className='sub-hero'>
        <img src={img} alt={title}/>
          <div className='info'>
              <h3>{title}</h3>
              <p>{description}</p>
          </div>
       
    </div>
  );
}

export default SubHero;
