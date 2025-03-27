import React, { useEffect } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "./ImageGallery.css";
import TestiMonials from "./TestiMonials";

const ImageGallery = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.gallery-img');

    const handleScroll = () => {
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          image.classList.add('fadeInUp');
        } else {
          image.classList.remove('fadeInUp');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="image_gallery_section">
        <div className="container">
          <h2 className="bordered_text"><span>Product Gallery</span></h2>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <LightGallery plugins={[lgThumbnail, lgZoom]} speed={500}>
                  <a
                    href="https://graceassociate.com/assets/gallery/1_x9PO8x3CIfxzhulHye72gA 1.webp"
                    className="col-md-4"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      className="gallery-img small-img"
                      src={"/assets/gallery/1_x9PO8x3CIfxzhulHye72gA 1.webp"}
                      alt="Image 1"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://graceassociate.com/assets/gallery/i18npic.240x180.gallery-1.webp"
                    className="col-md-4"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      className="gallery-img medium-img"
                      src={"/assets/gallery/i18npic.240x180.gallery-1.webp"}
                      alt="Image 2"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://graceassociate.com/assets/paper-bag-about-us.webp"
                    className="col-md-4"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      className="gallery-img large-img large"
                      src={"/assets/paper-bag-about-us.webp"}
                      alt="Image 3"
                      loading="lazy"
                    />
                  </a>
                </LightGallery>
                <LightGallery plugins={[lgThumbnail, lgZoom]} speed={500}>
                  <a
                    href="https://graceassociate.com/assets/paper-bag-about-us.webp"
                    className="col-sm-12"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      className="gallery-img large-img smalls"
                      src={"/assets/paper-bag-about-us.webp"}
                      alt="Image 3"
                      loading="lazy"
                    />
                  </a>
                </LightGallery>
              </div>
              <TestiMonials />
              <div className="row">
                <LightGallery plugins={[lgThumbnail, lgZoom]} speed={500}>
                  <a
                    href="https://graceassociate.com/assets/gallery/i18npic.240x180.gallery-3.webp"
                    className="col-md-5"
                    style={{ display: "inline-block", width: "45%" }}
                  >
                    <img
                      className="gallery-img small-img"
                      src={"/assets/gallery/i18npic.240x180.gallery-3.webp"}
                      alt="Image 1"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://graceassociate.com/assets/gallery/i18npic.240x180.product-2.webp"
                    className="col-md-6"
                    style={{ display: "inline-block", width: "45%" }}
                  >
                    <img
                      className="gallery-img medium-img"
                      src={"/assets/gallery/i18npic.240x180.product-2.webp"}
                      alt="Image 2"
                      loading="lazy"
                    />
                  </a>
                </LightGallery>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageGallery;