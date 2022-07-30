import { Box, Container, Grid, Pagination, Stack } from "@mui/material";
import React, { FC } from "react";
import BlogGrid from "./BlogGrid";
import SideBlogMenu from "./SideBlogMenu";
import "./BlogLayout.scss";

const BlogLayout: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl">
        <Grid container spacing={1} sx={{ mb: 5 }}>
          <Grid item sm={4} sx={{ display: { xs: "none", md: "flex" } }}>
            <SideBlogMenu />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            sx={{ display: { xs: "block", sm: "flex" } }}
          >
            <BlogGrid />
          </Grid>
        </Grid>

        <Stack
          spacing={2}
          sx={{
            justifyContent: "center",
            borderTop: "1px solid #EAECF0",
            pt: 1.5,
            alignItems: "center",
          }}
        >
          <Pagination count={10} showFirstButton showLastButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogLayout;
