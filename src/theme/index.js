import { createTheme } from "@mui/material/styles";

import { general } from "./general";
import { typography } from "./typography";
import { palette } from "./palette";
import { basicStyles } from "./basic";

const initTheme = {
  ...general,
  basicStyles,
  palette,
  typography,
};

export const theme = createTheme(initTheme);