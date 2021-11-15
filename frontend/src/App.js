import Header from "./components/Header";
import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchInputs from "./pages/SearchInputs";
import Properties from "./pages/Properties";
import Login from "./pages/Login";
import PropertyDetails from "./pages/PropertyDetails";
import propertyResponse from "./properties.json";
import unitsResponse from "./units.json";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {

  const properties = propertyResponse;
  const units = unitsResponse;

  return (
      <ThemeProvider theme={GlobalStyle}>
        <PageLayout>
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>
              <Route exact path="/search-inputs">
                <SearchInputs/>
              </Route>
              <Route exact path="/properties">
                <Properties properties={properties}/>
              </Route>
                <Route exact path="/properties/:id">
                    <PropertyDetails properties={properties} units={units}/>
                </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
            </Switch>
          </Router>
        </PageLayout>
      </ThemeProvider>

  );
}
const PageLayout = styled.div`
  background-color: ${props => props.theme.colors.sandyBrownTint};
  padding: 20px;
`
