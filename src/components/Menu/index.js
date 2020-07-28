import React from "react";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import "./Menu.css";
//import ButtonLink from "./components/ButtonLink";

function Menu() {
	return (
		<nav className="Menu">
			<a href="./">
				<img className="Logo" src={Logo} alt="AluraFLix logo" />
			</a>

			<Button as="a" className="ButtonLink" href="/">
				Novo vídeo
			</Button>
		</nav>
	);
}

export default Menu;
