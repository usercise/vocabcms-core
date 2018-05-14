import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { IVocabCMSProps, IVocabCMSState, IRoute } from "./interface";
import LoadingScreen from './template/LoadingScreen';

export default class VocabCMS extends React.Component<IVocabCMSProps, IVocabCMSState> {
    constructor(props: IVocabCMSProps) {
        super(props);
        const emptyRoute: Array<IRoute> = [];
        if (props.initialState && props.initialState.routes) {
          this.state = {
              routes: props.initialState.routes,
          }
        }
        else {
          this.state = {
              routes: emptyRoute,
          }
        }
    }

    addRoute(route: IRoute) {
        this.setState((prevState) =>
            ({routes: [...prevState.routes, route]})
        );
    }

    render() {
        return (
            <Router>
                <Switch>
                    {this.state.routes.map(
                        (route, i) =>
                            <Route key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    render={props => (
                                        <p>{route.template}</p>
                                    )}
                    />)}
                    <Route key="loadingScreen" render={({ match }) =>
                      <LoadingScreen pageLookupServicelUrl="/_reserved/api/omnibus" addRoute={this.addRoute.bind(this)} match={match} />
                    } />
                </Switch>
            </Router>
        );
    }
}
