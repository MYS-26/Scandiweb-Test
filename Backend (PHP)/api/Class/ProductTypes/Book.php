<?php

class Book extends Product implements ProductValidate{

    protected $attributeName = "Weight";
    protected $attributeUnit = "KG"; 

    public function validateType(){
        if($this->type == "Book"){
            return true;
        }
        else return false;
    }

    public function validateAttributes(){
        return (is_numeric($this->attribute) && floatval($this->attribute >= 0));
    }


}

?>