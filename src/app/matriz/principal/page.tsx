'use client';
import React from 'react';
// import './page.css';
import styles from '../../styles/matriz.module.css'

function MyPage() {
  const logout = () => {
  };

  return (
    <div className={styles.box}>
      <div className={styles.row_1}>
        <h1 className={styles.hello}>Olá, Matriz</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <div className={styles.tabs}>
        <button>Cadastrar proprietário</button>
        <button>Tratores</button>
        <button>Revisões pendentes</button>
        <button>Revisões concluídas</button>
      </div>
      <table className={styles.grid}>
        <thead>
          <tr className={styles.item}>
            <th>Proprietário</th>
            <th>Fazenda</th>
            <th>Trator</th>
            <th>Modelo</th>
            <th>Chassi</th>
            <th>Data da Compra</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" value="Lorem" /></td>
            <td><input type="text" value="Tres corações" /></td>
            <td><input type="text" value="Massey Ferguson" /></td>
            <td><input type="text" value="MF-275" /></td>
            <td><input type="text" value="147852369" /></td>
            <td><input type="text" value="25/04/2021" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyPage;
