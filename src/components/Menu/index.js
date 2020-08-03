import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {  //componente que retorna o html do react
    return (
        <nav className="Menu" style={{ background:"#22252C"}}>
            <Link to="/">
                <img className="Logo" src={Logo} alt="Myflix logo" />
            </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
    );
}
//Button as='a' => comando para o botão se comportar como link
export default Menu;
//exporta para conseguir importar de outro local