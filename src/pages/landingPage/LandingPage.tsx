import { Box } from "@mui/material";
import React, { FC } from "react";
import BlogLayout from "../../components/blog/BlogLayout";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import NavBar from "../../components/navBar/NavBar";
import SimpleContainer from "../../components/SimpleContainer";

const LandingPage: FC = () => {
  return (
    <Box
      sx={{
        background: "#ffffff",
      }}
    >
      <SimpleContainer>
        <NavBar />
        <Hero />
        <BlogLayout />
        <Footer />
      </SimpleContainer>
    </Box>
  );
};

export default LandingPage;
