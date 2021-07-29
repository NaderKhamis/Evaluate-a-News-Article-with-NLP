import { handleSubmit } from "./js/formHandler";
import { checkForName } from "./js/nameChecker";
import { checkPolarity } from "./js/polarityChecker";
import { checkForURL } from "./js/urlChecker";

console.log(checkForName);

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

const btn = document.querySelector("#submit");

btn.addEventListener("click", (event) => handleSubmit(event));

export { checkForURL, handleSubmit, checkPolarity };