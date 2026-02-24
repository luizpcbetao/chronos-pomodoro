import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} aria-label='Página Inicial' href='#'>
        <HouseIcon />
      </a>

      <a className={styles.menuLink} aria-label='Histórico de Tarefas' href='#'>
        <HistoryIcon />
      </a>

      <a className={styles.menuLink} aria-label='Configurações do Pomodoro' href='#'>
        <SettingsIcon />
      </a>

      <a className={styles.menuLink} aria-label='Alterar Tema Claro' href='#'>
        <SunIcon />
      </a>
    </nav>
  );
}
