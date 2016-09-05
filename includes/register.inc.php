<?php
include_once 'db-connect.php';
include_once 'db-config.php';
 
$error_msg = "";
 
if (isset($_POST['email'], $_POST['p'], $_POST['fname'], $_POST['lname'], $_POST['phone'], $_POST['age'], $_POST['desc'], $_POST['latitude'], $_POST['longitude'], $_POST['radius'])) {
    
    // TODO: sanitize coordinates

    // Sanitize and validate the data passed in
    $fname = filter_input(INPUT_POST, 'fname', FILTER_SANITIZE_STRING);
    $desc = filter_input(INPUT_POST, 'desc', FILTER_SANITIZE_STRING);
    $lname = filter_input(INPUT_POST, 'lname', FILTER_SANITIZE_STRING);
    $age = filter_input(INPUT_POST, 'age', FILTER_SANITIZE_NUMBER_INT);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Not a valid email
        $error_msg .= '<p class="error">The email address you entered is not valid</p>';
    }

    /* Sanitize and validate phone number */
    $phone = preg_replace('/[^0-9]/', '', $_POST['phone']);
    if(!strlen($phone) === 10) {
        $error_msg .= '<p class="error">Invalid phone number.</p>';
    }
 
    $password = filter_input(INPUT_POST, 'p', FILTER_SANITIZE_STRING);
    if (strlen($password) != 128) {
        // The hashed pwd should be 128 characters long.
        $error_msg .= '<p class="error">Invalid password configuration.</p>';
    }
 
    $prep_stmt = "SELECT id FROM pukit WHERE email = ? LIMIT 1";
    $stmt = $mysqli->prepare($prep_stmt);
 
   // check existing email  
    if ($stmt) {
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->store_result();
 
        if ($stmt->num_rows == 1) {
            // A user with this email address already exists
            $error_msg .= '<p class="error">A user with this email address already exists.</p>';
            $stmt->close();
        }
    } else {
        $error_msg .= '<p class="error">Database error</p>';
        $stmt->close();
    }
 
    if (empty($error_msg)) {
 
        // Create hashed password using the password_hash function.
        // This function salts it with a random salt and can be verified with
        // the password_verify function.
        $password = password_hash($password, PASSWORD_BCRYPT);
 
        // Insert the new user into the database 
        if ($insert_stmt = $mysqli->prepare("INSERT INTO pukit (age, puh, email, latitude, longitude, radius, description, image, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")) {
            $insert_stmt->bind_param('sss', $username, $email, $password); // TODO
            if (! $insert_stmt->execute()) {
                header('Location: ../error.php?err=Registration failure: INSERT');
            }
        }
        header('Location: ./register_success.php');
    }
}
?>
