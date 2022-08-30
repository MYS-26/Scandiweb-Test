<?php

class DVD extends Product implements ProductValidate{


    public function validateType(){
        if($this->type == "DVD"){
            return true;
        }
        else return false;
    }

    public function validateAttributes(){
        return (is_numeric($this->attribute) && floatval($this->attribute >= 0));
    }


}

?>