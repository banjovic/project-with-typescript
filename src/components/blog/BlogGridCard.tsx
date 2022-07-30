import React from "react";
import {
  Box,
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Grid,
  CardHeader,
  Avatar,
} from "@mui/material";
import MigratingImage from "../../assets/images/MigratingImage.png";
import BuildingImage from "../../assets/images/BuildingImage.png";
import LeadershipImage from "../../assets/images/LeadershipImage.png";
import PMImage from "../../assets/images/PMImage.png";
import WireframeImage from "../../assets/images/WireframeImage.png";
import CollabImage from "../../assets/images/CollabImage.png";
import JsFrameworkImage from "../../assets/images/JsFrameworkImage.png";
import PodcastImage from "../../assets/images/PodcastImage.png";
import Face2 from "../../assets/avatar/face2.jpg";
import Face3 from "../../assets/avatar/face3.jpg";
import Face4 from "../../assets/avatar/face4.jpg";
import Face5 from "../../assets/avatar/face5.jpg";
import Face6 from "../../assets/avatar/face6.jpg";
import Face7 from "../../assets/avatar/face7.jpg";
import Face8 from "../../assets/avatar/face8.jpg";
import Face9 from "../../assets/avatar/face9.jpg";
import "./BlogLayout.scss";

export default function BlogGridCard() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ maxWidth: 420 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={MigratingImage}
            />
            <CardActions>
              <Button size="small" sx={{ textTransform: "none" }}>
                Design
              </Button>
              <Button size="small" sx={{ textTransform: "none" }}>
                8 min read
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Migrating to Linear 101
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get started.
              </Typography>
            </CardContent>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={Face2} alt="Face2" />}
              title="Phoenix Baker"
              subheader="19 Jan 2022"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ maxWidth: 420 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={BuildingImage}
            />
            <CardActions>
              <Button size="small" sx={{ textTransform: "none" }}>
                Design
              </Button>
              <Button size="small" sx={{ textTransform: "none" }}>
                8 min read
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Building your API Stack
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </Typography>
            </CardContent>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={Face3} alt="Face3" />}
              title="Lana Steiner"
              subheader="18 Jan 2022"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ maxWidth: 420 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={LeadershipImage}
            />
            <CardActions>
              <Button size="small" sx={{ textTransform: "none" }}>
                Design
              </Button>
              <Button size="small" sx={{ textTransform: "none" }}>
                8 min read
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bill Walsh leadership lessons
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Like to know the secrets of transforming a 2-14 team into a 3x
                Super Bowl winning Dynasty?
              </Typography>
            </CardContent>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={Face4} alt="Face4" />}
              title="Alec Whitten"
              subheader="17 Jan 2022"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ maxWidth: 420 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={PMImage}
            />
            <CardActions>
              <Button size="small" sx={{ textTransform: "none" }}>
                Design
              </Button>
              <Button size="small" sx={{ textTransform: "none" }}>
                8 min read
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PM mental models
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mental models are simple expressions of complex processes or
                relationships.
              </Typography>
            </CardContent>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={Face5} alt="Face5" />}
              title="Demi WIlkinson"
              subheader="16 Jan 2022"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ maxWidth: 420 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={WireframeImage}
            />
            <CardActions>
              <Button size="small" sx={{ textTransform: "none" }}>
                Design
              </Button>
              <Button size="small" sx={{ textTransform: "none" }}>
                8 min read
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What is Wireframing?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Introduction to Wireframing and its Principles. Learn from the
                best in the industry.
              </Typography>
            </CardContent>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={Face6} alt="Face6" />}
              title="Candice Wu"
              subheader="15 Jan 2022"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ maxWidth: 420 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={CollabImage}
            />
            <CardActions>
              <Button size="small" sx={{ textTransform: "none" }}>
                Design
              </Button>
              <Button size="small" sx={{ textTransform: "none" }}>
                8 min read
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                How collaboration makes us better designers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Collaboration can make our teams stronger, and our individual
                designs better.
              </Typography>
            </CardContent>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={Face7} alt="Face7" />}
              title="Natali Craig"
              subheader="14 Jan 2022"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ maxWidth: 420 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={JsFrameworkImage}
            />
            <CardActions>
              <Button size="small" sx={{ textTransform: "none" }}>
                Design
              </Button>
              <Button size="small" sx={{ textTransform: "none" }}>
                8 min read
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Our top 10 Javascript frameworks to use
              </Typography>
              <Typography variant="body2" color="text.secondary">
                JavaScript frameworks make development easy with extensive
                features and functionalities.
              </Typography>
            </CardContent>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={Face8} alt="Face8" />}
              title="Drew Cano"
              subheader="13 Jan 2022"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ maxWidth: 420 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={PodcastImage}
            />
            <CardActions>
              <Button size="small" sx={{ textTransform: "none" }}>
                Design
              </Button>
              <Button size="small" sx={{ textTransform: "none" }}>
                8 min read
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Podcast: Creating a better CX Community
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Starting a community doesn’t need to be complicated, but how do
                you get started?
              </Typography>
            </CardContent>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={Face9} alt="Face9" />}
              title="Orlando Diggs"
              subheader="12 Jan 2022"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
