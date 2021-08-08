import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import { Container, Grid, TextField, Typography, IconButton, Button, SimpleDialog } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import axios from 'axios';
import Header from '../components/Header';
import HeaderDark from '../components/HeaderDark';
import Footer from '../components/Footer';
import styles from '../styles/pages/signup.module.scss';


export default function signUp() {

    const [state, setState] = useState({
        name: '',
        lastName: '',
        userName: '',
        email: '',
        passwordHash: '',
        birthDate: '',

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

            if (state.name != '' && state.lastName != '' && state.userName != '' && state.email != '' && state.passwordHash != '' && state.birthDate != '') {


                const response = await axios.post('http://purposeapi.azurewebsites.net/api/v1/Auth/Register', state);
                console.log(response);
            }

            else {

            }

        } catch (error) {
            console.error("Erro ao realizar o cadastro deste nobre viajante:", error);
        }
    }

    const router = useRouter()

    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [dark, setDark] = React.useState(false);

    return (
        <div className={dark == false ? styles.signUp : styles.signUp__dark}>
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
                                        <Brightness4Icon color='primary' />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        }
                            styleBrightness={dark == true ? styles.Header__dark : styles.Header} /> :
                        <HeaderDark pageName='Saudações, viajante! ' brightnessIcon={
                            <Grid container justifyContent='flex-end'>
                                <Grid item>
                                    <IconButton id={styles.brightness} onClick={() => dark == false ? setDark(true) : setDark(false)}>
                                        <Brightness4Icon color='primary' />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        }
                            styleBrightness={dark == true ? styles.Header__dark : styles.Header} />
                }
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
                                    name='birthDate'
                                    value={state.birthDate}
                                    onChange={handleChange}
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
                                                style={dark == false ? { color: '#673ab7' } : { color: '#7471b6ff' }}
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
                            </Grid>

                            <Grid xs={8} sm={4} item>
                                <a href='/login'>Voltar</a>
                            </Grid>
                        </Grid>

                    </Container>

                    <footer className={dark == false ? styles.signUp__footer : styles.signUp__footer__dark}>
                        <Footer />
                    </footer>
                </form>
            </main>
        </div >
    )
}