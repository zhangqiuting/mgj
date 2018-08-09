<?php
	header("Content-type:text/html; charset=utf-8");

	$username=$_POST["username"];
	// $userpass=$_POST["password"];
	

	$cons=mysql_connect("localhost","root","localhost");

	if(!$cons){
		die("无法连接:".mysql_error());
	}else{
		mysql_select_db("hduser",$cons);
		$sqlstr="select * from usertable where username='".$username."'";
		$result=mysql_query($sqlstr,$cons);
		mysql_close($cons);

	  	$rowCount = mysql_num_rows($result);
		if($rowCount>0){
			echo "1";//用户名已存在
		}else{
			echo "0";
		}
	}

	
?>