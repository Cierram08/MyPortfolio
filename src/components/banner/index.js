import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerTitle,
  } from "../../styles/banner";


export default function Banner() {
    


    return (
        <BannerContainer>
            <BannerImage src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/91124225_1418211751698850_4065901215337152512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GaKQ2o82PgAAX9UdrYK&tn=U0NvAz32PtYG-vQt&_nc_ht=scontent-lax3-2.xx&oh=00_AT9WhS5yp4ED9V0xGPB0UwZXRDdVFZ1iwFD7p1vsVgBOyg&oe=62D30C4E" />
        <BannerContent>
            <BannerTitle variant="h1"> welcome.</BannerTitle>
            <BannerDescription variant="subtitle" >
                    {" "}
                    Discover the story of how a licensed cosmetologist fell in love with coding.
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    );
}
