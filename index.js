// Función para generar saludos
function generarSaludo(nombre, ciudad) {
    return "Hola, " + nombre + ". Bienvenido a " + ciudad + "!";
   }
   
   // Variables
   let nombre = "Juan";
   let ciudad = "Madrid";
   
   // Condicional para verificar si el nombre y la ciudad han sido establecidos
   if (nombre && ciudad) {
    console.log(generarSaludo(nombre, ciudad));
   } else {
    console.log("Por favor, introduce un nombre y una ciudad.");
   }
   