import { useState } from 'react';
import { Fab, Menu, IconButton } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles from '../styles/components/floatmenu.module.scss';

export default function FloatMenu() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#673AB7',
            },
            secondary: {
                main: '#E0E0E0',
            },
        },
    });

    const [anchorEl, setAnchorEl] = useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(0);
    };

    const floatMenu = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'
    };

    const menu = {
        top: -50,
        right: 0,
        bottom: 0,
        left: 1,
    };

    return (

        <ThemeProvider theme={theme}>
            <Fab color="primary" onClick={handleClick} className={styles.floatMenu} style={floatMenu} >
                <ListIcon />
            </Fab>
            <Menu
                className={styles.floatMenu__list}
                style={menu}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <IconButton onClick={handleClose} href='/profile'> <AccountCircleIcon /> </IconButton>
                <IconButton onClick={handleClose}> <SettingsIcon /> </IconButton>
                <IconButton onClick={handleClose}> <ExitToAppIcon /> </IconButton>
            </Menu>
        </ThemeProvider>

    );

};