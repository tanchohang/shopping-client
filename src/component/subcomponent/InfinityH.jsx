import React from 'react';
import SubProduct1 from './SubProduct1';

function InfinityH({heading}) {
  return (
    <div className="infinityH">
      <h2 className="heading">{heading}</h2>
      <div className="display">
        <SubProduct1
          title="windproof extra warm lined trousers"
          price="40"
          imgSrc="https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450282/item/eugoods_33_450282.jpg?width=450&impolicy=quality_70"
        />
        <SubProduct1
          title="windproof extra warm lined trousers"
          price="40"
          imgSrc="https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450282/item/eugoods_33_450282.jpg?width=450&impolicy=quality_70"
        />
        {/* <SubProduct1
          title="windproof extra warm lined trousers"
          price="40"
          imgSrc="https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450282/item/eugoods_33_450282.jpg?width=450&impolicy=quality_70"
        />
        <SubProduct1
          title="windproof extra warm lined trousers"
          price="40"
          imgSrc="https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450282/item/eugoods_33_450282.jpg?width=450&impolicy=quality_70"
        />
        <SubProduct1
          title="windproof extra warm lined trousers"
          price="40"
          imgSrc="https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450282/item/eugoods_33_450282.jpg?width=450&impolicy=quality_70"
        />
        <SubProduct1
          title="windproof extra warm lined trousers"
          price="40"
          imgSrc="https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450282/item/eugoods_33_450282.jpg?width=450&impolicy=quality_70"
        />
        <SubProduct1
          title="windproof extra warm lined trousers"
          price="40"
          imgSrc="https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450282/item/eugoods_33_450282.jpg?width=450&impolicy=quality_70"
        />
        <SubProduct1
          title="windproof extra warm lined trousers"
          price="40"
          imgSrc="https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450282/item/eugoods_33_450282.jpg?width=450&impolicy=quality_70"
        /> */}
      </div>

      <div className="indicator">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default InfinityH;
