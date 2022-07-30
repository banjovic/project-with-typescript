import React, { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

const Hero: FC = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ pt: "96px", pb: "96px" }}>
        <Typography
          sx={{
            color: "#7F56D9",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            fontFamily: "Inter",
            fontStyle: "normal",
          }}
        >
          Our blog
        </Typography>
        <Typography
          variant="h2"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: "60px",
            letterSpacing: "-0.02em",
            color: "#101828",
            fontFamily: "Inter",
            fontStyle: "normal",
          }}
        >
          Resources and insights
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "30px",
            color: "#667085",
            fontFamily: "Inter",
            fontStyle: "normal",
            pt: "10px",
          }}
        >
          The latest industry news, interviews, technologies, and resources.
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
