import Head from 'next/head';

import Footer from '../components/Footer';

import styles from '../styles/welcome.module.scss';

import { Button } from 'react-bootstrap';

import { Container, Grid, Typography } from '@material-ui/core';


export default function Welcome() {
    return (
        <div className={styles.welcome}>
            <Head>
                <title>Purple</title>
            </Head>
            <main>
                <Container fixed> 
                    <Grid container justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Grid item className={styles.welcome__header}>
                                <img src='new_images/persoicones-19.svg' className={styles.welcome__header__logo}/>
                                <Typography variant="span" className={styles.welcome__header__title}>Purple</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h1">Início da Aventura</Typography>
                                <Typography variant="p"><strong>Suba de nível em seu conhecimento de programação</strong></Typography>
                            </Grid>

                            <Grid item className={styles.welcome__buttons}>
                                <Grid item xs={12} sm={6}>
                                    <Button href='/signup' className={styles.welcome__buttons__register} varian="primary">Inscrever-se</Button>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Button href='/login' className={styles.welcome__buttons__login} variant="primary">Entrar</Button>
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