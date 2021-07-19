import { Component } from "react";
import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Button, Navbar, Form } from 'react-bootstrap';
import styles from '../styles/signup.module.scss';
import { Grid, TextField, Typography, FormControl, InputLabel, Input, IconButton, OutlinedInput } from '@material-ui/core';
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import deepPurple from '@material-ui/core/colors/deepPurple'



export default function SignUp() {

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

    const corzinha = deepPurple[500];
    return (
        <div className={styles.SignUp__Page}>
            <Head>
                <Col className={styles.SignUp__TopCol}>
                    <Row>
                        <img src="/new_images/persoicones-10.svg" alt="A letter image." />
                    </Row>
                    <Row className={styles.SignUp__TextBar}>
                        <Typography variant="h2" className={styles.SignUp__TextBarText}>Saudações, viajante! Este é o universo Purple.</Typography>
                        <Typography variant="h3" className={styles.SignUp__TextBarText}>  E você, quem é?</Typography>

                    </Row>
                </Col>
                <title>Purple</title>
            </Head>
            <main>
                <Container className={styles.SignUp__MainContainer}>
                    <Row className={styles.SignUp__MainContainer}>
                        <Col>
                            <Row className={styles.SignUp__Image}>
                                <img src="/new_images/persoicones-10.svg" alt="A letter image." />
                            </Row>
                            <Row className={styles.SignUp__TextField}>
                                <TextField
                                    required
                                    className={styles.SignUp__TextFieldContent}
                                    id={styles.SignUp__TextFieldContent}
                                    label="Nome Completo"
                                    InputProps={{ disableUnderline: (true) }}
                                    variant="standard"
                                    fullWidth
                                    type="text"
                                />
                            </Row>
                            <Row className={styles.SignUp__TextField}>
                                <TextField
                                    required
                                    className={styles.SignUp__TextFieldContent}
                                    id={styles.SignUp__TextFieldContent}
                                    label="Email"
                                    InputProps={{ disableUnderline: (true) }}
                                    variant="standard"
                                    fullWidth
                                    type="text"
                                />
                            </Row>
                            <Row className={styles.SignUp__TextField}>
                                <TextField
                                    required
                                    className={styles.SignUp__TextFieldContent}
                                    id={styles.SignUp__TextFieldContent}
                                    label="Confirme seu Email"
                                    InputProps={{ disableUnderline: (true) }}
                                    variant="standard"
                                    fullWidth
                                    type="text"
                                />
                            </Row>
                            <Row className={styles.SignUp__TextField}>
                                <TextField
                                    required
                                    className={styles.SignUp__TextFieldContent}
                                    id={styles.SignUp__TextFieldContent}
                                    label="Data de Nascimento" InputProps={{ disableUnderline: true }}
                                    InputProps={{ disableUnderline: true }}
                                    fullWidth
                                    type="date"
                                    defaultValue="2021-08-13"
                                    className={styles.SignUp__TextFieldContent}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Row>



                            <Row className={styles.SignUp__TextField}>
                                <FormControl id={styles.SignUp__TextField2}>
                                <InputLabel id={styles.SignUp__TextField2} >Senha</InputLabel>
                                <Input
                                    id={styles.SignUp__TextFieldContent2}
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    disableUnderline="true"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                color='success'
                                                style={{ color: deepPurple[500]}}
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
                            </Row>


                            <Row className={styles.SignUp__TextField}>
                                <FormControl id={styles.SignUp__TextField2}>
                                <InputLabel id={styles.SignUp__TextField2} >Confirme sua senha</InputLabel>
                                <Input
                                    id={styles.SignUp__TextFieldContent2}
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    disableUnderline="true"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                color='success'
                                                style={{ color: deepPurple[500]}}
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
                            </Row>


                            {/* <Row className={styles.SignUp__TextField}>
                                <TextField
                                    required
                                    className={styles.SignUp__TextFieldContent}
                                    id={styles.SignUp__TextFieldContent}
                                    label="Senha"
                                    InputProps={{ disableUnderline: (true) }}
                                    variant="standard"
                                    fullWidth
                                    type="password"
                                />
                            </Row> */}






                            <Row className={styles.SignUp__TextField}>
                                <TextField
                                    required
                                    className={styles.SignUp__TextFieldContent}
                                    id={styles.SignUp__TextFieldContent}
                                    label="Confirme sua Senha"
                                    InputProps={{ disableUnderline: (true) }}
                                    variant="standard"
                                    fullWidth
                                    type="password"
                                />
                            </Row>


                            <Row className={styles.SignUp__Button}>
                                <Button
                                    className={styles.button__register}
                                    variant="primary"
                                    href="/">
                                    Aventurar-se
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer >
                <Container>
                    <Row>
                        <Col>
                            <p>Logo Facebook | Logo LinkedIn | Logo GitHub</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );

};