import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvieder from "./theme/ThemeProvieder";

render(
  <BrowserRouter>
    <ThemeProvieder>
      <App />,
    </ThemeProvieder>
  </BrowserRouter>,
  document.querySelector(".root")
);
