import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.scss";
import { Button } from "./components/Button/Button";


const App = () => (
  <div>
    <div>Name: Ui Library</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>

    <div>
      Demo <Button label="Comprarlo" primary={true} />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
