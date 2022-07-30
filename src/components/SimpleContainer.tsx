import React, { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface Props {
  children: ReactNode;
}

export default function SimpleContainer(props: Props) {
  const { children } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#ffffff", height: "100vh" }}>{children}</Box>
      </Container>
    </React.Fragment>
  );
}
