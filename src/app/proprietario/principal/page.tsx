'use client';
import React from 'react';
import styles from '../../styles/proprietario.module.css'

function MyPage() {
  const logout = () => {
  };

  return (
    <div className={styles.box}>
      <div className={styles.row_1}>
        <h1 className={styles.hello}>Olá, Proprietário</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <div className={styles.tabs}>
        <button>Cadastrar trator</button>
        <button>Tratores</button>
        <button>Revisões pendentes</button>
        <button>Revisões concluídas</button>
      </div>
      <table className={styles.grid}>
        <thead>
          <tr className={styles.item}>
            <th>Nome</th>
            <th>Fazenda</th>
            <th>Modelo</th>
            <th>Chassi</th>
            <th>Data da Compra</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" value="Lorem" /></td>
            <td><input type="text" value="ipsum" /></td>
            <td><input type="text" value="dolor" /></td>
            <td><input type="text" value="sit" /></td>
            <td><input type="text" value="ammet" /></td>
          </tr>
        </tbody>
      </table>
      <div className={styles.tabs}>
        <button>Manutenção</button>
        <button>Enviar para revisão</button>
      </div>
    </div>
  );
}

export default MyPage;
