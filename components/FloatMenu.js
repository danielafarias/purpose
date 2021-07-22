import { useState } from 'react';
import { Fab, Menu, IconButton } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'; 
import { ThemeProvider } from '@material-ui/core/styles';
import ListIcon  from '@material-ui/icons/List'; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles from '../styles/floatmenu.module.scss';

export default function FloatMenu () {
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

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.floatMenu}>
            <ThemeProvider theme={theme}>
                <Fab color="primary" onClick={handleClick}>
                    <ListIcon />
                </Fab>
                <Menu
                    className={styles.floatMenu__list} 
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}

                    onClose={handleClose}
                >

                    <IconButton onClick={handleClose}> <AccountCircleIcon /> </IconButton>
                    <IconButton onClick={handleClose}> <SettingsIcon /> </IconButton>
                    <IconButton onClick={handleClose}> <ExitToAppIcon /> </IconButton>
                </Menu>
            </ThemeProvider>
        </div>
    );

};