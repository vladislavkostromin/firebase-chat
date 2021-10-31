import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Grid, Button } from '@material-ui/core'
import ExitToAppOutlined from '@material-ui/icons/ExitToAppOutlined'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/constants'
import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'

const Navbar = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent={'flex-end'}>
                    {user ? 
                        <Button onClick={() => auth.signOut()} variant="contained" endIcon={<ExitToAppOutlined />}>Logout</Button>
                     : 
                     <NavLink to={LOGIN_ROUTE}>
                        <Button variant="contained">Login</Button>
                     </NavLink>    
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;