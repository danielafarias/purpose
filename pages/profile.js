import Head from 'next/head';
import { Container, Grid, Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import FloatMenu from '../components/FloatMenu';
import axios from 'axios';
import styles from '../styles/profile.module.scss';

export default function Profile({ profiles }) {
    
    return (
        <div className={styles.profile}>
            <Head>
                <title>Perfil</title>
            </Head>

            <Container fixed>
                <Grid container justifyContent="center" alignItems="center" spacing={4}>
                    <Grid item className={styles.profile__infos}>
                        <Grid item >
                            {profiles.map(profile => (
                                <img src={profile.profileImage} key={profile.id} className={styles.profile__image} />
                            ))}
                        </Grid>

                        <Grid item>
                            {profiles.map(profile => (
                                <Typography className={styles.profile__nameTitle} key={profile.id}>
                                    {profile.userName}
                                </Typography>
                            ))}
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

                            <Typography className={styles.profile__charTexts}>Ouro:</Typography>

                            <Button className={styles.profile__buttons} variant="primary" href='profile/edit-char'>Editar Personagem</Button>
                        </Grid>
                    </Grid>

                    <Grid className={styles.profile__bagdes}>
                        <Typography className={styles.profile__bagdesTitle}>Conquistas</Typography>
                        <Grid>
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                        </Grid>
                        <Button className={styles.profile__buttons} variant="primary" href='profile/badges'>Ver mais</Button>
                    </Grid>
                </Grid>
            </Container>
            <FloatMenu />
        </div>
    );

};

Profile.getInitialProps = async ctx => {
    try {
        const prof = await axios.get('http://purposeapi.azurewebsites.net​/api​/Client​');
        const profiles = prof.data;
        return { profiles };
    } catch (error) {
        return { error };
    }
};

/* 

mudar o "axios.get" para o link 
http://purposeapi.azurewebsites.net​/api​/Client​/GetUsuarioByUserName​/{userName}
com a "/${id}" do cliente no lugar de "/{userName}"

*/