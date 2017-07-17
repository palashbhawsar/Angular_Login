<?php 
$user=json_decode(file_get_contents('php://input'));
$servername = "127.0.0.1";
$username = "root";
$password = "alfa@123";
$dbname = "logincredential";   

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("Connection failed:" .$conn->connect_error);
}



else{
$sql="SELECT ID, username, password FROM data";
    $result= $conn->query($sql);
if($result->num_rows>0){
    while($row =$result->fetch_assoc()){
             $row["password"]. "<br>";
   $username = $row["username"];
        $password = $row["password"];
     
    if($user->username == $username && $user->password == $password)
        
    {
    
        session_start();
        $_SESSION['uid'] = uniqid('ang_');
        print $_SESSION['uid'];
         $_SESSION["username"];
        print $SESSION[$username];
    echo 'success';
}    }   
}   
}
?>