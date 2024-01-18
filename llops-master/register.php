<?php
$basededatos = "llops";
$connexio = mysqli_connect('localhost', 'root', '987654321', 'llops') or die("No s’ha trobat la BBDD");

mysqli_select_db($connexio, $basededatos) or die("No se encuentra la tabla");
mysqli_set_charset($connexio, "utf8");

$usa =  $_POST['user'];
$gmail =  $_POST['gmail'];
$pwd =  $_POST['pwd'];

$nuevoregistro = "INSERT INTO `user`(`username`, `correo`, `password`) VALUES ('$usa','$gmail','$pwd')";
$resultat = mysqli_query($connexio, $nuevoregistro) or die("Algo ha ido mal en la consulta a la base de datos");


?>








<?php
mysqli_close($connexio);
header('Location: /../index.php');

?>

