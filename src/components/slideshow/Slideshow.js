import React, { useState, useEffect } from 'react';
import './slideshow.css';

const Slideshow = ({ slides, slideDuration = 5000, fadeDuration = 500 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setNextSlide((prevSlide) => (prevSlide + 2) % slides.length);
        setFade(true);
      }, fadeDuration);
    }, slideDuration);

    return () => clearInterval(slideInterval);
  }, [slides.length, slideDuration, fadeDuration]);

  return (
    <div className="slideshow-container">
      <img
        src={slides[nextSlide].imageUrl}
        alt={slides[nextSlide].altText}
        className="slideshow-image waiting-slide"
      />
      <img
        src={slides[currentSlide].imageUrl}
        alt={slides[currentSlide].altText}
        className={`slideshow-image ${fade ? 'fade-in' : 'fade-out'}`}
        style={{ transition: `opacity ${fadeDuration}ms ease-in-out` }}
      />
    </div>
  );
};

export default Slideshow;