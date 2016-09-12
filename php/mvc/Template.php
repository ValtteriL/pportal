<?php

class Template {
    private $data;

    /* constructor */
    function __construct() {}

    /* Functions */
    function load($url) {
        include($url);
    }

    function setData($name, $value) {
        $this->data[$name] = htmlentities($value, ENT_QUOTES);
    }

    function getData($name) {
        if(isset($this->data[$name])) {
            return $this->data[$name];
        } else {
            return '';
        }
    }
}
