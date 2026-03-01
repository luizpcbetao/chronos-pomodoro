import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault(); // Não segue o link

    console.log('Clicado');
  }

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a className={styles.menuLink} href='#' aria-label='Ir para a Home' title='Ir para a Home'>
        <HouseIcon />
      </a>

      <a className={styles.menuLink} href='#' aria-label='Ver Histórico' title='Ver Histórico'>
        <HistoryIcon />
      </a>

      <a className={styles.menuLink} href='#' aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Alterar Tema'
        title='Alterar Tema'
        onClick={event => handleThemeChange(event)}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
