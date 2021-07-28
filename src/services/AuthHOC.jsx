import React from "react";
import { Route, Redirect } from "react-router-dom";


export default ({ component: Component, ...rest }) => {
    const isAuthenticated = Boolean(localStorage.getItem("jwtToken"));

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    )
            }
        />);
};