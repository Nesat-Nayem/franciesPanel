import React, { useState } from "react";
import "./App.css";
import OftadehRoutes from "./components/OftadehRoutes/OftadehRoutes";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "./oftadeh-configs/themeConfig";
import ThemeContext from "./context/ThemeContext";
// import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const curThemeName = localStorage.getItem("appTheme") || "light";

  const [themeType, setThemeType] = useState(curThemeName);

  const setThemeName = (themeName) => {
    localStorage.setItem("appTheme", themeName);
    setThemeType(themeName);
  };

  const theme = getTheme({
    paletteType: themeType,
  });

  return (
    <ThemeContext.Provider value={{ setThemeName, curThemeName }}>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <PrivateRoute> */}
          <OftadehRoutes />
          {/* </PrivateRoute> */}
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
