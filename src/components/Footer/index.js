import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/Logo.png";

function Footer() {
	return (
		<FooterBase>
			<a href="./">
				<img className="Logo" src={Logo} alt="Logo Aulaflix" />
			</a>
			<p>
				Orgulhosamente criado durante a{" "}
				<a href="https://www.alura.com.br/">Imersão React da Alura</a>
			</p>
		</FooterBase>
	);
}

export default Footer;
