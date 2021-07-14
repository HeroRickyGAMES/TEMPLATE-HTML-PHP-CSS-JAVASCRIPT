<?php
$servidor = "localhost:3306";
$usuario  ="root";
$senha    ="";
$banco    ="FormularioDB";

$conexao = new mysqli("$servidor,$usuario,$senha,$banco");
if(&conexao ->connect_error){
	die("Falha na conexao".$conexao->connect_error);
}
echo "Conexão realizada com sucesso!";
//header('Location: ../index.html');
$arquivo =	fopen("formulario.txr", "r");

$aspass_duplas = '""';
while(!feof($arquivo)){
	$linhas = fgets($arquivo);
	$dados  = explode(",", $linhas);
	
	$aspas_tratadas = str_replace($aspas_duplas, '', $dados);
	
	echo $campo1 = $dados[0];
	echo $campo2 = $dados[1];
	echo $campo3 = $dados[2];
}
?>