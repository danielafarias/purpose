import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import HeaderDark from '../components/HeaderDark';
import Footer from '../components/Footer';
import styles from '../styles/login.module.scss';
import { Button } from 'react-bootstrap';
import { Grid, TextField, IconButton, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import { useRouter } from 'next/router'


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
    }
  });

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
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

  const [email, setEmail] = React.useState('')
  const [passwordHash, setPasswordHash]  = React.useState('');
  
  const verification = async () => {
    await axios.post('http://purposeapi.azurewebsites.net/api/v1/Auth/Token', {email, passwordHash}, {
    auth: {
        email: email,
        password: passwordHash
      }
    });
  }

  const router = useRouter();

  const [dark, setDark] = React.useState(false);

  return (
    <div className={dark == true ? styles.login__darkMode : styles.login}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Entrar | Purple</title>
          <meta name="description" content="Página de Login da Purple" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          {
            dark == false ? 
            <Header pageName='Entrar' brightnessIcon={
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <IconButton id={styles.brightness} onClick={() => dark == false ? setDark(true) : setDark(false)}>
                    <Brightness4Icon color='secondary'/>
                  </IconButton>
                </Grid>
            </Grid>
            }
            styleBrightness={dark == true ? styles.Header__dark : styles.Header}/> :
            <HeaderDark pageName='Entrar' brightnessIcon={
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <IconButton id={styles.login__brightness} onClick={() => dark == false ? setDark(true) : setDark(false)}>
                    <Brightness4Icon color='secondary'/>
                  </IconButton>
                </Grid>
             </Grid>
            }
            styleBrightness={dark == true ? styles.Header__dark : styles.Header}/>
          }
        </header>

        <main>
          <Grid container direction='column' justifyContent='center' alignItems='center'>

            <Grid className={styles.login__name} item xs={8} sm={4}>
              <img src={dark == false ? '/images/sun.svg' : '/images/moon.svg'} />
              <Typography span color='secondary' variant="h3">Purple</Typography>
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
                  endAdornment: <EmailIcon style={dark == false ? { color: '#673ab7', margin: 12 } : { color: '#7471b6ff', margin: 12 }} />,
                }}
                variant="standard"
                fullWidth
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={8} sm={4} id={styles.login__textField}>
            <TextField
                id={styles.signUp__textField__content}
                type={values.showPassword ? 'text' : 'password'}
                label='Senha'
                fullWidth
                name='passwordHash'
                value={values.passwordHash}
                onChange={(e) => setPasswordHash(e.target.value) && handleChange}
                InputProps={{
                    disableUnderline: (true),
                    endAdornment:
                        <IconButton
                             color='primary'
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                }}
            />
            </Grid>

            <Grid item xs={8} sm={4}>
              <Button
                id={styles.login__button}
                onClick={() => router.push('/dashboard') && verification}>
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

        <footer className={dark == false ? styles.login__footer : styles.login__footer__dark}>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  )
}