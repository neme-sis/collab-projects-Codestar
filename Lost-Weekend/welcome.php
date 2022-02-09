<?php
    $email = $_POST['email'];
    $password = $_POST['password'];
    $connection = mysqli_connect('localhost', 'id16761644_sayan', 'p3Yk}{8c)O?U7R*}', 'id16761644_sayandb');
    if($connection){
        $sql = "SELECT pass FROM lostweekend WHERE email = '$email';";
        $result = mysqli_query($connection, $sql);
        $data = mysqli_fetch_array($result);
        if($data && $data[0] == $password)
        {
            include "loader.html";
            include "home.html";
            include "footer.html";
        }
        else{
        include "error.html";
        include "./index.html";
        }
    }
?>