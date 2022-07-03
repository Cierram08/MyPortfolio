import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerTitle,
} from "../../styles/banner";
import BootstrapCarousel from "../BoostrapCarousel";
import { Typography } from "@mui/material";

export default function Banner() {
    return (
        <>
            <Typography align="center" >
                <span>
                    <i>
                        “You have no need to travel anywhere. Journey within
                        yourself, enter a mine of rubies and bathe in the
                        splendour of your own light.” -Rumi
                    </i>
                </span>
            </Typography>
            <BannerContainer sx={{ m: 2 }}>
                <BootstrapCarousel />
                <BannerContent>
                    <BannerTitle variant="h3"> coming soon..</BannerTitle>
                    <BannerDescription variant="subtitle">
                        Follow the journey of a beauty guru who fell in love
                        with coding.
                    </BannerDescription>
                </BannerContent>
            </BannerContainer>
        </>
    );
}
