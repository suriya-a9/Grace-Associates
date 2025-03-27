import React from 'react';

const OurProductDetails = ({ testiMonialDetail }) => {
    const { name, address, description, img } = testiMonialDetail;
    console.log("testiMonialDetail" + testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={img} style={{borderRadius: '0px'}}/>
                {/* <p>{description}</p> */}
            </div>
            <div class="testimonial-name">
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OurProductDetails;