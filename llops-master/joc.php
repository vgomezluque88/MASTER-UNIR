<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/joc.css">
    <script src="js/joc.js">
    </script>
    <title>joc</title>
</head>

<body>

    <div class="general">
        <div class="central">
            <div class="muertos" id="muertos">
                <p>hola</p>
            </div>
            <div class="jugadores">
                <div class="jugador7 jugador"><img src="img/camello.png" alt="camello" onmouseover="setTimeout(flip, 1000);" id="muerto"> </div>
                <?php
                $basededatos = "llops";
                $connexio = mysqli_connect('localhost', 'root', '987654321', 'llops') or die("No s’ha trobat la BBDD");

                mysqli_select_db($connexio, $basededatos) or die("No se encuentra la tabla");
                mysqli_set_charset($connexio, "utf8");

                $chat = "SELECT * FROM `partida` ";
                $resultat = mysqli_query($connexio, $chat) or die("Algo ha ido mal en la consulta a la base de datos");
                while ($row = mysqli_fetch_array($resultat)) {
                    switch ($row["rol"]) {
                        case "guardia":
                ?>

                            <p class="jugador" id="<?php echo "jugador" ?><?php echo  $row["idjugador"]  ?>"><img src="/img/guardia.pbg.jpg" alt="ciudadano"></p>
                        <?php break;
                        case "cupido":
                        ?>
                            <p class="jugador" id="<?php echo "jugador" ?><?php echo  $row["idjugador"]  ?>"><img src="/img/yonki.png" alt="ciudadano"></p>
                        <?php break;
                        case "rey":
                        ?>
                            <p class="jugador" id="<?php echo "jugador" ?><?php echo  $row["idjugador"]  ?>"><img src="/img/JuAN-cARLOS.jpg" alt="ciudadano"></p>
                        <?php break;
                        case "ciudadano":
                        ?>
                            <p class="jugador" id="<?php echo "jugador" ?><?php echo  $row["idjugador"]  ?>"><img src="/img/ciudadano.png" alt="ciudadano"></p>
                        <?php break;
                        case "camello":
                        ?>
                            <p class="jugador" id="<?php echo "jugador" ?><?php echo  $row["idjugador"]  ?>"><img src="/img/camello.png" alt="ciudadano"></p>
                            <?php break;

                            ?>
                <?php
                    }
                }
                mysqli_close($connexio);
                ?>
            </div>
            <div class="comentarios">
                <p>hola</p>

            </div>
        </div>
        <div class="chat" id="chat">
            <h3>CHAT</h3>
            <div class="mensajes" id="mensajes">
                <?php
                $basededatos = "llops";
                $connexio = mysqli_connect('localhost', 'root', '987654321', 'llops') or die("No s’ha trobat la BBDD");

                mysqli_select_db($connexio, $basededatos) or die("No se encuentra la tabla");
                mysqli_set_charset($connexio, "utf8");

                $chat = "SELECT * FROM `chat` ";
                $resultat = mysqli_query($connexio, $chat) or die("Algo ha ido mal en la consulta a la base de datos");
                while ($row = mysqli_fetch_array($resultat)) {

                ?>
                    <?php if ($row["idusername"] == 1) {

                    ?>

                        <p class="mensaje1"><?php echo $row["mensaje"] ?></p>
                    <?php
                    } else {
                    ?>
                        <p class="mensaje"><?php echo $row["mensaje"] ?></p>

                    <?php
                    }
                    ?>
                <?php
                }
                mysqli_close($connexio);
                ?>
            </div>
            <input type="textarea" placeholder="Escribe tu mensaje" class="mensajeenviar" id="mensajeenviar"><button onclick="enviar()"> <img src="/img/logoenviar.png" alt="enviar" class="logoenviar"> </button></input>

        </div>

    </div>
</body>