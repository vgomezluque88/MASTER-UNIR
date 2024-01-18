<?php 
include('variables.php');
$basededatos = "llops";
$connexio = mysqli_connect('localhost', 'root', '987654321', 'llops') or die("No s’ha trobat la BBDD");

mysqli_select_db($connexio, $basededatos) or die("No se encuentra la tabla");
mysqli_set_charset($connexio, "utf8");

//$usa =  $_POST['user'];
$rol = "rey";
$partida = 1;

$nuevoregistro = "INSERT INTO `partida`(`usuario`, `rol`, `partida`) VALUES ('$username','$rol','$partida')";
$resultat = mysqli_query($connexio, $nuevoregistro) or die("Algo ha ido mal en la consulta a la base de datos");


?>








<?php
mysqli_close($connexio);
header('Location: /../joc.php');

?>

