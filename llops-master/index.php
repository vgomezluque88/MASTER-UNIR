<?php
include('login.php'); // Includes Login Script
echo "login" + $_SESSION['login_user'];

//if (!isset($_SESSION['login_user'])) {
if ($_SESSION['login_user']  == 0) {
?>

    <head>
        <link rel="stylesheet" href="css/index.css">
        <script src="js/joc.js"></script>
        <title>LHDJ</title>
    </head>

    <body>
        <video autoplay muted loop id="backgroundvideo">
        </video>

        <div class="generalIndex">
            <div class="start">
                <h1 class="Color1">LOS HOMBRES DEL JACO</h1>
                <h1 class="Color1">Para iniciar juego tienes que loguearte</h1>
            </div>
            <div class="loginyregister">
                <button onclick="abrirlogin()">
                    <p class="Color1">LOGIN</p>
                </button><br>
                <button onclick="abrirregister()">
                    <p class="Color1">REGISTER</p>
                </button>
            </div>
            <div class="login" id="login">
                <button class="boton-register" onclick="quitarlogin()">x</button><br>
                <form action="" method="post">
                    <label>UserName :</label>
                    <input id="name" name="username" placeholder="username" type="text">
                    <label>Password :</label>
                    <input id="password" name="password" placeholder="**********" type="password"><br><br>
                    <input name="submit" type="submit" value=" Login ">
                    <span><?php echo $error; ?></span>
                </form>
            </div>
            <div class="register" id="register">
                <button class="boton-register" onclick="quitarregister()">x</button><br>
                <form action="register.php" method="POST">
                    <input type="text" name="user" placeholder="Username">
                    <input type="text" name="gmail" placeholder="Correo">
                    <input type="password" name="pwd" placeholder="****">
                    <label for="img">Avatar:</label>
                    <input type="file" id="img" name="img" accept="image/*">
                    <input type="submit" value="Submit" class="enviarSubmit">
                    <input type="text" name="" id="">
                </form>
            </div>

        </div>
    </body>

<?php } else {
?>

    <head>
        <link rel="stylesheet" href="css/index.css">
        <script src="js/joc.js"></script>
        <title>LHDJ</title>
    </head>

    <body>
        <video autoplay muted loop id="backgroundvideo">
        </video>

        <div class="generalIndex">
            <div class="start">
                <h1 class="Color1">LOS HOMBRES DEL JACO</h1>
                <a href="server.php" class="Color1">Start</a>
            </div>
            <div class="loginyregister">
                <h1><?php echo $_SESSION['username'] ?></h1>
                <form action="logout.php" method="POST">
                    <input type="submit" value="logout" class="enviarSubmit">
                </form>
            </div>


        </div>
    </body>
<?php
} ?>