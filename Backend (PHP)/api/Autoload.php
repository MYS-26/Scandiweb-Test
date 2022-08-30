<?php

spl_autoload_register(
    function ($class){
        $paths = array("class/", "class/ProductTypes/");
        $extension = ".php";

        foreach($paths as $path){
            $full_path = $path . $class . $extension;
            if(is_file($full_path)){
                include_once $full_path;
                return true;
            }
        }

        return false;
    }
);

?>