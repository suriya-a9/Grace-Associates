import React from 'react';

const TestiMonialsDetails = ({ testiMonialDetail }) => {
    const { name, address, description, img } = testiMonialDetail;
    console.log("testiMonialDetail" + testiMonialDetail)
    return (
        <div class="item home-slide">
            <div class="shadow-effect">
                <img class="img-circle" src={img} />
                {/* <p>{description}</p> */}
            </div>
            <div class="testimonial-name">
                <h5>{name}</h5>
                {/* <p>{description}</p> */}
            </div>
        </div>
    );
};

export default TestiMonialsDetails;