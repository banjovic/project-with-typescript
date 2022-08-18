import { Box } from "@mui/material";
import React, { FC } from "react";
import FooterNavBar from "./footerNavBar/FooterNavBar";
import NewsletterSignUp from "./newsletterSignUp/NewsletterSignUp";

const Footer: FC = () => {
  return (
    <Box>
      <NewsletterSignUp />
      <FooterNavBar />
    </Box>
  );
};

export default Footer;
