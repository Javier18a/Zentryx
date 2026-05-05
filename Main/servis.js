document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.querySelector(".search-box input");
  const botonesFiltro = document.querySelectorAll(".filtros button");
  const cards = document.querySelectorAll(".card");

  let categoriaActiva = "Todos";

  // Buscador
  searchInput.addEventListener("input", filtrar);

  // Filtros
  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {

      botonesFiltro.forEach(btn => btn.classList.remove("active"));
      boton.classList.add("active");

      categoriaActiva = boton.textContent.trim();

      filtrar();
    });
  });

  function filtrar() {
    const texto = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const titulo = card.querySelector("h3").textContent.toLowerCase();
      const descripcion = card.querySelector("p").textContent.toLowerCase();
      const categoria = card.dataset.categoria;

      const coincideTexto =
        titulo.includes(texto) || descripcion.includes(texto);

      const coincideCategoria =
        categoriaActiva === "Todos" || categoria === categoriaActiva;

      if (coincideTexto && coincideCategoria) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

});

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalCat = document.getElementById("modal-cat");

const botonesVerMas = document.querySelectorAll(".ver-mas");

// Abrir modal
botonesVerMas.forEach(btn => {
  btn.addEventListener("click", () => {

    modalTitle.textContent = btn.dataset.titulo;
    modalDesc.textContent = btn.dataset.desc;
    modalCat.textContent = btn.dataset.cat;

    modal.style.display = "flex";
  });
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar clic afuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});