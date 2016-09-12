<?php

class Reg {
    private $Database;
    private $salt = 'dasdawf'

    /* Constructor */
    function __construct() {
        global $Database;
        $this->$Database = $Database;
    }

    /* Functions */
    function checkEmailExist($email) {
        if($stmt = $this->Database->prepare("SELECT * FROM users WHERE email = ?")) {
            $stmt->bind_param("s", $email);
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
            return TRUE;
        }
    }


    // TODO
    function register($email, $password, $) {
        if (!checkEmailExist($email) {
            die('Email exists');
        }
        if($stmt = $this->Database->prepare("INSERT INTO")) {
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
            die('ERRO: Could not prepare mysqli query');
        }
    }
}
