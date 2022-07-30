import React, { FC } from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import SimpleContainer from "../../components/SimpleContainer";

const BlogPost: FC = () => {
  return (
    <div>
      <SimpleContainer>
        <NavBar />
        <Footer />
      </SimpleContainer>
    </div>
  );
};

export default BlogPost;
