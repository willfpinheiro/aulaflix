import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
	const [categorias, setCategorias] = useState(["Teste"]);
	const valoresIniciais = {
		nome: "Categoria Inicial",
		descricao: "Descrição Inicial",
		cor: "#444",
	};
	const [values, setValues] = useState(valoresIniciais);

	function setValue(chave, valor) {
		// chave: nome, descrição, cor
		setValues({
			...values,
			[chave]: valor,
		});
	}

	function handleChange(infosDoEvento) {
		setValue(
			infosDoEvento.target.getAttribute("name"),
			infosDoEvento.target.value
		);
	}

	return (
		<PageDefault>
			<h1>cadastro de Categoria: {values.nome}</h1>
			<form
				style={{ background: values.nome }}
				onSubmit={function handleSubmit(infosDoEvento) {
					infosDoEvento.preventDefault();
					setCategorias([...categorias, values]);
				}}
			>
				<div>
					<label>
						<input
							type="text"
							value={values.nome}
							name="nome"
							onChange={handleChange}
						></input>
					</label>
				</div>
				<div>
					[
					<label>
						Descrição:
						<textarea
							type="text"
							value={values.descricao}
							name="descricao"
							onChange={handleChange}
						></textarea>
					</label>
				</div>
				<div>
					<label>
						Cor:
						<input
							type="color"
							value={values.cor}
							name="cor"
							onChange={handleChange}
						></input>
					</label>
				</div>
				<button>Cadastrar</button>
			</form>

			<ul>
				{categorias.map((categoria, indice) => {
					return (
						<li key={`${categoria}${indice}`}>{categoria.nome}</li>
					);
				})}
			</ul>
			<Link to="/">Ir pra Home</Link>
		</PageDefault>
	);
}

export default CadastroCategoria;
