import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Container, Grid, TextField, Typography, IconButton, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { register } from '../api/axios';
import Footer from '../components/Footer';
import styles from '../styles/pages/signup.module.scss';


export default function signUp() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordHash, setPasswordHash] = useState('');

    const router = useRouter();

    const [error, setError] = useState(false);

    const submitHandler = async event => {
        event.preventDefault();

        try {

            await register(name, lastName, userName, birthDate, email, passwordHash)
            router.push('/login');

        } catch (err) {

            setError(true);

        }
    }

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

            {dark == false ?
                <header className={styles.Header}>
                    <img src='images/logocomtexto.svg' className={styles.Header__logo} />
                    <p className={styles.Header__pageName}>Saudações, viajante</p>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <IconButton id={styles.brightness} onClick={() => dark == false ? setDark(true) : setDark(false)}>
                                <Brightness4Icon style={{ color: '#5013bb' }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </header>

                :

                <header className={styles.Header__dark}>
                    <img src='images/logocomtexto.svg' className={styles.Header__logo} />
                    <p className={styles.Header__pageName}>Saudações, viajante</p>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <IconButton id={styles.brightness} onClick={() => dark == false ? setDark(true) : setDark(false)}>
                                <Brightness4Icon style={{ color: '#7471b6ff' }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </header>}

            <main>
                <form onSubmit={submitHandler}>
                    <Container className={styles.container} maxwidth={"xs"} spacing={5}>
                        <Grid container direction="column" justifyContent='center' alignItems='center' fullWidth>
                            <Grid xs={8} sm={4} item className={styles.signUp__introduction}>
                                <Typography>
                                    <h1 className={styles.signUp__introduction}>
                                        Este é o universo Purple.
                                        <br />
                                        E quem é você?
                                    </h1>
                                </Typography>
                            </Grid>

                            <Grid xs={8} sm={4} item className={styles.signUp__image} >
                                <img src="/new_images/persoicones-10.svg" alt="A letter image." />
                            </Grid>

                            <Grid xs={10} sm={8} md={6} item id={styles.signUp__textField} >
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                            </Grid>

                            <Grid xs={10} sm={8} md={6} item id={styles.signUp__textField} >
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
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>

                            <Grid xs={10} sm={8} md={6} item id={styles.signUp__textField} >

                                <TextField
                                    required
                                    id={styles.signUp__textField__content}
                                    label="Nome de Usuário"
                                    InputProps={{ disableUnderline: (true) }}
                                    variant="standard"
                                    fullWidth
                                    type="text"
                                    name='userName'
                                    value={values.userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />

                            </Grid>

                            <Grid xs={10} sm={8} md={6} item id={styles.signUp__textField}>

                                <TextField
                                    required
                                    id={styles.signUp__textField__content}
                                    label="E-mail"
                                    InputProps={{ disableUnderline: (true) }}
                                    variant="standard"
                                    fullWidth
                                    type="email"
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </Grid>

                            <Grid xs={10} sm={8} md={6} item id={styles.signUp__textField}>
                                <TextField
                                    required
                                    id={styles.signUp__textField__content}
                                    label="Data de Nascimento"
                                    fullWidth
                                    type="date"
                                    name='birthDate'
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                    defaultValue="2021-08-13"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </Grid>

                            <Grid xs={10} sm={8} md={6} item id={styles.signUp__textField}>
                                <TextField
                                    id={styles.signUp__textField__content}
                                    type={values.showPassword ? 'text' : 'password'}
                                    label='Senha'
                                    fullWidth
                                    name='passwordHash'
                                    value={values.passwordHash && passwordHash}
                                    onChange={(e) => setPasswordHash(e.target.value) && handleChange}
                                    InputProps={{
                                        disableUnderline: (true),
                                        endAdornment:
                                            <IconButton
                                                color='primary'
                                                style={{ color: '#000000' }}
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                    }}
                                />
                            </Grid>

                            <Grid xs={8} sm={6} md={4} item>

                                <Button
                                    className={styles.signUp__button}
                                    variant="primary"
                                    type='submit'>
                                    Aventurar-se
                                </Button>
                            </Grid>

                            {
                                error == false ? null :
                                    <Alert severity="error">
                                        <AlertTitle>Erro</AlertTitle>
                                        Houve um erro ao realizar o cadastro deste nobre viajante — <strong>Tente novamente!</strong>
                                    </Alert>
                            }

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
    );

};