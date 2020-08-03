import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/28310710?s=460&u=6a3ae041a85ac478465af1af5e2ee4aba9b217b0&v=4" alt="Gabriele Jandres" />
        <div>
          <strong> Gabriele Jandres </strong>
          <span> Matemática </span>
        </div>
      </header>

      <p>
        Monitora de Números Inteiros e Criptografia para o DCC - UFRJ
        <br /><br />
        Apaixonada pela capacidade da matemática de nos fornecer soluções abstratas para problemas reais e concretos do nosso dia a dia.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong> R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;