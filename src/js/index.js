"use strict"

function changeColor(newColor, id) {
  try {
    const elem = document.getElementById(id);
    elem.style.color = newColor;
  } catch (element) {
    console.log(element)
  }
}