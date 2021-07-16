import Head from 'next/head';
import {Button} from 'react-bootstrap';
import styles from '../styles/welcome.module.scss';

export default function WelcomeHome() {
    return (
        <>
            <Head>
                <title>Purple</title>
            </Head>
            <main>
                <h1>Purple</h1>
                <h2>Início da Aventura</h2>
                <p>Suba de nível em seu conhecimento de programação</p>
                <Button variant="primary" type="submit">Inscrever-se</Button>
                <Button variant="primary" type="submit">Entrar</Button>
                <h2>Quem somos?</h2>
                <p>Texto teste</p>
            </main>

            <footer>
                <p>Logo Facebook | Logo LinkedIn | Logo GitHub</p>
            </footer>
        </>
    );

};