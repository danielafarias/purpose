import { FormControl } from 'react-bootstrap'
import { Grid, Box, TextField } from '@material-ui/core'
import styles from '../styles/forgotpassword.module.scss'
import LoginHeader from '../components/Header';
import EmailIcon from '@material-ui/icons/Email';

export default function forgotpassword() {
    return (
      <div className={styles.background}>
        <div className={styles.organizer}>
        <header className={styles.header}>
            <LoginHeader pageName='Entrar'/>
        </header>
        <Grid className={styles.image} item xl={3} xs={8} sm={4}>
          <img src='/new_images/persoicones-09.svg'/>
        </Grid>
        <Grid className={styles.emailConfirmation} item xs={8} sm={4}>
          <form className={styles.password} noValidate autoComplete="off" disableUnderline='true'>
                  <TextField className={styles.textContent} id="standard-basic" fullWidth label="Confirme seu Email" InputProps={{ disableUnderline: true }} InputLabelProps={{style: {fontSize: 15, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)"}, input: {fontSize: 50}}} />
          </form>  
        </Grid>
        <button className={styles.buttonClickable}>Enviar Código</button>
        <div className={styles.codeOrganizer}>
            <div className={styles.codeBox}></div>
            <div className={styles.codeBox}></div>
            <div className={styles.codeBox}></div>
            <div className={styles.codeBox}></div>
            <div className={styles.codeBox}></div>
            <form className={styles.codeConfirmation} noValidate autoComplete="off" disableUnderline='true'>
                <TextField id="standard-basic" InputProps={{ disableUnderline: true, style: {fontSize: 40, letterSpacing: "25px"}}} inputProps={{ maxLength: 5 }} InputLabelProps={{style: {fontSize: 35, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)", textAlign: 'center'}}} />
            </form>
          </div>
          <button className={styles.buttonUnclickable}>Confirmar</button>
            <Grid className={styles.emailConfirmation} item xs={8} sm={4}> 
              <form className={styles.password} noValidate autoComplete="off" disableUnderline='true'>
                <TextField className={styles.textContent} id="standard-basic" fullWidth label="Insira a nova senha" InputProps={{ disableUnderline: true }} InputLabelProps={{style: {fontSize: 15, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)"}, input: {fontSize: 50}}} />
              </form>
            </Grid>
            <div className={styles.invisible}></div>
            <Grid className={styles.emailConfirmation} item xs={8} sm={4}> 
              <form className={styles.password} noValidate autoComplete="off" disableUnderline='true'>
                <TextField className={styles.textContent} id="standard-basic" fullWidth label="Confirme sua senha" InputProps={{ disableUnderline: true }} InputLabelProps={{style: {fontSize: 15, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)"}, input: {fontSize: 50}}} />
              </form>
            </Grid>     
          <button className={styles.buttonUnclickable}>Alterar Senha</button>
          <footer className={styles.footer}></footer>
      </div>
    </div>  
  )
}