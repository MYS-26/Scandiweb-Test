<?php

class ProductValidating {

    private $result;
    private $message = [];

    function __construct(ProductValidate $product){
        $this->validate($product);
    }

    public function getResult(){return $this->result;}
    public function getMessage(){return $this->message;}

    public function validate(ProductValidate $product){
        if(!$product->checkUniqueSKU($product->getSKU()))
            array_push($this->message, "SKU is not unique.");
        if(!$product->validateSKU())
            array_push($this->message, "Invalid SKU.");
        if(!$product->validateName())
            array_push($this->message, "Invalid Name.");
        if(!$product->validatePrice())
            array_push($this->message, "Invalid Price.");
        if(!$product->validateType())
            array_push($this->message, "Invalid Type.");
        if(!$product->validateAttributes())
            array_push($this->message, "Invalid Attributes.");
        
        if(sizeof($this->message) > 0) $this->result = false;
        else {
            $this->result = true;
            array_push($this->message, "Valid Data.");
        } 
        
    }




}

?>