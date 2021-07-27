import Head from 'next/head';
import { Container, Grid, Typography, LinearProgress, Box } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import FloatMenu from '../components/FloatMenu';
import styles from '../styles/profile.module.scss';

export default function Profile(props) {

    return (

        <div className={styles.profile}>
            <Head>
                <title>Perfil</title>
            </Head>

            <Container fixed>
                <Grid container justifyContent="center" alignItems="center" spacing={4}>
                    <Grid item className={styles.profile__infos}>
                        <Grid item >
                            <img src='images/chrisevans.jpg' className={styles.profile__image} />
                        </Grid>

                        <Grid item>
                            <Typography className={styles.profile__nameTitle} >Chris Evans</Typography>
                        </Grid>
                    </Grid>

                    <Grid className={styles.profile__char}>
                        <Typography className={styles.profile__charTitle}>Personagem</Typography>
                        <img src='new_images/persoicones-23.svg' className={styles.profile__charImage} />
                        <Grid item>
                            <Grid item className={styles.profile__charLevel}>
                                <Typography className={styles.profile__charTexts}>Level:</Typography>
                                <Typography className={styles.profile__charTexts}>Rank:</Typography>
                            </Grid>

                            <Grid>
                                <Typography className={styles.profile__charTexts}>Exp:</Typography>
                            </Grid>

                            <Grid>
                                <Typography className={styles.profile__charTexts}>Vigor:</Typography>
                            </Grid>

                            <Typography className={styles.profile__charTexts}>Ouro: 1000</Typography>
                            <Button className={styles.profile__buttons} variant="primary">Editar Personagem</Button>
                        </Grid>
                    </Grid>

                    <Grid className={styles.profile__bagdes}>
                        <Typography className={styles.profile__bagdesTitle}>Conquistas</Typography>
                        <div>
                            <Button className={styles.profile__buttons} variant="primary">Ver mais</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <FloatMenu />
        </div>
    );

};