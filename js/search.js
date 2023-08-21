let btnSearch = document.getElementById('btnSearch');

const mostrarBuscador = (e) => {
  let buscador = e.target.parentNode.parentNode.children[0];
  buscador.classList.toggle('active');
}

btnSearch.addEventListener("click", mostrarBuscador);