import { Box } from "@mui/material";
import { AppBar } from "@components/AppBar";
import { Outlet } from "react-router";

export const MainLayout = () => (
  <Box sx={{ display: "flex", flexDirection: "column", height: "100%", paddingBottom: 4 }}>
    <AppBar />
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        mt: 9,
        px: { xs: 2, md: 4 }
      }}>
      <Outlet />
    </Box>
  </Box>
);
