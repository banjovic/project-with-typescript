import {
  // Box,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import { styled } from "@mui/material/styles";
import React, { FC } from "react";

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

// const Demo = styled("div")(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

const SideBlogMenu: FC = () => {
  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Paper component="form" className="search-box">
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            // fullWidth
            placeholder="Search templates"
            inputProps={{ "aria-label": "Search templates" }}
            // onChange={(e) => onSearchTempaltes(e)}
          />
        </Paper>
      </Stack>

      <Grid item xs={12}>
        <Typography
          sx={{
            mt: 4,
            mb: 2,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#6941C6",
          }}
          variant="h6"
          component="div"
        >
          Blog categories
        </Typography>
        {/* <Demo> */}
        <List>
          {generate(
            <ListItem>
              <ListItemText primary="View all" />
            </ListItem>
          )}
        </List>
        {/* </Demo> */}
      </Grid>
    </div>
  );
};

export default SideBlogMenu;
