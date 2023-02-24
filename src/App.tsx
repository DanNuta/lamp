import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { About, Home, Filter, Galery, Contact } from "./section";
import { RootNav } from "./layouts/RootNav/RootNav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/material/styles";
import { GlobalStyle } from "./Css/GlobalStyle";
import { HomePage } from "./pages/Home";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootNav />}>
        <Route index element={<Home />} />
        <Route path="#about" element={<About />} />
        <Route path="#catalog" element={<Filter />} />
        <Route path="#galery" element={<Galery />} />
        <Route path="#testinomial" element={<Filter />} />
        <Route path="#contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
