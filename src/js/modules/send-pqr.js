/** @format */
import { showModalLoader } from "./modal-loader.js";

import {dissipatedAnimation} from "./dissipated-animation.js"

const form_pqr = document.getElementById("form_pqr");


form_pqr.addEventListener("submit", (e) =>
{
  e.preventDefault()
  showModalLoader();
  dissipatedAnimation()
  setTimeout(() =>
  {
    form_pqr.reset()
   
  },8000)

});

// value="https://zagui-master.github.io/zaguisoft.github.io/pages/courses.html" />
