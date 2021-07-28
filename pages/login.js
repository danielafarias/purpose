import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/login.module.scss';

import { Button } from 'react-bootstrap';

import { Grid, TextField, IconButton, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';


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
    typography: {
      fontFamily: 'Yatra One',
    },
  });

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    email: '',
    error: false,
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

  const accessVerification = (props) => (event) => {
    const [insertEmail, insertPassword] = React.useState(event.target.value);
    const [email, password] = React.useState(...values);

    insertEmail !== email && insertPassword !== password ? setValues({ [values.error]: true }) : setValues({ [values.error]: false });

    const errorMessage = error == true ? "E-mail ou senha incorreta, por favor, tente novamente." : " ";
  }

  return (
    <div className={styles.login}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Entrar | Purple</title>
          <meta name="description" content="Página de Login da Purple" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <Header pageName='Entrar' />
        </header>

        <main>
          <Grid container direction='column' justifyContent='center' alignItems='center' spacing={4}>

            <Grid className={styles.login__name} item xs={8} sm={4}>
              <img src='/images/moon.svg' />
              <Typography span="true" color='secondary' variant="h3">Purple</Typography>
            </Grid>

            <Grid className={styles.login__img} item xs={8} sm={4}>
              <img src='/images/castle3.svg' />
            </Grid>

            <Grid item xs={8} sm={4} id={styles.login__textField}>
              <TextField
                error={false}
                id={styles.login__textField__content}
                label="E-mail"
                InputProps={{
                  disableUnderline: (true),
                  endAdornment: <EmailIcon style={{ color: deepPurple[500], margin: 12 }} />,
                }}
                variant="standard"
                fullwidth='true'
                type="text"
              />
            </Grid>

            <Grid item xs={8} sm={4} id={styles.login__textField}>
              <TextField
                error={false}
                id={styles.login__textField__content}
                label="Senha"
                variant="standard"
                fullwidth='true'
                type="text"
                value={values.password}
                type={values.showPassword ? 'text' : 'password'}
                onChange={handleChange('password')}
                InputProps={{
                  disableUnderline: (true),
                  endAdornment:
                    <IconButton
                      style={{ color: deepPurple[500] }}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                }}
              />
            </Grid>

            <Grid item xs={8} sm={4}>
              <Button
                href='/'
                id={styles.login__button}>
                Aventurar-se


              </Button>

              <Typography
                id={styles.login__link}
                variant="body2">
                <a id={styles.login__link__decoration} href='/'>Esqueci a senha</a> | <a id={styles.login__link__decoration} href='/signup'>Cadastre-se</a>
              </Typography>
            </Grid>

          </Grid>
        </main>

        <footer className={styles.login__footer}>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  )
}
