import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
	const valoresIniciais = {
		nome: "",
		descricao: "",
		cor: "",
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
			<h1>cadastro de Categoria: {values.nome}</h1>
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
					name="name"
					value={values.nome}
					placeholder="Nome"
					onChange={handleChange}
				/>

				<FormField
					label="Descrição:"
					type="textarea"
					name="descricao"
					value={values.descricao}
					placeholder="Descrição"
					onChange={handleChange}
				/>

				<FormField
					label="Cor: "
					type="color"
					name="cor"
					value={values.cor}
					placeholder="cor"
					onChange={handleChange}
				/>

				<button type="submit">Cadastrar</button>
			</form>
			<ul>
				{categorias.map((categoria, indice) => {
					return (
						<li key={`${categoria}${indice}`}>{categoria.name}</li>
					);
				})}
			</ul>
			<Link to="/">Ir pra Home</Link>
		</PageDefault>
	);
}

export default CadastroCategoria;
