<?php
error_log(0);
//include('index.php'); 
session_start(); // Starting Session
$error = ''; // Variable To Store Error Message

if (isset($_POST['submit'])) {
    if (empty($_POST['username']) || empty($_POST['password'])) {
        $error = "Username or Password is invalid";

    } else {
        // Define $username and $password
        $gmail = $_POST['username'];
        $pwd = $_POST['password'];
        // mysqli_connect() function opens a new connection to the MySQL server.
        $basededatos = "llops";
        $conn = mysqli_connect('localhost', 'root', '987654321', 'llops') or die("No s’ha trobat la BBDD");
        // SQL query to fetch information of registerd users and finds user match.
        $query = "SELECT * FROM `user` WHERE correo = '$gmail' && password = '$pwd'";
        $resultat = mysqli_query($conn, $query) or die("Algo ha ido mal en la consulta a la base de datos");
        $fila = mysqli_fetch_array($resultat);
        // To protect MySQL injection for Security purpose
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $gmail, $pwd);
        $stmt->execute();
        $stmt->bind_result($gmail, $pwd);
        $stmt->store_result();

        if ($stmt->fetch()) {
            
            $_SESSION['login_user'] = 1; 
            echo "correcto" ;
            $_SESSION['username'] = $fila['username'];
            $_SESSION['logueado'] = true;
             header("location: index.php");
        } 
    }
    mysqli_close($conn); // Closing Connection
}
