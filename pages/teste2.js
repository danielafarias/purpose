import Head from 'next/head';
import { Container, Grid, TextField, Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

export default function Teste2() {

    const [state, setState] = useState({
        userName: '',
        email: '',
        passwordHash: ''
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
            console.error("Erro ao tentar adicionar um item ao banco de dados:", error);
          }
    }

    return (
        <div>
            <Head>
                <title>Página para Teste2</title>
            </Head>

            <h4>Adicionar Personagens</h4>
            <div>
                <Head>
                    <title>Cadastrar-se | Purple</title>
                    <meta name="description" content="Página de Cadastro da Purple" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <form onSubmit={submitHandler}>
                        <Container maxwidth={"xs"} spacing={5}>
                            <Grid container direction="column" justifyContent='center' alignItems='center'>
                                <Grid xs={8} sm={4} item>
                                    <Typography span variant="h5">
                                        Este é o universo Purple.
                                        <br />
                                        E quem é você?
                                    </Typography>
                                </Grid>

                                <Grid xs={8} sm={4} item>
                                    <img src="/new_images/persoicones-10.svg" alt="A letter image." />
                                </Grid>

                                <Grid xs={8} sm={4} item>

                                    <TextField
                                        required
                                        label="Nome de Usuário"
                                        name='userName'
                                        variant="standard"
                                        type="text"
                                        value={state.userName}
                                        onChange={handleChange}
                                    />

                                </Grid>

                                <Grid xs={8} sm={4} item>

                                    <TextField
                                        required
                                        label="E-mail"
                                        name='email'
                                        variant="standard"
                                        type="email"
                                        value={state.email}
                                        onChange={handleChange}
                                    />

                                </Grid>

                                <Grid xs={8} sm={4} item>
                                    <TextField
                                        label='Senha'
                                        name='passwordHash'
                                        value={state.passwordHash} 
                                        onChange={handleChange}                             
                                    />
                                </Grid>

                                <Grid xs={8} sm={4} item>
                                    <Button
                                        variant="primary"
                                        type='submit'>
                                        Aventurar-se
                                    </Button>

                                    <Typography
                                        variant="body2">
                                        <a>Voltar</a>
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Container>
                    </form>
                </main>
            </div >
        </div>
    );

};