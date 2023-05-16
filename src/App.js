import React, {useState} from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import {  temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema  from "./Components/SwitcherTema" 

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme( (theme) => !theme);
    };

  return (
    <ThemeProvider theme={theme ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTheme}>
        <SwitcherTema tema={theme}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
