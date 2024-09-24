import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const MyButton = styled("button")({
  backgroundColor: "lightgreen",
  border: 0,
  borderRadius: "5px",
  padding: "10px",
  color: "darkgreen",
  marginTop: "20px",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "lightblue",
  },
});

const Box = styled("div")({
  maxWidth: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        <Typography variant="h2">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
        <MyButton onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle Theme
        </MyButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;
