<?php

class Book extends Product implements ProductValidate{


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