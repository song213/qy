<?php
require("init.php");

@$pno=$_REQUEST["pno"];
if(!$pno){
    $pno=1;
}else{
    $pno=intval($pno);  //将字符串数据转换为整数js parseInt()
}
$output=[
    "recordCount"=>0,  //满足条件的总记录数
    "pageSize"=>20,    //每页大小
    "pageCount"=>0,    //总页数
    "pno"=>$pno,       //当前页码
    "data"=>null       //页面中的数据
];
//查询总的记录数与总的页数
$sql="select count(*) from qy_guide";
$output["recordCount"]=sql_execute($sql)[0]["count(*)"];
$output["pageCount"]=ceil($output["recordCount"]/$output["pageSize"]);
//查询当前页的内容
$start=($output["pno"]-1)*$output["pageSize"];
$count=$output["pageSize"];
$sql="SELECT * from qy_guide limit $start,$count";
$output["data"]=sql_execute($sql);
echo json_encode($output);