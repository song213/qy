<?php
 require("init.php");
 @$uname=$_REQUEST['uname'];
 @$upwd=$_REQUEST['upwd'];
 $sql="select * from qy_user where uname='$uname' and upwd='$upwd'";
 $result=mysqli_query($conn,$sql);
 $row=mysqli_fetch_assoc($result);
 if($row==null){
    echo '{"code":-1,"msg":"�û������벻��ȷ"}';
 }else{
    $uid=$row["uid"];
    echo '{"code":1,"msg":"��¼�ɹ�","uid":'.$uid.'}';
 }

