import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import { LanguageContext } from './contexts/LanguageContext';
import styles from './styles/FormStyles';

const words = {
  english: {
    email: "Email",
    signIn: 'Sign In',
    password: "Password",
    remember: 'Remember Me'
  },
  french: {
    email: 'Courriel Électronique',
    signIn: 'Se Connecter',
    password: "Mot de Passe",
    remember: 'Souviens-toi de Moi'
  },
  spanish: {
    email: 'correo electrónico',
    signIn: 'Registrarse',
    password: "Contraseña",
    remember: 'Recuérdame'
  },
  japanese: {
    email: 'email',
    signIn: 'Sign In',
    password: "Password",
    remember: 'Remember Me'
  }
}

class Form extends Component {
  static contextType = LanguageContext;
  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { email, signIn, password, remember } = words[language];
    return ( 
      <main className={classes.main} >
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
            <MenuItem value="japanese">Japanese</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>{ email }</InputLabel>
              <Input id='email' name='email' autoFocus></Input>
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>{password}</InputLabel>
              <Input id='password' name='password' autoFocus></Input>
            </FormControl>
            <FormControlLabel 
              control={<Checkbox color='primary' />} 
              label={remember}
            />
            <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>{signIn}</Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);