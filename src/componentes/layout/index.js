import React from "react";
import { SubFooter } from "../items/SubFooter";

export const Layout = () => {
	return (
		<div className="cuerpo">
			<div className="header">
				<h1 className="titulos">Header</h1>
			</div>
			<div className="articulo">
				<SubFooter />
			</div>
			<div className="footer">
				<h1 className="titulos">Footer</h1>
			</div>
		</div>
	);
};
