import React from 'react';
import { useNavigate } from 'react-router-dom';

const PictureFrame = ({ title, img }) => {
  return (
    <div className="picture-frame">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};

function PictureWall({ list }) {
  const navigate = useNavigate();
  return (
    <div className="picture-wall">
      <h2>Featured Categories</h2>

      <div className="picture-frame-list">
        {list.map((item) => (
          <PictureFrame
            key={item.title}
            onClick={(e) => {
              navigate('product/1');
            }}
            title={item.title}
            img={item.imgSrc}
          />
        ))}
        ;
      </div>
    </div>
  );
}

export { PictureWall, PictureFrame };
