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
import React, { FC, useMemo, useState } from "react";

// function generate(element: React.ReactElement) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

const blogCategories = [
  { id: 0, name: "View all" },
  { id: 1, name: "Design" },
  { id: 2, name: "Product" },
  { id: 3, name: "Software Engineering" },
  { id: 4, name: "Customer Success" },
  { id: 5, name: "Leadership" },
  { id: 6, name: "Management" },
];

// const Demo = styled("div")(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

const SideBlogMenu: FC = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleText = (event: any) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredBlogCategories = blogCategories.filter((blogCategory) => {
    return blogCategory.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Paper component="form" className="search-box">
          <IconButton
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            // fullWidth
            placeholder="Search templates"
            inputProps={{ "aria-label": "Search templates" }}
            onChange={handleText}
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
          {filteredBlogCategories.map((blogCategory) => (
            <ListItem key={blogCategory.id}>
              <ListItemText primary={blogCategory.name} />
            </ListItem>
          ))}
        </List>
        {/* </Demo> */}
      </Grid>
    </div>
  );
};

export default SideBlogMenu;
