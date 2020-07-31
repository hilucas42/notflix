import React from 'react';
import DefaultTemplate from '../../../components/DefaultTemplate';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <DefaultTemplate>
      <h1>Cadastro de categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>
          Cadastrar
        </button>
      </form>
      <Link to='/cadastro/video'>
        Cadastrar vídeo
      </Link>
    </DefaultTemplate>
  );
}

export default CadastroCategoria;