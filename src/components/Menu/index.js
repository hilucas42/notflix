import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img
          src="https://fontmeme.com/permalink/200730/2d074d7aa68544df018fded1d3638d6b.png" 
          className="Logo"
          alt="NotFlix logo"
          title="It's not that famous Flix"
        />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
