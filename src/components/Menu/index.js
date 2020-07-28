import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import "./Menu.css";
//import ButtonLink from "./components/ButtonLink";

function Menu() {
	return (
		<nav className="Menu">
			<Link to="/">
				<img className="Logo" src={Logo} alt="AulaFlix logo" />
			</Link>

			<Button as={Link} className="ButtonLink" to="/Cadastro/video">
				Novo vídeo
			</Button>
		</nav>
	);
}

export default Menu;
