'use client';
import React from 'react';
import styles from '../../styles/concessionaria.module.css'
import { TbTriangleInvertedFilled } from 'react-icons/tb'

function MyPage() {
  const logout = () => {
  };

  return (
    <div className={styles.box}>
      <div className={styles.row_1}>
        <h1 className={styles.hello}>Olá, Concessionária</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <div className={styles.tabs}>
        <button>Revisões pendentes</button>
        <button>Revisões concluídas</button>
      </div>
      <table className={styles.grid}>
        <thead>
          <tr className={styles.item}>
            <th>Proprietario</th>
            <th>Trator</th>
            <th>Data/Hora</th>
            <th>Data da ultima revisão</th>
            <th>Motivo da ultima revisão</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
          </tr>
        </tbody>
      </table>
      <div className={styles.tabs}>
        <button>
          <div className={styles.arrow_div}>
            Ver itens <TbTriangleInvertedFilled className={styles.arrow_icon} />
          </div>
        </button>
        <button>Editar revisão</button>
      </div>
    </div>
  );
}

export default MyPage;
