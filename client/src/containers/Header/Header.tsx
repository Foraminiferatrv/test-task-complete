import { Logo } from '../../components/UI/Logo/Logo'
import classes from './Header.module.scss'

function Header() {

  return <header className={classes.Header}>
    <Logo />
  </header>
}

export { Header }