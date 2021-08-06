import React from 'react';
import { useState } from 'react';
import { Link } from 'next/link';
import { useRouter } from 'next/router'

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/signup.module.scss';
import axios from 'axios';

import { Container, Button, } from 'react-bootstrap';
import { Grid, TextField, Typography, IconButton } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import deepPurple from '@material-ui/core/colors/deepPurple';


export default function signUp() {

    const [state, setState] = useState({
        name: '',
        lastName:'',
        userName: '',
        email: '',
        passwordHash: '',

    })

    const handleChange = ({ target: { name, value } }) => {
        setState(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = async event => {
        event.preventDefault();

        try {
            const response = await axios.post('http://purposeapi.azurewebsites.net/api/v1/Auth/Register', state);
            console.log(response);
        } catch (error) {
            console.error("Erro ao realizar o cadastro deste nobre viajante:", error);
        }
    }


    const router = useRouter()



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


    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    return (
        <div className={styles.signUp}>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Cadastrar-se | Purple</title>
                    <meta name="description" content="Página de Cadastro da Purple" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <header>
                    <Header pageName='Saudações, viajante! ' />
                </header>

                <main>
                    <form onSubmit={submitHandler}>
                        <Container className={styles.container} maxwidth={"xs"} spacing={5}>
                            <Grid container direction="column" justifyContent='center' alignItems='center' fullWidth>
                                <Grid xs={8} sm={4} item className={styles.signUp__introduction}>
                                    <Typography span className={styles.signUp__introduction} variant="h5">
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
                                        label="Nome"
                                        InputProps={{
                                            disableUnderline: (true)
                                        }}
                                        variant="standard"
                                        fullWidth
                                        type="text"
                                        name='name'
                                        value={state.name}
                                        onChange={handleChange}
                                    />

                                </Grid>

                                <Grid xs={8} sm={4} item id={styles.signUp__textField} >
                                    <TextField
                                        required
                                        id={styles.signUp__textField__content}
                                        label="Sobrenome"
                                        InputProps={{
                                            disableUnderline: (true)
                                        }}
                                        variant="standard"
                                        fullWidth
                                        type="text"
                                        name='lastName'
                                        value={state.lastName}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid xs={8} sm={4} item id={styles.signUp__textField} >

                                    <TextField
                                        required
                                        id={styles.signUp__textField__content}
                                        label="Nome de Usuário"
                                        InputProps={{ disableUnderline: (true) }}
                                        variant="standard"
                                        fullWidth
                                        type="text"
                                        name='userName'
                                        value={state.userName}
                                        onChange={handleChange}
                                    />

                                </Grid>



                                <Grid xs={8} sm={4} item id={styles.signUp__textField}>

                                    <TextField
                                        required
                                        id={styles.signUp__textField__content}
                                        label="E-mail"
                                        InputProps={{ disableUnderline: (true) }}
                                        variant="standard"
                                        fullWidth
                                        type="email"
                                        name='email'
                                        value={state.email}
                                        onChange={handleChange}
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
                                        label='Senha'
                                        fullWidth
                                        name='passwordHash'
                                        value={state.passwordHash}
                                        onChange={handleChange}
                                        InputProps={{
                                            disableUnderline: (true),
                                            endAdornment:
                                                <IconButton
                                                    color='primary'
                                                    style={{ color: deepPurple[500] }}
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
                                        type='submit'
                                        onClick={() => router.push('/')}>
                                        Aventurar-se

                                    </Button>


                                    <Typography
                                        className={styles.login__link}
                                        variant="body2">
                                        <a className={styles.login__link__decoration} href='/'>Voltar</a>
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Container>

                        <footer className={styles.signUp__footer}>
                            <Footer />
                        </footer>
                    </form>
                </main>
            </ThemeProvider>
        </div >
    )
}