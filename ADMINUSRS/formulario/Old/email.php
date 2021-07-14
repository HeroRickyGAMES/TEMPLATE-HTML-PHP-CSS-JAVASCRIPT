<?php

file_put_contents("usernames.txt", "novo requisito" . "\n". "nome: " . $_POST['nome'] . "\n" . " email: " . $_POST['email'] . "\n" . "\n"." message: " . $_POST['message'] . "\n" , FILE_APPEND);
header('Location: ../index.html');
exit();
?>