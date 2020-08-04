import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/img/LogoFooter.png';

function Footer() {
  return (
    <FooterBase>
      <img className="Logo Footer" src={LogoFooter} alt="Myflix logo" />
      <p>
        Desenvolvido por Georgia Lira durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
