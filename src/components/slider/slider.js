import React, { useState } from "react";
import "./slider.css";
import BtnSlider from "./btnslider";
import data from "./images/data.js";

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== data.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === data.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (setSlideIndex === 1) {
            setSlideIndex(data.length);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (
        <React.Fragment>
            <div className="container-slider">
                {data.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={
                                slideIndex === index + 1
                                    ? "slide active-anim"
                                    : "slide"
                            }
                        >
                            <img
                                src={`/sliderimg/img${index + 1}.jpg`}
                                alt=""
                            />
                        </div>
                    );
                })}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                <div className="container-dots">
                    {Array.from({ length: 5 }).map((obj, index) => (
                        <div
                            key={index.id}
                            onClick={() => moveDot(index + 1)}
                            className={
                                slideIndex === index + 1 ? "dot active" : "dot"
                            }
                        ></div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}
