import Head from 'next/head';
import { Container, Grid, Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import FloatMenu from '../../components/FloatMenu';
import styles from '../../styles/badges.module.scss';

export default function Badges() {
    return(
        <div className={styles.badges}>
            <Head>
                <title>
                    Conquistas
                </title>
            </Head>

            <Container fixed>
                <Typography className={styles.badges__title}>Conquistas</Typography>
                <Grid container justifyContent="center" alignItems="center" spacing={4}>
                    <Grid className={styles.badges__allBadges}>
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                    </Grid>
                </Grid>

                <Grid className={styles.badges__buttons}>
                    <Button className={styles.badges__button} variant="primary" href='/profile'>Voltar</Button>
                </Grid>
            </Container>
            <FloatMenu />
        </div>
    );

};