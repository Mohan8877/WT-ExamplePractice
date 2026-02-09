<?
$name=$_GET["name"];
$email=$_GET["email"];
$age=$_GET["age"];

    
echo "<h2>Submitted Data</h2>";
echo "Name:".$name . "<br>";
echo "Email:".$email."<br>";
echo "Age:".$age."<br>";

$file=fopen("text.txt","r");
echo "data:".$file;



$target_file = "uploads/" . basename($_FILES["fileToUpload"]["name"]);
if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars(basename($_FILES["fileToUpload"]["name"])). " has been uploaded.";
} else {
    echo "Sorry, there was an error uploading your file.";
}   

?>