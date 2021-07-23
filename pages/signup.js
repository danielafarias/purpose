import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/signup.module.scss';
import Api from '../api/Api';
import { Form } from 'react-bootstrap';

import { Container, Button, } from 'react-bootstrap';

import { Grid, TextField, Typography, FormControl, InputLabel, Input, IconButton, OutlinedInput, InputAdornment } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import deepPurple from '@material-ui/core/colors/deepPurple';


export default function signUp() {

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

    const [isLoading, setIsLoading] = React.useState(false);

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


    // submitHandler = async event => {

    //     event.preventDefault();

    //     const { userName, email, passwordHash } = event.target;

    //     const item = {
    //         userName: userName.value,
    //         email: email.value,
    //         passwordHash: passwordHash.value
    //     }

    //     setIsLoading(true);

    //     const request = () => await Api.buildApiPostRequest(
    //         Api.registerUrl(),
    //         item).catch(e => {
    //             console.error('Erro ao tentar adicionar um item ao banco: ', e)
    //         })

    //         setIsLoading(false);



    //         const result = await request.json();

    //         const id = result.id;

    //         this.props.history.push(`/view/${id}`);

    // }

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
                    <Container className={styles.container} maxWidth={"xs"} spacing={5}>
                        <Grid container direction="column" justifyContent='center' alignItems='center' fullWidth>
                            <Grid xs={8} sm={4} item className={styles.signUp__introduction}>
                                <Typography span='true' id={styles.signUp__introduction} variant="h5">
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
                                    className={styles.signUp__textField__content}
                                    id={styles.signUp__textField__content}
                                    label="Data de Nascimento" InputProps={{ disableUnderline: true }}
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
                                <FormControl fullWidth>

                                    <InputLabel>Senha</InputLabel>
                                    <Input
                                        id={styles.signUp__textField__content}
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        controlId='passwordHash'
                                        disableUnderline="true"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    color='success'
                                                    style={{ color: deepPurple[500] }}
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>

                            <Grid xs={8} sm={4} item>
                                <Button
                                    className={styles.signUp__button}
                                    variant="primary"
                                    href="/">
                                    Aventurar-se
                                </Button>

                                <Typography
                                    id={styles.login__link}
                                    variant="body2">
                                    <a id={styles.login__link__decoration} href='/'>Voltar</a>
                                </Typography>
                            </Grid>
                        </Grid>

                    </Container>

                    <footer id={styles.signUp__footer}>
                        <Footer />
                    </footer>
                </main>
            </ThemeProvider>
        </div >
    )
}