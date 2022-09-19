<?php 

class Product implements \JsonSerializable{

    protected $sku;
    protected $name;
    protected $price;
    protected $type;
    protected $attribute;

    protected $attributeName = "";
    protected $attributeUnit = "";

    public function setSKU($sku){ $this->sku = $sku; }
    public function setName($name){ $this->name = $name; }
    public function setPrice($price){ $this->price = $price; }
    public function setType($type){ $this->type = $type; }
    public function setAttribute($attribute){ $this->attribute = $attribute; }

    public function getSKU(){ return $this->sku; }
    public function getName(){ return $this->name; }
    public function getPrice(){ return $this->price; }
    public function getType(){ return $this->type; }
    public function getAttribute(){ return $this->attribute; }

    public function setUserInput($input){
            $this->sku = $input->sku;
            $this->name = $input->name;
            $this->price = $input->price;
            $this->type = $input->type;
            $this->attribute = $input->attribute;
    }

    public function dbGetAllProducts(){
        $db = new Database();
        $db->connect();
        $result = $db->get()->query("SELECT type, id, sku, name, price, type, attribute FROM products");
        $db = null; return $result->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE); 
        //return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public function dbDeleteProducts($id){
        if(!is_array($id) || count($id) == 0) return 'Error';

        $db = new Database();
        $db->connect();
        $marks = str_repeat("?,", count($id)-1) . '?';
        $query = $db->get()->prepare("DELETE FROM products WHERE id IN ($marks)");
        if($query->execute($id)) {
            $response = 'Record deleted successfully.';
        } else {
            $response = 'Failed to delete record.';
        }
        $db = null;
        return $response;
    }

    public function dbAddProduct(){
        $db = new Database();
        $db->connect();
        $query = $db->get()->prepare("INSERT INTO products (sku, name, price, type, attribute) VALUES(?, ?, ?, ?, ?)");
        $values = [];
        array_push($values, $this->sku, $this->name, $this->price, $this->type, $this->attribute);
        if($query->execute($values)) {
            $response = 'Record added successfully.';
        } else {
            $response = 'Failed to add record.';
        }
        $db = null;
        return $response;
    }

    public function checkUserInputExist($input){
        if(isset($input->sku) && isset($input->name) && isset($input->price) 
            && isset($input->type) && isset($input->attribute))
            return true;
        else false;
    }

    public function checkUniqueSKU($sku){
        $db = new Database();
        $db->connect();
        $result = $db->get()->query("SELECT * FROM products WHERE sku = '$sku'");
        if($result->rowCount() == 0) return true;
        else  return false;
    }

    public function validateSKU(){

        return ((strlen($this->sku) > 0) && (ctype_alnum($this->sku)));
    }

    public function validateName(){
        return (strlen($this->name) > 0);
    }

    public function validatePrice(){
        return ((strlen($this->price) > 0) && filter_var($this->price, FILTER_VALIDATE_FLOAT) 
            && floatval($this->price >= 0));
    }

    public function jsonSerialize()
    {
        $vars = get_object_vars($this);

        return $vars;
    }




}
?>