import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultTemplate from '../../../components/DefaultTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import repoCategorias from '../../../repositories/categorias';

function CadastroCategoria() {
  const emBranco = { titulo: '', descricao: '', cor: '#000000' };
  const [categorias, setCategorias] = useState([]);

  const { valoresForm, handleChange, clearForm } = useForm(emBranco);

  useEffect(() => {
    repoCategorias.getAll().then((resposta) => setCategorias(resposta));
  }, []);

  return (
    <DefaultTemplate>
      <h1>Cadastro de categoria</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([...categorias, valoresForm]);
        clearForm();
      }}
      >

        <FormField
          name="titulo"
          type="text"
          label="Categoria: "
          value={valoresForm.titulo}
          onChange={handleChange}
        />

        <FormField
          name="descricao"
          type="textarea"
          label="Descrição: "
          value={valoresForm.descricao}
          onChange={handleChange}
        />

        <FormField
          name="cor"
          type="color"
          label="Cor: "
          value={valoresForm.cor}
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
