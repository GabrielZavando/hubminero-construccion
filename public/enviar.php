<?php
if(isset($_POST["email"]) && !empty($_POST["email"])){
  $destinoMail = "contacto@gbvong.cl";

  $contenido = $_POST["email"];

  mail($destinoMail, "Contacto desde la web", $contenido);

  return print("ok");
}

return print("No se puede enviar");
