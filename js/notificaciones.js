// notificaciones.js — Notification API
// Esta es la API del NAVEGADOR (no del sistema push completo, que necesitaría
// un servidor con claves VAPID). Sirve para mostrar avisos del lado del cliente
// y para entender el permiso que el usuario debe conceder.

// Muestra una notificación SOLO si el usuario ya dio permiso con el botón.
// La usan también carrito.js ("Pedido agregado") y la sincronización del carrito.
function notificar(titulo, cuerpo) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;

  new Notification(titulo, {
    body: cuerpo,
    icon: "img/logo.png",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-notificar");
  const mensaje = document.getElementById("notificaciones-mensaje");

  boton.addEventListener("click", () => {
    // "Notification" no existe en todos los navegadores/contextos; lo comprobamos primero
    if (!("Notification" in window)) {
      mensaje.textContent = "Este navegador no soporta notificaciones.";
      return;
    }

    // Notification.requestPermission() abre el diálogo del navegador
    // ("bloquear" / "permitir"). Devuelve una promesa con la respuesta del usuario.
    Notification.requestPermission().then((permiso) => {
      if (permiso === "granted") {
        // Notificación de bienvenida: título y un objeto con opciones
        notificar("Wings Noriega 🔥", "¡Listo! Te avisaremos de tus pedidos y de las promociones de los lunes de partido.");
        mensaje.textContent = "Notificaciones activadas.";
      } else {
        mensaje.textContent = "No diste permiso para notificaciones.";
      }
    });
  });
});
