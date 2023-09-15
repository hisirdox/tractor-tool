'use client'

import React from 'react';
import styles from '../app/styles/login.module.css'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    const selectElement = document.querySelector('select[name="type"]') as HTMLSelectElement | null;
    const selectedOption = selectElement?.value;

    if (selectedOption === 'matriz') {
      router.push('/matriz/principal');
    }
    if (selectedOption === 'proprietario') {
      router.push('/proprietario/principal');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <form className={styles.login}>
          <img className={styles.cover} />
          <h1>Manutenção de Tratores</h1>
          <div className={styles.form}>
            <p>Nome</p>
            <input className={styles.fields} type="text" defaultValue="admin" name="login" />
            <p>Senha</p>
            <input className={styles.fields} type="text" defaultValue="admin" name="password" />
          </div>
          <select className={styles.fields} name="type">
            <option value="matriz">Matriz</option>
            <option value="proprietario">Proprietário</option>
            <option value="concessionaria">Concessionária</option>
          </select>
          <button className={styles.sender} type="button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}
