import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultTemplate from '../../../components/DefaultTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const emBranco = { nome: '', descricao: '', cor: '#000000' };
  const [novaCategoria, setNovaCategoria] = useState(emBranco);
  const [categorias, setCategorias] = useState([]);

  function handleChange(e) {
    setNovaCategoria({
      ...novaCategoria,
      [e.target.getAttribute('name')]: e.target.value,
    });
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://notflix-unlicensed.herokuapp.com/categorias';
    fetch(URL)
      .then(async (resposta) => setCategorias(await resposta.json()));
  }, []);

  return (
    <DefaultTemplate>
      <h1>Cadastro de categoria</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([...categorias, novaCategoria]);
        setNovaCategoria(emBranco);
      }}
      >

        <FormField
          name="titulo"
          type="text"
          label="Categoria: "
          value={novaCategoria.titulo}
          onChange={handleChange}
        />

        <FormField
          name="descricao"
          type="textarea"
          label="Descrição: "
          value={novaCategoria.descricao}
          onChange={handleChange}
        />

        <FormField
          name="cor"
          type="color"
          label="Cor: "
          value={novaCategoria.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">
        Cadastrar vídeo
      </Link>
    </DefaultTemplate>
  );
}

export default CadastroCategoria;
