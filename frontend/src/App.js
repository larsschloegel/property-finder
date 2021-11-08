import Header from "./components/Header";
import styled, {ThemeProvider} from "styled-components";
import stylesheet from "./styles/Stylesheet";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchInputs from "./pages/SearchInputs";
import Properties from "./pages/Properties";
import Login from "./pages/Login";
import PropertyDetails from "./pages/PropertyDetails";
import propertyResponse from "./properties.json";

export default function App() {

  const properties = propertyResponse;

  return (
      <ThemeProvider theme={stylesheet}>
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
                    <PropertyDetails/>
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
  background-color: #FFEAA7;
  padding: 20px;
`
