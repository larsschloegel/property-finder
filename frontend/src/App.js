import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchInputs from "./pages/SearchInputs";
import unitsResponse from "./units.json";
import GlobalStyle from "./styles/theme";
import useProperties from "./hooks/useProperties";
import Page from "./components/Page";
import "./styles/app.sass";
import Property from "./screens/Property";
import Catalog from "./screens/Property/Catalog";
import Details from "./screens/Property/Catalog/Card/Details";

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
                                    <Property/>
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
                                <Catalog properties={properties}/>
                            </Page>
                        </Route>
                        <Route exact path="/properties/:id">
                            <Page>
                                <Details units={units}/>
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
