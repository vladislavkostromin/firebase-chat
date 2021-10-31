import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { privateRoutes, publicRoutes } from '../routes'
import { LOGIN_ROUTE, CHAT_ROUTE } from "../utils/constants"
import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'


const AppRouter = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    console.log(user);
    return user ? (
        <Switch>
            {privateRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact={true} />
            )}
            <Redirect to={CHAT_ROUTE} />
        </Switch> ) : (
        <Switch>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact={true} />
            )}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}

export default AppRouter;