import React, { FC } from "react";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import "../Footer.scss";

const FooterNavBar: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        pt: "71px",
        pb: "48px",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "44px",
            letterSpacing: "-0.02em",
            color: "#101828",
          }}
        >
          Sign up for our newsletter
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "30px",
            color: "#667085",
          }}
        >
          Be the first to know about releases and industry news and insights.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "16px",
            width: 460,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Enter your email"
            type="email"
            id="name"
            autoFocus
          />
          <Button variant="contained" className="subscribe-button">
            Subscribe
          </Button>
        </Box>

        <FormLabel
          component="legend"
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#667085",
          }}
        >
          We care about your data in our{" "}
          <span style={{ textDecoration: "underline" }}>privacy policy</span>.
        </FormLabel>
      </Box>
    </Box>
  );
};

export default FooterNavBar;
