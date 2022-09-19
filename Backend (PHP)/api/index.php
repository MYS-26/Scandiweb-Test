<?php 
include "Autoload.php";

switch($_SERVER['REQUEST_METHOD']){
    case "GET":
        if(isset($_GET['sku'])){
            $product = new Product;
            echo json_encode($product->checkUniqueSKU($_GET['sku']));
        }
        else{
        $product = new Product; 
        echo json_encode($product->dbGetAllProducts());
        }
        break;
    case "DELETE":
        preg_match_all('!\d+!', $_SERVER['REQUEST_URI'], $matches);
        $product = new Product;
        echo json_encode($product->dbDeleteProducts($matches[0]));
        break;
    case "POST":
        $user_input = json_decode(file_get_contents('php://input'));
        $product = new Product;
        if(!$product->checkUserInputExist($user_input)){
            echo "Missing Data";
            break;
        }
    
        if(file_exists("class/ProductTypes/$user_input->type.php"))
        $product = new $user_input->type;
        else {echo "Invalid Product Type"; break;}
        $product->setUserInput($user_input);
        $CheckInput = new ProductValidating($product);
        if($CheckInput->getResult()) echo json_encode($product->dbAddProduct());
        else echo json_encode($CheckInput->getMessage());
        break;
}
?>
