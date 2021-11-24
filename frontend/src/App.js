import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchInputs from "./pages/SearchInputs";
import unitsResponse from "./units.json";
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
        <Router>
            <Switch>
                <Route exact path="/"
                       render={() => (
                           <Page>
                               <Property/>
                           </Page>
                       )}
                />
                <Route exact path="/search-inputs"
                       render={() => (
                           <Page separatorHeader>
                               <SearchInputs/>
                           </Page>
                       )}
                />
                <Route exact path="/properties"
                       render={() => (
                           <Page separatorHeader>
                               <Catalog properties={properties}/>
                           </Page>
                       )}
                />
                <Route exact path="/properties/:id"
                       render={() => (
                           <Page separatorHeader>
                               <Details units={units}/>
                           </Page>
                       )}
                />
            </Switch>
        </Router>


    );
}
const PageLayout = styled.div`
  background-color: ${props => props.theme.colors.sandyBrownTint};
  padding: 20px;
`
