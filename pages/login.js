import Head from 'next/head';
import LoginHeader from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/login.module.scss';
import { Grid, TextField, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import { createTheme } from '@material-ui/core/styles'; 
import { ThemeProvider } from '@material-ui/core/styles'; 
import { Button } from 'react-bootstrap';


export default function Login() {

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


  const [values, setValues] = React.useState({
    password: '',
    showPassword: false
  });

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.Login}>
      <ThemeProvider theme={theme}>
          <Head>
              <title>Entrar | Purple</title>
              <meta name="description" content="Página de Login da Purple" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <header>
            <LoginHeader pageName='Entrar'/>
          </header>

          <main>

            

            <Grid container direction='column' className={styles.login__form} spacing={4}>

              <Grid item xs={8} sm={4}>
                <img src='/images/moon.svg'/>
                <Typography span color='secondary' variant="h3">Purple</Typography>
              </Grid>

              <Grid item xs={8} sm={4}>
                <img className={styles.login__img} src='/images/castle3.svg' />
              </Grid>

              <Grid item xs={8} sm={4} >
                <TextField
                  error={false}
                  className={styles.login__email}
                  label="E-mail"
                  InputProps={{ 
                    disableUnderline: (true), 
                    endAdornment: <EmailIcon /> }}
                  variant="standard"
                  fullWidth
                  type="text"/>
              </Grid>
              
              <Grid item xs={8} sm={4}>
                <TextField
                    error={false}
                    className={styles.login__password}
                    label="Senha"
                    variant="standard"
                    fullWidth
                    type="text"
                    value={values.password}
                    type={values.showPassword ? 'text' : 'password'}
                    onChange={handleChange('password')}
                    InputProps={{ 
                      disableUnderline: (true),
                      endAdornment: 
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}>
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                  }}/>
              </Grid>

              <Grid item xs={8} sm={4}>
                  <Button>Entrar</Button>
              </Grid>

            </Grid>
            

          </main>

          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
    </div>
  )
}
