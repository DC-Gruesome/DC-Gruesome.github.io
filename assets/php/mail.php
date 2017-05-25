<?php $name = $_POST['name'];
	$email = $_POST['email'];
	$telephone = $_POST['telephone'];
	$website = $_POST['website'];
	$message = $_POST['message'];
	$formcontent="From: $name \n Message: $message";
	$recipient = "dc.fe.dev@gmail.com";
	$subject = "Contact Form";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	echo "Thank You!";
?>


