import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultTemplate from '../../../components/DefaultTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const emBranco = { nome: '', descricao: '', cor: '#000000'};
  const [novaCategoria, setNovaCategoria] = useState(emBranco);
  const [categorias, setCategorias] = useState([]);

  function handleChange(e) {
    setNovaCategoria({
      ...novaCategoria,
      [e.target.getAttribute('name')]: e.target.value
    })
  }

  return (
    <DefaultTemplate>
      <h1>Cadastro de categoria</h1>

      <form onSubmit={e => {
        e.preventDefault();
        setCategorias([...categorias, novaCategoria]);
        setNovaCategoria(emBranco);
      }}>
        
        <FormField
          name="nome"
          type="text"
          label="Categoria: "
          value={novaCategoria.nome}
          onChange={handleChange}
        />

        <FormField
          name = "descricao"
          type = "textarea"
          label = "Descrição: "
          value={novaCategoria.descricao}
          onChange = {handleChange}
        />

        <FormField
          name = "cor"
          type = "color"
          label = "Cor: "
          value={novaCategoria.cor}
          onChange = {handleChange}r
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={index}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to='/cadastro/video'>
        Cadastrar vídeo
      </Link>
    </DefaultTemplate>
  );
}

export default CadastroCategoria;
