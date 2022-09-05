const divEscape = document.querySelector('.divEscape');
const btnComecar = document.querySelector('.btnComecar');
const btnParar = document.querySelector('.btnParar');

btnComecar.addEventListener("click", () => (divEscape.style.display = "block"));

btnParar.addEventListener("click", () => (divEscape.style.display = "none"));

divEscape.addEventListener("mouseover", () => {
  let x = Math.random() * (80 - 1) + 1;
  let y = Math.random() * (80 - 1) + 1;
  divEscape.style.left = `${x}%`;
  divEscape.style.top = `${y}%`;
});
