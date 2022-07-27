import { Box, Grid } from "@mui/material";
import { FooterTitle } from "../../styles/footer";
import { Colors } from "../../theme";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
    return (
        <Box
            sx={{
                m: 2,
                color: Colors.white,
                p: { xs: 4, md: 8 },
                pt: 12,
                pb: 12,
                fontSize: { xs: "12px", md: "14px" },
            }}
        >
            <Grid container spacing={2} justifyContent="flex">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1" color="black">
                        {" "}
                        Let's Connect!
                    </FooterTitle>

                    <Box
                        sx={{
                            mt: 4,
                            color: Colors.dove_grey,
                        }}
                    >
                        <LinkedInIcon
                            sx={{ mr: 1 }}
                            onClick={(event) =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/cierraelle")
                            }
                        />
                        <GitHubIcon
                            sx={{ mr: 1 }}
                            onClick={(event) =>
                                (window.location.href =
                                    "https://github.com/cierram08")
                            }
                        />
                        <TwitterIcon
                            onClick={(event) =>
                                (window.location.href =
                                    "https://twitter.com/thetechbeauty")
                            }
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
