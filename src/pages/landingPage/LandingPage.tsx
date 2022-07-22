import React, { FC, ReactNode } from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";

interface Props {
  children: ReactNode;
}

const LandingPage: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default LandingPage;
