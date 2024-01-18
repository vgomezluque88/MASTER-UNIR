<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/server.css">
    <script src="js/joc.js"></script>
    <title>Home</title>
</head>
<?php include('variables.php'); // Includes Login Script
echo $username;
if ($loginado) {
?>

    <body>
        <h1 class="Color1">LOS HOMBRES DEL JACO</h1>
        <div class="loginyregister">
            <?php  // Includes Login Script
            echo $username;
            ?>
        </div>

        <div class="servers">
            <div class="servidor">
                <h3 class="Color1Log">
                    <form action="meterteenpartida.php" method="POST">
                        <input type="submit" value="SERVIDOR ESPAÑA" class="enviarSubmit">
                    </form>
                </h3>
            </div>
            <div class="servidor">
                <h3 class="Color1Log"><a href="joc.html">Servidor Lituania</a></h3> <button>-</button>
            </div>
            <div class="servidor">
                <h3 class="Color1Log"><a href="joc.html">Servidor Marruecos</a></h3> <button>-</button>
            </div>

        </div>

    </body>

    </html>

<?php } else {
    header('location: index.php');
?>

<?php
} ?>