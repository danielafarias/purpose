import React from 'react';
import { useState } from 'react'
import Header from '../components/Header';
import styles from '../styles/pages/configs.module.scss';
import FloatMenu from '../components/FloatMenu';
import { Grid, TextField, Button } from '@material-ui/core';
import { configuration, getUserByEmail } from '../api/axios';

export default function Configs() {

    const [valor, setValor] = React.useState("")
    const [valor1, setToggle1] = React.useState(false)
    const [valor2, setToggle2] = React.useState(false)
    const [nome, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [passwordHash, setPasswordHash] = React.useState('');

    const submitHandler = async event => {
    event.preventDefault();

    try {

      await configuration(userName, email, nome, lastName);
  
    } catch (err) {
      setPasswordError(true);
    }

    const obj = JSON.parse(window.localStorage.getItem('user'));
    setEmail(obj.em);
    setPasswordHash(obj.pass)
    console.log(obj.em)
    console.log(obj.pass)
  }

  const submitHandler2 = async event => {
    event.preventDefault();

    try {

      await configuration(userName, email, nome, lastName);
  
    } catch (err) {
      setPasswordError(true);
    }
    const obj = JSON.parse(window.localStorage.getItem('user'));
    setEmail(obj.em);
    setPasswordHash(obj.pass)
    console.log(obj.em)
    console.log(obj.pass)
  }

    function toogle() {   
        if (valor1 == true) {
            document.getElementById('aaa').setAttribute('readonly', true)
            setToggle1(false)
        } else {
            document.getElementById('aaa').removeAttribute('readonly')
            setToggle1(true)
        }
    }

    function toogle2() {   
        if (valor2 == true) {
            document.getElementById('bbb').setAttribute('readonly', true)
            setToggle2(false)
        } else {
            document.getElementById('bbb').removeAttribute('readonly')
            setToggle2(true)
        }
    }

     return (
        <form onLoad={submitHandler}>
         <Grid className={styles.background}>
             <header className={styles.background__header}>
                 <Header pageName='Configurações' />
             </header>
             <img className={styles.background__img} src={valor}/>
            
            <Grid>
                <input className={styles.background__inputUrl} id='texto' type='text'></input>
                <button
                    onClick={() => setValor(document.getElementById("texto").value)}
                >aaa</button>
            </Grid>

                <Grid className={styles.background__gridConfig}>
                <button type="submit" className={styles.background__buttons} id="end-editing" onClick={() => toogle()}></button>
                {/* <input id='aaa' className={styles.background__inputs} type="text" defaultValue='Usuário' readonly='true'  class="field left"></input>   */}
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> 
                </Grid>
                <Grid className={styles.background__gridConfig}>
                <button type="submit" className={styles.background__buttons} id="end-editing2" onClick={() => toogle2()}></button>
                {/* <input id='bbb' className={styles.background__inputs} type="text" defaultValue='Senha' readonly='true'  class="field left"></input> */}
                <TextField
                    value={passwordHash}
                    //onChange={(e) => setName(e.target.value)}
                /> 
                </Grid>
                <Button
                                    variant="primary"
                                    type='submit'
                                    onSubmit={submitHandler2}>                                    
                                    Aventurar-se
                                </Button>
             <footer>
                 <FloatMenu/>
             </footer>         
         </Grid>
         </form>
     )
 }