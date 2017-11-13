<?php
 require("init.php");
 @$p=$_REQUEST['phone'];
 @$mcode=$_REQUEST['mcode'];
 $sql="select * from qy_user where phone='$p' AND mcode='$mcode'";
 $result=mysqli_query($conn,$sql);
 $row=mysqli_fetch_assoc($result);
 if($row==null){
    echo '{"code":-1}';
 }else{
    $uid=$row["uid"];
    echo '{"code":1,"msg":"µÇÂ¼³É¹¦","uid":'.$uid.'}';
 }
