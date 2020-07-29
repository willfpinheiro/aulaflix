import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { LogoImage, MenuWrapper, ButtonLink } from "./style.js";
//import ButtonLink from "../Button";
import "./Menu.css";
//import ButtonLink from "./components/ButtonLink";

function Menu() {
	return (
		<MenuWrapper className="Menu">
			<Link to="/">
				<LogoImage className="Logo" src={Logo} alt="AulaFlix logo" />
			</Link>

			<ButtonLink as={Link} className="ButtonLink" to="/Cadastro/video">
				Novo vídeo
			</ButtonLink>
		</MenuWrapper>
	);
}

export default Menu;
