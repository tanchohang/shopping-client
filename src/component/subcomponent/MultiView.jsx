import React from 'react';

function MultiView({images}) {
    return (
        <>
            <div className='multi-view'>
            
                <div className='image-assets'>
                    {images.map(image=>
                        <img src={image} alt={image} />  
                    )}
                </div>


            </div>
        </>

    );
}

export default MultiView;