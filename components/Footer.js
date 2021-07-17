import {Container, Row, Col} from 'react-bootstrap';
import styles from '../styles/footer.module.scss';

export default function Footer() {
    return(
        <footer className={styles.footer}>
                <Container>
                    <Row>
                        <Col>
                            <img src='new_images/redes_Prancheta 1.svg' />
                        </Col>
                        <Col>
                            <img src='new_images/redes-03.svg' />
                        </Col>
                        <Col>
                            <img src='new_images/redes-04.svg' />
                        </Col>
                        <Col>
                            <img src='new_images/redes-02.svg' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <small>© 2021 Purple, Inc.</small>
                        </Col>
                    </Row>
                </Container>
            </footer>
    );

};