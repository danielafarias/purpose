import Head from 'next/head';
import { Container, Grid, Typography} from '@material-ui/core';
import { Button } from 'react-bootstrap';
import FloatMenu from '../../components/FloatMenu';
import styles from '../../styles/edit-char.module.scss';

export default function EditChar() {

    return(
        <div className={styles.editChar}>
            <Head>
                <title>Editar Personagem</title>
            </Head>
            <Container fixed>
                <Typography className={styles.editChar__texts}>Personagens</Typography>
                <Grid container justifyContent="center" alignItems="center" spacing={4}>
                    <Grid item className={styles.editChar__selectChar}>
                        <img src='../new_images/persoicones-23.svg' className={styles.editChar__charImage} />
                        <Typography className={styles.editChar__texts}>Selecionado</Typography>
                    </Grid>

                    <Grid item className={styles.editChar__chars}>
                        <img src='../new_images/persoicones-23.svg' className={styles.editChar__charImage}  />
                        <img src='../new_images/persoicones-24.svg' className={styles.editChar__charImage}  />
                        <img src='../new_images/persoicones-25.svg' className={styles.editChar__charImage}  />
                        <img src='../new_images/persoicones-26.svg' className={styles.editChar__charImage}  />
                        <img src='../new_images/persoicones-27.svg' className={styles.editChar__charImage}  />
                        <img src='../new_images/persoicones-28.svg' className={styles.editChar__charImage}  />
                    </Grid>
                </Grid>

                <Grid className={styles.editChar__buttons}>
                    <Button className={styles.editChar__button} variant="primary" href='/profile'>Salvar</Button>
                    <Button className={styles.editChar__button} variant="primary" href='/profile'>Voltar</Button>
                </Grid>
            </Container>
            <FloatMenu />
        </div>
    );
};