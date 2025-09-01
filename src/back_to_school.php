<?php
// Paramètres de connexion
$host = 'challenge01.root-me.org';
$port = 52002;

// Création de la socket
$socket = fsockopen($host, $port, $errno, $errstr, 30);

if (!$socket) {
    die("Erreur de connexion : $errstr ($errno)\n");
}

try {
    // Réception des données du serveur
    $data = fread($socket, 1024);
    echo "Données reçues du serveur: $data\n";

    preg_match(
        pattern: '/Calculate the square root of (\d+) and multiply by (\d+)/',
        subject: $data,
        matches: $matches
    );
    $n1 = floatval($matches[1]);
    $n2 = floatval($matches[2]);

    // Calcul de la racine carrée de n1
    $sqrt_n1 = sqrt($n1);

    // Multiplication par n2
    $result = $sqrt_n1 * $n2;

    // Arrondi à deux décimales
    $rounded_result = round($result, 2);

    // Envoi de la réponse au serveur
    $response = (string) $rounded_result;
    fwrite($socket, $response . "\n");

    // Réception de la réponse du serveur
    $final_response = fread($socket, 1024);
    echo "Réponse du serveur: $final_response\n";


} finally {
    // Fermeture de la socket
    fclose($socket);
}
?>