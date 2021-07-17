import {Container, Grid} from '@material-ui/core';
import styles from '../styles/footer.module.scss';

export default function Footer() {
    return(
        <footer className={styles.footer}>
                <Container fixed>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <Grid item>
                                <img src='new_images/redes_Prancheta 1.svg' />
                                <img src='new_images/redes-03.svg' />
                                <img src='new_images/redes-04.svg' />
                                <img src='new_images/redes-02.svg' />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid>
                        <small>© 2021 Purple, Inc.</small>
                    </Grid>
                </Container>
            </footer>
    );

};