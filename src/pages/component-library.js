import React from "react";
import Layout from "../components/layout";
import "../styles/component-library.css";

import ButtonWhite from "../components/buttons/button-white";
import Slideshow from "../components/slideshow/Slideshow";

// Import images
import image1 from "../images/350-1080x720.jpg";
import image2 from "../images/575-1080x720.jpg";
import image3 from "../images/778-1080x720.jpg";

const ComponentLibrary = () => {

    const slides = [
        {
            imageUrl: image1,
            altText: "Slide 1",
        },
        {
            imageUrl: image2,
            altText: "Slide 2",
        },
        {
            imageUrl: image3,
            altText: "Slide 3",
        },
    ];

    return (
        <Layout>
            <section className="hero-main-container">
                <div className="hero-text-container ">
                    <div className="hero-text-content">
                        <h1>Component Library</h1>
                        <p>Beautifully designed, expertly crafted components and templates, 
                            built by the makers of Tailwind CSS. The perfect starting point 
                            for your next project.</p>
                        <ButtonWhite text="Browse components" onClick={() => console.log("Button Clicked")}/>
                    </div>
                </div>
                <div className="hero-video-container">
                    <Slideshow slides={slides} slideDuration={10000} fadeDuration={1000}/>
                </div>
            </section>
        </Layout>
    );
};

export default ComponentLibrary;