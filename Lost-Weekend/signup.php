<?php
    $name = $_POST['name'];
    $email = $_POST['siemail'];

    $connection = mysqli_connect('localhost', 'id16761644_sayan', 'p3Yk}{8c)O?U7R*}', 'id16761644_sayandb');
    // if($connection)
    // echo "TRUE";

        $sql = "SELECT * FROM `lostweekend` WHERE email = '$email';";
        $result = mysqli_query($connection, $sql);
        $data = mysqli_fetch_assoc($result);
        if($data)
        {   
            include "sign_modal.html";  //already had account
            include "index.html";
        }
        else{
                $pass = rand(100001,999999);
                mail($email, "LOST WEEKEND SIGN UP", "Your password is $pass");
                include "successfully_signup.html";
                $sql = "INSERT INTO lostweekend(email, pass, username) VALUES('$email', '$pass', '$name')";
                $result = $connection->query($sql);
                // if(!$result)
                // die($connection->error);
                include "index.html";
        }
?>