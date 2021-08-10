import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { Grid, Typography, IconButton, Button, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Header from '../components/Header';
import HeaderDark from '../components/HeaderDark';
import Footer from '../components/Footer';
import styles from '../styles/pages/login.module.scss';
import { login, getUserByEmail } from '../api/axios';
import { Alert, AlertTitle } from '@material-ui/lab';


export default function Login() {

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

  const [email, setEmail]  = React.useState('');
  const [passwordHash, setPasswordHash]  = React.useState('');

  const [passwordError, setPasswordError] = React.useState(false);
  
  const submitHandler = async event => {
    event.preventDefault();

    try {

      await login(email, passwordHash);

      router.push('/dashboard');

    } catch (err) {
      setPasswordError(true);
    }
      

   

      console.log(email, passwordHash);
      console.log(getUserByEmail);
      console.log(localStorage.getItem('user'));
  }

  const router = useRouter();
  const [dark, setDark] = React.useState(false);

  return (
    <div className={dark == true ? styles.login__darkMode : styles.login}>
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
                    <Brightness4Icon style={{color: '#5013bb'}}/>
                  </IconButton>
                </Grid>
              </Grid>
            }
              styleBrightness={dark == true ? styles.Header__dark : styles.Header} /> :
            <HeaderDark pageName='Entrar' brightnessIcon={
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <IconButton id={styles.login__brightness} onClick={() => dark == false ? setDark(true) : setDark(false)}>
                    <Brightness4Icon style={{color:'#7471b6ff'}}/>
                  </IconButton>
                </Grid>
              </Grid>
            }
              styleBrightness={dark == true ? styles.Header__dark : styles.Header} />
        }
      </header>

      <main>
        <form onSubmit={submitHandler}>
          <Grid container direction='column' justifyContent='center' alignItems='center' >

            <Grid item xs={8} sm={4} className={styles.login__name}>

              <img src={dark == false ? '/images/sun.svg' : '/images/moon.svg'} />

                <h1 className={styles.login__name__title}>
                  Purple 
                </h1>
      
            </Grid>

            <Grid item xs={8} sm={4}>
              <img src='/images/castle3.svg' className={styles.login__img}/>
            </Grid>

            <Grid item xs={8} sm={4} className={styles.login__textField}>
              <TextField
                className={styles.login__textField__content}
                error={false}
                label="Email"
                InputProps={{
                  disableUnderline: (true),
                  endAdornment: <EmailIcon style={dark == false ? { color: '#673ab7', margin: 12 } : { color: '#7471b6ff', margin: 12 }} />,
                }}
                fullWidth
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />

            </Grid>

            <Grid item xs={8} sm={4} className={styles.login__textField}>
              <TextField
                className={styles.signUp__textField__content}
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
                      style={dark == false ? { color: '#673ab7'} : { color: '#7471b6ff'}}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                }}
              />
            </Grid>

            <Grid item xs={8} sm={4}>
              <Button 
              variant="contained" 
              color="primary"
              type="submit">
                Aventurar-se
              </Button>
            </Grid>

            <Grid item xs={8} sm={4}>
              <Typography className={styles.login__link}>
                <a href='/'>Esqueci a senha</a> | <a href='/signup'>Cadastre-se</a>
              </Typography>
            </Grid>
          </Grid>

          { 
            passwordError == false ? null : 
            <Alert severity="error">
                <AlertTitle>Erro</AlertTitle>
                Houve um erro ao realizar o login deste nobre viajante, verifique se seu email e/ou senha estão corretos — <strong>Tente novamente!</strong>
            </Alert> 
          }

        </form>
      </main>

      <footer className={dark == false ? styles.login__footer : styles.login__footer__dark}>
        <Footer />
      </footer>
    </div>
  )
}