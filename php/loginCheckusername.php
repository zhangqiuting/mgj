<?php
	header("Content-type: text/html; charset=utf-8");
	//1、接收客户端的数据
    $username = $_POST['username'];
    $userpass = $_POST['userpass'];
	
	//2、处理数据
	//1）、搭桥（连接数据库）
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}else{
		//2）、选择目的地（选择操作的数据库）
		mysql_select_db("mgj",$conn);
		//3）、运输数据（执行SQL语句，传输数据）
		$sqlstr="insert into logintable(username,userpass) values('".$username."','".$userpass."')";
		
		mysql_query($sqlstr,$conn);
	 	//4）、拆桥（关闭数据库）
        mysql_close($conn);
        
        echo 1;
	}
?>