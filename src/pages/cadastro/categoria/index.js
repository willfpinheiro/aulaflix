import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descrição, cor
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(infosDoEvento) {
    const { name, value } = infosDoEvento.target;
    setValue(name, value);
  }
  return (
    <PageDefault>
      <h1>
        cadastro de Categoria:
        {values.nome}
      </h1>
      <form
        style={{ background: values.cor }}
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
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
      </form>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>{categoria.nome}</li>
        ))}
      </ul>
      <Link to="/">Ir pra Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
