<?php
require_once 'config/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome     = trim($_POST['nome'] ?? '');
    $whatsapp = trim($_POST['whatsapp'] ?? '');
    $assunto  = trim($_POST['assunto'] ?? '');
    $mensagem = trim($_POST['mensagem'] ?? '');

    if (!empty($nome) && !empty($whatsapp) && !empty($assunto) && !empty($mensagem)) {
        $stmt = $pdo->prepare("INSERT INTO fale_conosco (nome, whatsapp, assunto, mensagem) VALUES (:nome, :whatsapp, :assunto, :mensagem)");
        $stmt->execute([
            ':nome'     => $nome,
            ':whatsapp' => $whatsapp,
            ':assunto'  => $assunto,
            ':mensagem' => $mensagem
        ]);
    }

    header('Location: ../index.php?status=sucesso#contato');
    exit;
}