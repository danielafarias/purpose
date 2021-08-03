import Head from 'next/head';
import { Container, Grid, TextField, Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { API2 } from '../api/API2';
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
        

        const request =  await API2.buildApiPostRequest(state).catch(e =>{
            console.error("Erro ao tentar adicionar um item ao banco de dados:", e);
        })

        console.log(request)

        // const result = await request //.json();
        // // const id = result.userName;

        // this.props.history.push(`http://purposeapi.azurewebsites.net/api/Client/getByUserName/${id}`)
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
                                    <Typography span='true' variant="h5">
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