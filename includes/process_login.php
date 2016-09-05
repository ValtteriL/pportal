<?php
include_once 'db-connect.php';
include_once 'functions.php';

sec_session_start();

if(isset($_POST['email'], $_POST['p']))
{
    $email = $_POST['email'];
    $password = $_POST['p']; // Hashed password

    if(login($email, $password, $mysqli) == true)
    {
        header('Location: ../protected_page.php'); // Success
    }
    else
    {
        header('Location: ../login.php?error=1'); // Failure
    }
}
else
{
    echo 'Invalid Request'; // No correct POST values
}


