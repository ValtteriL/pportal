<?php


class Auth {
    private $Database;
    private $salt = 'dasdawf'

    /* Constructor */
    function __construct() {
        global $Database;
        $this->$Database = $Database;
    }

    /* Functions */
    function validateLogin($email, $pass) {
        if($stmt = $this->Database->prepare("SELECT * FROM pukit WHERE email = ? AND password = ? LIMIT 1")) {
            $stmt->bind_param("ss", $email, md5($pass . $this->salt));
            $stmt->execute();
            $stmt->store_result();

            /* check no of rows */
            if($stmt->num_rows > 0) {
                $stmt->close();
                return TRUE;
            } else {
                $stmt->close();
                return FALSE;
            }
        } else {
            die('ERROR: Could not prepare MySQLi statement');
        }
    }

    function checkLoginStatus() {
        if (isset($_SESSION['loggedin'])) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

    function logout() {
        session_destroy();
        session_start();
    }
}
