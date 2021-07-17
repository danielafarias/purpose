import Head from 'next/head';
import Footer from '../components/Footer';
import {Container, Row, Col, Button} from 'react-bootstrap';
import styles from '../styles/welcome.module.scss';

export default function Welcome() {
    return (
        <div className={styles.welcome}>
            <Head>
                <title>Purple</title>
            </Head>
            <main>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col className={styles.welcome__header}>
                                    <img src='new_images/persoicones-19.svg' className={styles.welcome__logo}/>
                                    <span>Purple</span>
                                </Col>
                            </Row>

                            <Col>
                                <h1>Início da Aventura</h1>
                                <p><strong>Suba de nível em seu conhecimento de programação</strong></p>
                            </Col>

                            <Col className={styles.welcome__buttons}>
                                <Button className={styles.button__register} varian="primary">Inscrever-se</Button>
                            </Col>

                            <Col className={styles.welcome__buttons}>
                                <Button className={styles.button__login} variant="primary">Entrar</Button>
                            </Col>

                            <Col>
                                <img src='new_images/persoicones-24.svg' />
                            </Col>
                        </Col>
                    </Row>

                    <Row className={styles.welcome__intro}>
                        <Col>
                            <Col>
                                <h2>Quem somos?</h2>
                                <p className={styles.intro__text}>
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
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </div>
    );

};