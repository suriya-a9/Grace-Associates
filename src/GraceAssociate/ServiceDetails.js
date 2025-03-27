import React from 'react';

const ServiceDetails = ({ testiMonialDetail }) => {
    const { name, address, description, img } = testiMonialDetail;
    console.log("testiMonialDetail" + testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={img} />
            </div>
            <div class="testimonial-name">
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;