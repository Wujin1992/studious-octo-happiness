/**
 * Protected Routes for authenticated users
 */
import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, isLoggedIn, ...rest }) {
    console.log("asdfasd");
    return (
        <Route
            { ...rest }
            render={ (props) => {
                if (isLoggedIn) {
                    return <Component { ...rest } { ...props } />
                } else {
                    return (
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    );
                }
            } }
        />
    );
}

export default ProtectedRoute;