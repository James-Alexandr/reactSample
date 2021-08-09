
import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import Header from "./ui/header";
import theme from './ui/Theme'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route exact path="/customesoftware" component={() => <div>customesoftware</div>} />
          <Route exact path="/mobileapps" component={() => <div>mobile app</div>} />
          <Route exact path="/revolution" component={() => <div>revolution</div>} />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />

        </Switch>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
