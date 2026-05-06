const modal = document.getElementById("modalNegocio");
const abrir = document.querySelector(".btn-primary"); // botón explorar
const cerrar = document.getElementById("cerrarModal");

// Abrir
abrir.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Cerrar con X
cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar haciendo click fuera
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


const botones = document.querySelectorAll(".filtros button");
const cards = document.querySelectorAll(".negocio-banner-card");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        // Quitar active de todos
        botones.forEach(btn => btn.classList.remove("active"));
        boton.classList.add("active");

        const categoria = boton.textContent.trim();

        cards.forEach(card => {
            const cat = card.getAttribute("data-categoria");

            if (categoria === "Todos" || cat === categoria) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});

