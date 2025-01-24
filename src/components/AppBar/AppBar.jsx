import {
  AppBar as AppBarMui,
  Box,
  Toolbar,
  useTheme
} from "@mui/material";
import { NavLink } from "react-router";
import React from "react";

const navLinks = [
  { name: "Films", route: "films" },
  { name: "People", route: "people" },
  { name: "Planets", route: "planets" },
  { name: "Species", route: "species" },
  { name: "Starships", route: "starships" },
  { name: "Vehicles", route: "vehicles" },
];

export const AppBar = () => {
  const theme = useTheme();

  return (
    <AppBarMui
      sx={{
        backgroundColor: theme.palette.primary.main,
        boxShadow: theme.shadows[4]
      }}>
      <Toolbar>
        {/*Logo*/}
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: theme.palette.secondary.main,
            fontWeight: "bold",
            fontSize: "2rem", // Larger size for emphasis
            fontFamily: "'DISTGRG_', Arial, sans-serif", // Custom font
            marginRight: "auto",
            transition: "color 0.3s ease", // Smooth hover transition
          }}
          onMouseEnter={(e) => (e.target.style.color = theme.palette.stars.glow)}
          onMouseLeave={(e) => (e.target.style.color = theme.palette.secondary.main)}
        >
          Star DB
        </NavLink>

        {/*NavLinks*/}
        {navLinks.map(({ name, route }) => (
          <Box
            component={NavLink}
            key={name}
            to={route}
            sx={{
              textDecoration: "none",
              color: theme.palette.text.primary, // Light gray for regular state
              fontSize: "1rem", // Subtle font size
              fontWeight: 500,
              padding: "0 8px",
              transition: "color 0.3s ease, border-bottom 0.3s ease",
              "&.active": {
                color: theme.palette.secondary.main, // Highlight with yellow for active link
                borderBottom: `2px solid ${theme.palette.secondary.main}`, // Underline for active state
              },
              "&:hover": {
                color: theme.palette.info.main, // Galactic blue for hover effect
              },
            }}
          >
            {name}
          </Box>
        ))}

      </Toolbar>
    </AppBarMui>
  );
};
