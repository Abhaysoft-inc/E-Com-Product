// ./src/ImageSlider.js
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1100/500/image/571815371a8af403.jpg?q=90",
    "https://rukminim1.flixcart.com/fk-p-flap/1100/500/image/be9435a41760e71c.jpg?q=90",
    "https://rukminim1.flixcart.com/fk-p-flap/1100/500/image/19afb72ab9460fba.jpg?q=90",
    "https://rukminim1.flixcart.com/fk-p-flap/1100/500/image/988483b9eb08478e.jpg?q=90",
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    // Automatic sliding
    useEffect(() => {
        const timer = setInterval(nextSlide, 2000);
        return () => clearInterval(timer); // Clear the timer on component unmount
    }, []);

    return (
        <div className="relative w-full max-w-2xl mx-auto" {...handlers}>
            <div className="overflow-hidden relative h-44">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} className="mt-1 mb-0 pb-0 object-contain" />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ImageSlider;
