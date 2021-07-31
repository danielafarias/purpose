import Head from 'next/head';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { API } from '../api/API';

export default function Teste() {
    const submitHandler = async event => {
        event.preventDefault();

        const {userName, email, passwordHash} = event.target;
        const item = {
            userName: userName.value,
            email: email.value,
            passwordHash: passwordHash.value,
        }

        const request =  await API.buildApiPostRequest(API.registerUrl(),item).catch(e =>{
            console.error("Erro ao tentar adicionar um item ao banco de dados:", e);
        })

        console.log(request)

        const result = await request.json();
        const id = result.userName;

        this.props.history.push(`http://purposeapi.azurewebsites.net/api/Client/getByUserName/${id}`)
    }

    return (
        <div>
            <Head>
                <title>Página para Teste</title>
            </Head>

            <h4>Adicionar Personagens</h4>
                <Form className='form' onSubmit={submitHandler}>
                    <Form.Group as={Row} controlId='userName'>
                        <Form.Label className='info' column xs='3' sm='2' md='2' lg='2'>userName:</Form.Label>
                        <Col xs='9' sm='9' md='9' lg='9'>
                            <Form.Control size='sm' type='text' placeholder='Digite o nome do personagem.' />
                            <Form.Text className='text-muted'>Esse nome será utilizado na visualização do item na lista.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId='email'>
                        <Form.Label className='info' column xs='3' sm='2' md='2' lg='2'>email:</Form.Label>
                        <Col xs='9' sm='9' md='9' lg='9'>
                            <Form.Control size='sm' type='text' placeholder='Digite a URL da imagem.' />
                            <Form.Text className='text-muted'>A imagem em questão será exibida na lista de itens.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId='passwordHash'>
                        <Form.Label className='info' column xs='3' sm='2' md='2' lg='2'>passwordHash:</Form.Label>
                        <Col xs='9' sm='9' md='9' lg='9'>
                            <Form.Control size='sm' type='text' placeholder='Digite uma descrição.' />
                            <Form.Text className='text-muted'>Essa descrição será utilizada na visualização do item na lista.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Salvar</Button>
                </Form>
        </div>
    );

};