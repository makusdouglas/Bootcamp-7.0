import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';
import logo from '../../assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Markus Douglas</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Markus Douglas"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
