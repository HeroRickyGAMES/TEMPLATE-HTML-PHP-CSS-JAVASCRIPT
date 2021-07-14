<?php

file_put_contents("formulario.txt", $_POST['nome'] .", ". $_POST['email'] . ", " . $_POST['message'] . "\n" , FILE_APPEND);
header('Location: ../../');
exit();
?>