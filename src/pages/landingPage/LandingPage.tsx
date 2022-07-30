import React, { FC } from "react";
import BlogLayout from "../../components/blog/BlogLayout";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import NavBar from "../../components/navBar/NavBar";
import SimpleContainer from "../../components/SimpleContainer";

const LandingPage: FC = () => {
  return (
    <div>
      <SimpleContainer>
        <NavBar />
        <Hero />
        <BlogLayout />
        <Footer />
      </SimpleContainer>
    </div>
  );
};

export default LandingPage;
