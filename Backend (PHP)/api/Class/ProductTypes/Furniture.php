<?php

class Furniture extends Product implements ProductValidate{


    public function validateType(){
        if($this->type == "Furniture"){
            return true;
        }
        else return false;
    }

    public function validateAttributes(){
        $hxwxl = explode("x", $this->attribute);
        if(sizeof($hxwxl) == 3 && is_numeric($hxwxl[0]) && is_numeric($hxwxl[1]) && is_numeric($hxwxl[2]))
            return true;
        else return false;
    }


}


?>