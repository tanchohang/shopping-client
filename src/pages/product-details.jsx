import React, { useState } from 'react';
import MultiView from '../component/subcomponent/MultiView';
import SingleView from '../component/subcomponent/SingleView';

function ProductDetail() {
    const [view, setView] = useState('single');
    const images = [
        'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/452522/sub/goods_452522_sub11.jpg?width=1083&impolicy=quality_60&imformat=chrome',
        'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/452522/sub/goods_452522_sub12.jpg?width=1083&impolicy=quality_60&imformat=chrome',
        'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/452522/sub/goods_452522_sub13.jpg?width=1083&impolicy=quality_60&imformat=chrome',
        'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/452522/sub/goods_452522_sub14.jpg?width=1083&impolicy=quality_60&imformat=chrome',
        'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/452522/sub/goods_452522_sub17.jpg?width=1083&impolicy=quality_60&imformat=chrome',
        'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/452522/sub/goods_452522_sub18.jpg?width=1083&impolicy=quality_60&imformat=chrome',
        'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/452522/sub/goods_452522_sub20.jpg?width=1083&impolicy=quality_60&imformat=chrome',
        'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/452522/sub/goods_452522_sub21.jpg?width=1083&impolicy=quality_60&imformat=chrome',
        'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/452522/sub/goods_452522_sub23.jpg?width=1083&impolicy=quality_60&imformat=chrome',
        
    ];
    return (
        <div className='product-detail'>
            <div className='view-toggle'>
                <a className='single' href='#'>Single</a>
                <a className='multi' href='#'>Multi</a>
            </div>
            <div className='product-view'>
                <div className='image-viewer'>
                    {/* <SingleView /> */}
                    <MultiView images={images} />
                </div>
                <div className='description'>
                    <h3 className='title'>Pants</h3>
                    <span className='price'>£20</span>

                    <div className='colors'></div>
                    <div className='sizes'></div>

                    <div className='buttons'>
                        <button className='add-to-bag'>add to big</button>
                        <button className='favorite'>favorite</button>
                    </div>

                </div>
            </div> 
            <div className='style-idea'>
                <h4>Style Hint/Complete Look</h4>
            </div>

            <div className='reccomendation'>
            <h4> You Might Also Like</h4>
            </div>
            

            
            
        </div>
    );
}

export default ProductDetail;