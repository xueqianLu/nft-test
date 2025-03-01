'use client';

// import { ConnectButton } from '@rainbow-me/rainbowkit';
import ConnectButton_custom from './ConnectButton_custom';
import styles from '@/styles/Header.module.scss';


function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.logo}>
        <a href="/"><img rel='preload' src="/images/logo.png" alt="" /></a>
      </div>

      <ConnectButton_custom isPage={false} />
    </header>
  );
}

export default Header;
