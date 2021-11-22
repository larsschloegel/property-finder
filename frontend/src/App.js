import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchInputs from "./pages/SearchInputs";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import unitsResponse from "./units.json";
import GlobalStyle from "./styles/theme";
import useProperties from "./hooks/useProperties";
import Page from "./components/Page";
import "./styles/app.sass";
import Home from "./screens/Home";

export default function App() {
    const {properties} = useProperties();

    const units = unitsResponse;

    return (
        <ThemeProvider theme={GlobalStyle}>
                <Router>
                    <Switch>
                        <Route
                            exact path="/"
                            render={() => (
                                <Page>
                                    <Home/>
                                </Page>
                            )}
                           />
                        <Route exact path="/search-inputs">
                            <Page>
                                <SearchInputs/>
                            </Page>
                        </Route>
                        <Route exact path="/properties">
                            <Page>
                                <Properties properties={properties}/>
                            </Page>
                        </Route>
                        <Route exact path="/properties/:id">
                            <Page>
                                <PropertyDetails units={units}/>
                            </Page>
                        </Route>
                    </Switch>
                </Router>

        </ThemeProvider>

    );
}
const PageLayout = styled.div`
  background-color: ${props => props.theme.colors.sandyBrownTint};
  padding: 20px;
`
