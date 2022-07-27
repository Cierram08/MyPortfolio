import { Divider } from "@mui/material";
import React from "react";
import { Carousel } from "react-bootstrap";

export default function BootstrapCarousel() {
    return (
        <div>
            <Divider />
            <Carousel interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        style={{ height: 500 }}
                        src={require("../images/cie6.jpg")}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        style={{ height: 500 }}
                        src={require("../images/makeup1.jpg")}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        style={{ height: 500 }}
                        src={require("../images/cie1.jpg")}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
