import React from 'react';
import{
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {PrivateRoutes } from './Routes';
import {PageWrapper} from "../components";

class Routing extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <PublicRoute
                        exact
                        name={PrivateRoutes.Main.name}
                        path={PrivateRoutes.Main.path}
                        component={PrivateRoutes.Main.component}
                       {...this.props}
                    />
                </Switch>
            </Router>
        )
    }
}


const PublicRoute =({component:Component,...rest})=>{
    return(
        <Route
            {...rest}
            render={props=>
                <PageWrapper>
                            <Component {...props} />
                    </PageWrapper>
            }
        />
    )
}

export default Routing;