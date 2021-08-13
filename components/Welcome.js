import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { Container, Grid, Typography, IconButton, Button } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Footer from '../components/Footer';
import styles from '../styles/components/welcome.module.scss';

export default function Welcome() {

    const [dark, setDark] = React.useState(false);
    const router = useRouter()

    return (
        <div className={dark == false ? styles.welcome : styles.welcome__dark}>
            <Head>
                <title>Purple</title>
                <meta name="description" content="Página de Login da Purple" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container fixed> 
                    <Grid container>
                        <Grid item>
                            <IconButton id={styles.brightness} onClick={() => dark == false ? setDark(true) : setDark(false)}>
                                <Brightness4Icon style={dark == false ? { color: '#5013bb'} : {color:'#7471b6ff'}}/>
                            </IconButton>
                        </Grid> 
                    </Grid>        

                    <Grid container justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item xs={12} sm={8} md={6}>
                            <Grid item className={styles.welcome__header}>
                                <img src='images/logosemtexto.svg' className={styles.welcome__header__logo}/>
                                <Typography>
                                    <h1 className={styles.header__title}>
                                        Purple
                                    </h1>
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    <h2 style={dark == true ? {color: '#E0E0E0'} : {color: '#222222'}}>
                                        Início da Aventura
                                    </h2>
                                </Typography>
                                <Typography>
                                    <p style={dark == true ? {color: '#E0E0E0'} : {color: '#222222'}}>
                                        <strong>Suba de nível em seu conhecimento de programação</strong>
                                    </p>
                                </Typography>
                            </Grid>

                            <Grid item className={styles.buttons}>
                                <Grid item xs={12} sm={8} md={6}>
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        onClick={() => router.push('/signup')}>
                                            Inscrever-se
                                        </Button>
                                </Grid>

                                <Grid item xs={12} sm={8} md={6}>
                                    <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        onClick={() => router.push('/login')}>
                                            Entrar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={8} md={6} className={styles.welcome__intro}>
                            <img src='new_images/persoicones-24.svg' />
                            <Typography>
                                <h2>
                                    Quem somos?
                                </h2>
                            </Typography>
                            <Typography>
                                <p className={styles.welcome__text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec dolor 
                                    ac nisi vehicula porttitor. Duis pharetra quam quis sapien fermentum 
                                    sodales. In commodo ex vel egestas euismod. Morbi scelerisque fringilla 
                                    metus non molestie. Pellentesque habitant morbi tristique senectus et 
                                    netus et malesuada fames ac turpis egestas. 
                                    <br></br>
                                    <br></br>
                                    Cras non enim sed tortor bibendum congue ac lobortis erat. 
                                    Curabitur vehicula tristique finibus. Cras tincidunt, sem eu porta 
                                    vestibulum, lectus enim convallis ligula, maximus iaculis lacus nulla 
                                    accumsan quam. Phasellus pharetra malesuada elit, id commodo diam 
                                    aliquam sit amet. 
                                </p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <Footer />
        </div>
    );

};