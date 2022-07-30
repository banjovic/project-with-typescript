import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import BlogGridCard from "./BlogGridCard";
import UXImage from "../../assets/images/Image.png";
import Face1 from "../../assets/avatar/face1.jpg";
import "./BlogLayout.scss";
import { Link } from "react-router-dom";

const BlogGrid = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card
            sx={{
              maxWidth: "100%",
              mb: 3,
              flexWrap: "wrap",
              boxShadow: "none",
              display: { xs: "flex", sm: "flex", md: "grid" },
              gridTemplateRows: "1fr",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "1fr",
                lg: "2fr 1fr",
              },
            }}
          >
            <CardMedia
              component="img"
              //   height="320px"
              width="560px"
              image={UXImage}
              alt="Paella dish"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardActions disableSpacing>
                <Button size="small" sx={{ textTransform: "none" }}>
                  Design
                </Button>
                <Button size="small" sx={{ textTransform: "none" }}>
                  8 min read
                </Button>
              </CardActions>

              <CardContent>
                <Link to="/blog">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      cursor: "pointer",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "32px",
                      color: "#101828",
                    }}
                  >
                    UX review presentations
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "#667085",
                  }}
                >
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </Typography>
              </CardContent>

              <CardHeader
                avatar={<Avatar aria-label="recipe" src={Face1} alt="Face1" />}
                title="Olivia Rhye"
                subheader="20 Jan 2022"
              />
            </Box>
          </Card>
        </Grid>

        <BlogGridCard />
      </Container>
    </Box>
  );
};

export default BlogGrid;
