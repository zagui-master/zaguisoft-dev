/** @format */

import { showUserNameInheader } from "./modules/show-user-name-header.js";

showUserNameInheader();

const date = document.getElementById("date");

let d = new Date();

let year = d.getFullYear();

date.innerHTML = year;
