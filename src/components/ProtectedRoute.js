import React from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({auth,component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render = {() => auth ? 
                (
                    <Component />
                )
            :
                (
                    <Redirect to=
                    {{
                        pathname:'/login',
                        state: {
                            message: 'You must be logged in to access'
                        }
                    }}
                    />
                )
            }
        />
    )

}

export const ProtectedLogin = ({auth,component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render = {() => !auth ? 
                (
                    <Component />
                )
            :
                (
                    <Redirect to=
                    {{
                        pathname:'/'
                    }}
                    />
                )
            }
        />
    )

}