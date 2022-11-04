import React from 'react';
import Hero from './subcomponent/Hero';
import InfinityH from './subcomponent/InfinityH';
import { PictureWall } from './subcomponent/PictureWall';
import Showcase from './subcomponent/Showcase';


const menCategories=[
  {"title":"outerware","imgSrc":"https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/homepage/september/220905/pc-l2-m-featcats-outerwear.jpg"},
  {"title":"knitwear","imgSrc":"https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/homepage/july/220718/pc-l2-m-featuredcat-knitwear.jpg"},
  {"title":"t-shirts","imgSrc":"https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/homepage/july/220718/pc-l2-m-featuredcat-tshirts-tops.jpg"},
  {"title":"trousers","imgSrc":"https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/homepage/july/220718/pc-l2-m-featuredcat-trousers.jpg"},
  {"title":"shirts","imgSrc":"https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/homepage/july/220718/pc-l2-m-featuredcat-shirts.jpg"},
  {"title":"jeans","imgSrc":"https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/homepage/july/220718/pc-l2-m-featuredcat-jeans.jpg"},
  {"title":"sweatshirts & hoddies","imgSrc":"https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/homepage/july/220718/pc-l2-m-featuredcat-sweatshirts.jpg"},
  {"title":"loungewear","imgSrc":"https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/homepage/august/220801/pc-l2-m-featcats-loungewear.jpg"},
];

const MainLayout = (filter) => {

  
    return (
    
      <>
     
        <Hero img="https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/homepage/october/221003/pc-l2-m-452738.jpg"
          title="Ultra Light Down" description="Our Ultra Light Down collection features featherlight designs 
        filled with premium down padding and featuring a water-repellent finish to keep you warm, cosy, and 
        comfortable, whatever the weather."
        />
        <PictureWall list={menCategories} />
        <InfinityH heading="recommendations" />
        <Showcase heading="new arrivals" />
      </>
 
    

  );
};

export default MainLayout;
