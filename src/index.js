import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Layout } from "./componentes/layout";

function Example() {
	return <Layout />;
}

ReactDOM.render(<Example />, document.getElementById("root"));
