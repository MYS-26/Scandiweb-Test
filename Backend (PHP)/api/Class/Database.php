<?php

class Database{

    private $connection;
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "products_db";

    function connect(){

        try{
            $options = [
                PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];

            $this->connection = new PDO("mysql:host=$this->servername;dbname=$this->dbname;charset=utf8mb4", 
                                            $this->username, $this->password, $options);
        }
        catch(PDOException $ex){
            die("error");
        }


    }

    function get(){

        return $this->connection;
    }
}
?>