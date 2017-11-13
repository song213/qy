<?php
require("init.php");
@$uname = $_REQUEST["uname"];
@$upwd = $_REQUEST["upwd"];
@$p=$_REQUEST["phone"];
$sql = "insert into qy_user values(null,'$p','$uname','$upwd')";
$result = mysqli_query($conn,$sql);
if($result){
   echo '{"code":1,"msg":"注册成功"}';
}else{
   echo '{"code":-1,"msg":"注册失败"}';
}


