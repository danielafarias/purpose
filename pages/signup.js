import React from 'react';
import Head from 'next/head';
import { Container, Button, } from 'react-bootstrap';
import styles from '../styles/signup.module.scss';
import { Grid, TextField, Typography, FormControl, InputLabel, Input, IconButton, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Api from '../api/Api';

export default function SignUp() {

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


    submitHandler = async event => {

        event.preventDefault();

        const { userName, email, passwordHash } = event.target;

        const item = {
            userName: userName.value,
            email: email.value,
            passwordHash: passwordHash.value
        }

        setIsLoading(true);

        const request = () => await Api.buildApiPostRequest(
            Api.registerUrl(),
            item).catch(e => {
                console.error('Erro ao tentar adicionar um item ao banco: ', e)
            })

            setIsLoading(false);

           

            const result = await request.json();

            const id = result.id;

            this.props.history.push(`/view/${id}`);
        
    }

    const corzinha = deepPurple[500];


    return (
        <div className={styles.SignUp__Page}>
            <Head>
                <title>Cadastrar-se | Purple</title>
                <meta name="description" content="Página de Cadastro da Purple" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Header pageName='Saudações, viajante! ' />
            </header>
            <main>
                <Container className={styles.teste} maxWidth={"xs"} spacing={5}>
                    <Grid container direction="column" justifyContent='center' alignItems='center' fullWidth>
                        <Grid xs={8} sm={4} item className={styles.SignUp__Introduction}>
                            <Typography span='true' className={styles.SignUp__Introduction} variant="h5">
                                Este é o universo Purple.
                                <br />
                                E quem é você?
                            </Typography>
                        </Grid>
                        <Grid  xs={8} sm={4} item className={styles.SignUp__Image} >
                            <img src="/new_images/persoicones-10.svg" alt="A letter image." />
                        </Grid>

                        <Grid xs={8} sm={4} item className={styles.SignUp__TextField} >
                            <TextField
                                required
                                id={styles.SignUp__TextFieldContent}
                                label="Nome Completo"
                                InputProps={{ disableUnderline: (true) }}
                                variant="standard"
                                fullWidth
                                type="text"
                            />
                        </Grid>

                        <Grid xs={8} sm={4} item className={styles.SignUp__TextField} >
                            <TextField
                                required
                                id={styles.SignUp__TextFieldContent}
                                label="Nome de Usuário"
                                InputProps={{ disableUnderline: (true) }}
                                variant="standard"
                                fullWidth
                                type="text"
                            />
                        </Grid>

                        <Grid xs={8} sm={4} item className={styles.SignUp__TextField}>
                            <TextField
                                required
                                id={styles.SignUp__TextFieldContent}
                                label="Email"
                                InputProps={{ disableUnderline: (true) }}
                                variant="standard"
                                fullWidth
                                type="email"
                            />
                        </Grid>

                        <Grid xs={8} sm={4} item className={styles.SignUp__TextField}>
                            <TextField
                                required
                                id={styles.SignUp__TextFieldContent}
                                label="Confirme seu Email"
                                InputProps={{ disableUnderline: (true) }}
                                variant="standard"
                                fullWidth
                                type="email"
                            />
                        </Grid>

                        <Grid xs={8} sm={4} item className={styles.SignUp__TextField}>
                            <TextField
                                required
                                className={styles.SignUp__TextFieldContent}
                                id={styles.SignUp__TextFieldContent}
                                label="Data de Nascimento" InputProps={{ disableUnderline: true }}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                fullWidth
                                type="date"
                                defaultValue="2021-08-13"
                                className={styles.SignUp__TextFieldContent}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                        <Grid xs={8} sm={4} item className={styles.SignUp__TextField}>
                            <FormControl id={styles.SignUp__TextField2} fullWidth>

                                <InputLabel id={styles.SignUp__TextField2} >Senha</InputLabel>
                                <Input
                                    id={styles.SignUp__TextFieldContent2}
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

                        </Grid>

                        <Grid xs={8} sm={4} item>
                            <Button
                                className={styles.SignUp__Button}
                                variant="primary"
                                href="/">
                                Aventurar-se
                            </Button>
                        </Grid>
                    </Grid>

                </Container>

                <footer id={styles.SignUp__footer}>
                    <Footer />
                </footer>
                );
            </main>

        </div >
    )
}