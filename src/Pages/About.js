import React from 'react'
import { Stack, Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GitHub } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import Cv from "../Pages/images/img.jpg"



function AboutUs() {
    return (
        <>

            <Stack p={{ xs: "15px", sm: "25px", md: "60px", lg: "60px " }}>
                <h1 className="template-header-title">Resume Builder</h1>
                <Stack
                    className="midContainer"
                    direction={{
                        xs: "column-reverse",
                        sm: "column-reverse",
                        md: "column-reverse",
                        lg: "row",
                    }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    mt="20px"
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "13px",
                                sm: "15px",
                                md: "17px",
                                lg: "19px",
                            },
                            paddingRight: {
                                xs: "15px",
                                sm: "18px",
                                lg: "25px",
                            },
                            textAlign: "justify",
                        }}
                    >
                        Resume Builder is a web-based application that allows you to quickly and effortlessly create your resume.
                        It offers a range of professionally designed templates to choose from. You also have the option to upload your
                        profile picture to enhance the visual appeal of your resume. After filling in the required fields, you can preview 
                        your resume and download it to your computer. Additionally, the application enables you to make updates to your previously 
                        created resumes also you can delete resume.
                    </Typography>
                    <Stack
                        sx={{
                            width: "30%",
                            placeSelf: "center",
                        }}
                    >
                        <img
                            src={Cv}
                            alt="img"
                        />
                    </Stack>
                </Stack>
                <Box mt="25px">
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "22px",
                                sm: "25px",
                                md: "27px",
                                lg: "30px",
                            },
                            fontWeight: "400",
                            color: "dark",
                        }}
                    >
                        Kindly Share With Your  Friends
                    </Typography>
                    <Box className="icons">
                        <Link to="https://www.instagram.com">
                            <Instagram
                                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                                color="error"
                            />
                        </Link>

                        <Link to="https://www.facebook.com">
                            <FacebookOutlinedIcon
                                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                                color="primary"
                            />
                        </Link>

                        <Link to="https://www.linkedin.com/in/sourabh-rathore-72b776216/">
                            <LinkedInIcon
                                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                                color="primary"
                            />
                        </Link>
                        <Link to="https://web.whatsapp.com">
                            <WhatsAppIcon
                                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                                color="success"
                            />
                        </Link>
                        <Link to="https://www.twitter.com">
                            <TwitterIcon
                                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                                color="info"
                            />
                        </Link>
                        <Link to="https://github.com/Sourabhrr33">
                            <GitHub
                                sx={{ fontSize: "40px", paddingLeft: "15px", color: "black" }}
                            />
                        </Link>
                    </Box>
                </Box>
            </Stack>


        </>
    )
}

export default AboutUs
