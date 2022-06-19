import { Divider } from "@mui/material";
import React from "react";
import { Carousel } from "react-bootstrap";
import Banner from "./banner";

export default function BootstrapCarousel() {
    return (
        <div>
            <Banner />
            <Divider />
            <center>
                <p><i>
                    “You have no need to travel anywhere. Journey within
                    yourself, enter a mine of rubies and bathe in the splendour
                    of your own light.” -Rumi
                </i></p>
            </center>
            <Carousel interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        style={{ height: 500 }}
                        src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/93941934_1443857389134286_4678164179364872192_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eM93i6VYxPsAX8QERdc&tn=U0NvAz32PtYG-vQt&_nc_ht=scontent-lax3-2.xx&oh=00_AT-SM91WW6KBQVdPNAaqhWv2ThCc5Hgsgq0KVVsyK4YyIw&oe=62D321D3"
                        alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        style={{ height: 500 }}
                        src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/92944868_1435113953341963_4654104262198951936_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6RCfOJ98WcAAX9lsLf-&tn=U0NvAz32PtYG-vQt&_nc_ht=scontent-lax3-2.xx&oh=00_AT9FIR5qQcfSy27I6-EE3o4E1q9LpkjJrVSpv1qyc30cWw&oe=62D2579B"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        style={{ height: 500 }}
                        src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/87035405_1383561718497187_3170901825524072448_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OfkWd9QJtywAX_p1IU4&tn=U0NvAz32PtYG-vQt&_nc_ht=scontent-lax3-1.xx&oh=00_AT-ywrzG2uS8M4FOTt4vbrZKousycj1-y_9Ru4tUlP20JA&oe=62D36C00"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
