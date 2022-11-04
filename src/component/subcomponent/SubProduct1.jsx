import React from 'react';

function SubProduct1({imgSrc,title,price,id}) {
  return (
      <div className='subProduct1'>
          <div className='image'>
              <a href={`product/${id}`}>
                <img src={imgSrc} alt={title}/>      
              </a>
          </div>
        <div className='colors'>
            <span></span>
        </div>
        
        <div className='info'>
            <span>{title}</span>
            <span>£{price}</span>
        </div>

    </div>
  );
}

export default SubProduct1;