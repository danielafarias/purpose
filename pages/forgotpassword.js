import { FormControl } from 'react-bootstrap'
import { Box, TextField } from '@material-ui/core'
import styles from '../styles/forgotpassword.module.scss'

export default function forgotpassword() {
    return (
      <div className={styles.background}>
      <div className={styles.organizer}>
        <div className={styles.header}></div>    
        <form className={styles.emailConfirmation} noValidate autoComplete="off" disableUnderline='true'>
                <TextField id="standard-basic" label="Confirme seu Email" InputProps={{ disableUnderline: true }} InputLabelProps={{style: {fontSize: 15, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)"}, input: {fontSize: 50}}} />
        </form>  
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
          <form className={styles.password} noValidate autoComplete="off" disableUnderline='true'>
            <TextField id="standard-basic" label="Insira a nova senha" InputProps={{ disableUnderline: true }} InputLabelProps={{style: {fontSize: 15, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)"}, input: {fontSize: 50}}} />
          </form>
          <form className={styles.password} noValidate autoComplete="off" disableUnderline='true'>
            <TextField id="standard-basic" label="Confirme sua senha" InputProps={{ disableUnderline: true }} InputLabelProps={{style: {fontSize: 15, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)"}, input: {fontSize: 50}}} />
          </form>
          <button className={styles.buttonUnclickable}>Alterar Senha</button>
          <footer className={styles.footer}></footer>
    </div>
      </div>
      
      
    )
}