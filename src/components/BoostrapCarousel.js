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
                        src={require('../images/cie6.jpg')}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        style={{ height: 500 }}
                        src={require('../images/makeup1.jpg')}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        style={{ height: 500 }}
                        src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/87035405_1383561718497187_3170901825524072448_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OfkWd9QJtywAX_p1IU4&tn=U0NvAz32PtYG-vQt&_nc_ht=scontent-lax3-1.xx&oh=00_AT-ywrzG2uS8M4FOTt4vbrZKousycj1-y_9Ru4tUlP20JA&oe=62D36C00"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
