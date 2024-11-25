document.getElementById("registro-form").addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("registro-container").style.display = "none";
    document.getElementById("menu-container").style.display = "block";
});

// Lógica para mostrar los módulos correspondientes
document.getElementById("ventas-btn").addEventListener("click", function() {
    toggleModule("ventas-container");
});
document.getElementById("anulaciones-btn").addEventListener("click", function() {
    toggleModule("anulaciones-container");
});
document.getElementById("cierres-btn").addEventListener("click", function() {
    toggleModule("cierres-container");
});
document.getElementById("consulta-btn").addEventListener("click", function() {
    toggleModule("consulta-container");
});
document.getElementById("pqrs-btn").addEventListener("click", function() {
    toggleModule("pqrs-container");
});
document.getElementById("inventario-btn").addEventListener("click", function() {
    toggleModule("inventario-container");
});
document.getElementById("proveedores-btn").addEventListener("click", function() {
    toggleModule("proveedores-container");
});

function toggleModule(moduleId) {
    const modules = document.querySelectorAll("div[id$='-container']");
    modules.forEach(module => module.style.display = "none");
    document.getElementById(moduleId).style.display = "block";
}
