import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL_TOP = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://aulaflix.herokuapp.com/categorias';
      fetch(URL_TOP)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);
  return (
    <PageDefault>
      <h1>
        cadastro de Categoria:
        {values.titulo}
      </h1>
      <form
        style={{ background: values.cor }}
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);

          clearForm();
        }}
      >
        <FormField
          label="Titulo da Categoria: "
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar</Button>

        {categorias.length === 0 && (
          <div>
            {}
            Loading...
          </div>
        )}

      </form>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
        ))}
      </ul>
      <Link to="/">Ir pra Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
