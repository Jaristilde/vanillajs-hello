/* eslint-disable */
import "bootstrap";
import "./style.css";

function generateExcuse() {
  let pronoun = ["A", "The"];
  let subject = ["teacher", "goat", "cat", "driver", "mechanic"];
  let action = ["took my", "ate my", "tore my", "drove my", "broke my"];
  let object = ["homework", "banana", "clothe", "car", "ratchet"];
  let location = [
    "in the classroom",
    "in my farm",
    "in my house",
    "in my garage",
    "in my workshop"
  ];

  let proindx = Math.floor(Math.random() * pronoun.length);
  let subindx = Math.floor(Math.random() * subject.length);
  let actindx = Math.floor(Math.random() * action.length);
  let objindx = Math.floor(Math.random() * object.length);
  let locindx = Math.floor(Math.random() * location.length);

  let excuse =
    pronoun[proindx] +
    " " +
    subject[subindx] +
    " " +
    action[actindx] +
    " " +
    object[objindx] +
    " " +
    location[locindx];

  return excuse;
}

window.onload = function() {
  const paragraph = document.querySelector("#the-excuse");
  paragraph.textContent = generateExcuse();

  const button = document.getElementById("btn");
  button.addEventListener("click", function() {
    paragraph.textContent = generateExcuse();
  });
};
