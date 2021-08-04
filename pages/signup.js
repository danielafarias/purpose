import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import HeaderDark from '../components/HeaderDark';
import Footer from '../components/Footer';
import styles from '../styles/signup.module.scss';
import { Form } from 'react-bootstrap';
// import { Api } from '../api/Api';
import axios from 'axios';

import { Container, Button, } from 'react-bootstrap';
import { Grid, TextField, Typography, IconButton } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import deepPurple from '@material-ui/core/colors/deepPurple';


export default function signUp({ allCategories, errorCategories }) {

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
        showPassword: false,
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [modifiedData, setModifiedData] = React.useState({
        userName: '',
        email: '',
        passwordHash: ''
      });
    const [errorUsers, setErrorUsers] = React.useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://purposeapi.azurewebsites.net/api/v1/Auth/Register', modifiedData);
          console.log(response);
        } catch (error) {
          setErrorUsers(error);
        }
    };

    const [dark, setDark] = React.useState(false);

    return (
        <div className={dark == false ? styles.signUp : styles.signUp__dark}>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Cadastrar-se | Purple</title>
                    <meta name="description" content="Página de Cadastro da Purple" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <header>
                    {
                        dark == false ? 
                        <Header pageName='Saudações, viajante! ' brightnessIcon={
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                            <IconButton id={styles.brightness} onClick={() => dark == false ? setDark(true) : setDark(false)}>
                                <Brightness4Icon color='secondary'/>
                            </IconButton>
                            </Grid>
                        </Grid>
                        }
                        styleBrightness={dark == true ? styles.Header__dark : styles.Header}/> :
                        <HeaderDark pageName='Saudações, viajante! ' brightnessIcon={
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                            <IconButton id={styles.brightness} onClick={() => dark == false ? setDark(true) : setDark(false)}>
                                <Brightness4Icon color='secondary'/>
                            </IconButton>
                            </Grid>
                        </Grid>
                        }
                        styleBrightness={dark == true ? styles.Header__dark : styles.Header}/>
                    }
                </header>

                <main>
                    <form onSubmit={handleSubmit}>
                        <Container className={styles.container} maxwidth={"xs"} spacing={5}>
                            <Grid container direction="column" justifyContent='center' alignItems='center' fullWidth>
                                <Grid xs={8} sm={4} item className={styles.signUp__introduction}>
                                    <Typography span='true' className={styles.signUp__introduction} variant="h5">
                                        Este é o universo Purple.
                                        <br />
                                        E quem é você?
                                    </Typography>
                                </Grid>

                                <Grid xs={8} sm={4} item className={styles.signUp__image} >
                                    <img src="/new_images/persoicones-10.svg" alt="A letter image." />
                                </Grid>

                                <Grid xs={8} sm={4} item id={styles.signUp__textField} >
                                    <TextField
                                        required
                                        id={styles.signUp__textField__content}
                                        label="Nome Completo"
                                        InputProps={{
                                            disableUnderline: (true)
                                        }}
                                        variant="standard"
                                        fullWidth
                                        type="text"
                                    />
                                </Grid>

                                
                                <Grid xs={8} sm={4} item id={styles.signUp__textField} >
                                   
                                    <TextField
                                        required
                                        value={modifiedData.userName}
                                        id={styles.signUp__textField__content}
                                        label="Nome de Usuário"
                                        InputProps={{ disableUnderline: (true) }}
                                        variant="standard"
                                        fullWidth
                                        type="text"
                                    />
                                   
                                </Grid>
                                

                               
                                <Grid xs={8} sm={4} item id={styles.signUp__textField}>
                                    
                                        <TextField
                                            required
                                            id={styles.signUp__textField__content}
                                            value={modifiedData.email}
                                            label="E-mail"
                                            InputProps={{ disableUnderline: (true) }}
                                            variant="standard"
                                            fullWidth
                                            type="email"
                                        />
                                    
                                </Grid>
                                

                                <Grid xs={8} sm={4} item id={styles.signUp__textField}>
                                    <TextField
                                        required
                                        id={styles.signUp__textField__content}
                                        label="Confirme seu E-mail"
                                        InputProps={{ disableUnderline: (true) }}
                                        variant="standard"
                                        fullWidth
                                        type="email"
                                    />
                                </Grid>

                                <Grid xs={8} sm={4} item id={styles.signUp__textField}>
                                    <TextField
                                        required
                                        id={styles.signUp__textField__content}
                                        label="Data de Nascimento"
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                        fullWidth
                                        type="date"
                                        defaultValue="2021-08-13"
                                        className={styles.signUp__textField__content}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>

                                
                                <Grid xs={8} sm={4} item id={styles.signUp__textField}> 
                                    <TextField
                                        id={styles.signUp__textField__content}
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        label='Senha'
                                        value={modifiedData.passwordHash}
                                        fullWidth
                                        onChange={handleChange('password')}
                                        InputProps={{
                                            disableUnderline: (true),
                                            endAdornment:
                                                <IconButton
                                                    color='primary'
                                                    style={dark == false ? { color: '#673ab7'} : { color: '#7471b6ff'}}
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            }}   
                                        />
                                </Grid>
                                

                                <Grid xs={8} sm={4} item>
                                    <Button
                                        className={styles.signUp__button}
                                        variant="primary"
                                        href="/"
                                        type='submit'>
                                        Aventurar-se
                                    </Button>

                                    <Typography
                                        className={styles.signUp__link}
                                        variant="body2">
                                        <a className={styles.signUp__link__decoration} href='/'>Voltar</a>
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Container>

                        <footer className={dark == false ? styles.signUp__footer : styles.signUp__footer__dark}>
                            <Footer />
                        </footer>
                    </form>
                </main>
            </ThemeProvider>
        </div >
    )
}