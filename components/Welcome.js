import Head from 'next/head';
import Footer from '../components/Footer';
import styles from '../styles/welcome.module.scss';
import { Button } from 'react-bootstrap';
import { Container, Grid, Typography, IconButton } from '@material-ui/core';
import React from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export default function Welcome() {

    const [dark, setDark] = React.useState(false);

    return (
        <div className={dark == false ? styles.welcome : styles.welcome__dark}>
            <Head>
                <title>Purple</title>
            </Head>
            <main>
                <Container fixed> 
                    <Grid container>
                        <Grid item>
                            <IconButton id={styles.brightness} onClick={() => dark == false ? setDark(true) : setDark(false)}>
                                <Brightness4Icon style={dark == false ? { color: '#673ab7'} : {color:'#7471b6ff'}}/>
                            </IconButton>
                        </Grid> 
                    </Grid>        

                    <Grid container justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item xs={12} sm={6}>

                        
                            <Grid item className={styles.welcome__header}>
                              
                                <img src='images/logosemtexto.svg' className={styles.welcome__header__logo}/>
                                <Typography variant="span" className={styles.header__title}>Purple</Typography>

                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h1">Início da Aventura</Typography>
                                <Typography style={dark == true ? {color: '#E0E0E0'} : {color: '#222222'}} variant="p"><strong>Suba de nível em seu conhecimento de programação</strong></Typography>
                            </Grid>

                            <Grid item className={styles.buttons}>
                                <Grid item xs={12} sm={6}>

                                    <Button href='/signup' className={styles.buttons__register} varian="primary">Inscrever-se</Button>

                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Button href='/login' className={styles.buttons__login} variant="primary">Entrar</Button>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item xs={12} sm={6} className={styles.welcome__intro}>
                            <img src='new_images/persoicones-24.svg' />
                            <Typography variant="h2">Quem somos?</Typography>
                            <Typography variant="p" className={styles.welcome__intro__text}>
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
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <Footer />
        </div>
    );

};