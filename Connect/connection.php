<?php
// the message
$creator = "gairiksharma2000@gmail.com";
$sender = $_POST["email"];


$msg = $_POST["message"]."\nFrom ".$_POST["name"];
$default_msg = "Thank you for submitting";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);
// send email
mail($sender,"CodeStar Form Submission",$default_msg);
mail($creator, "CodeStar Form Submission", $msg);
echo("Thank You ".$_POST["name"]." for submitting our form");
?>