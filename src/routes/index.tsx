import { Route, Switch } from "react-router";
import { Catalog } from "../pages/Catalog";
import { MovieDetails } from "../pages/MovieDetails";

export function Routes() {
  return(
    <Switch>
      <Route exact path='/' component={Catalog} />
      <Route path='/catalog/:id' component={MovieDetails} />
    </Switch>
  );
}