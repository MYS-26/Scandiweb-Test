<?php

interface ProductValidate{

    public function validateSKU();
    public function validateName();
    public function validatePrice();
    public function validateType();
    public function validateAttributes();
}

?>