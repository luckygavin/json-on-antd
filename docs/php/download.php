<?php 
// 后端的模拟单条数据
$pis = '{"id":"1925","hostname":"tc-click-log1-off.tc","sn":"686N32X","status":"14","model_id":"15","rack":"TC706-03-11-4","container_id":"488","rms_product_id":"174"}';
$pis = json_decode($pis);
// 数据字段：id,hostname,sn,status,model_id,rack,container_id,rms_product_id

$page = $_REQUEST['page'];
$size = $_REQUEST['size'];
$total = $_REQUEST['total'];
$total == 0 && $total = 720;
$length = $size;
if($page*$size>$total){
    $length = $size - $page*$size + $total;
}
// $length -= 1;
// $length += $length*2;
$data = array();
for($i=0;$i<$length;$i++){
    $data[$i] = $pis;
}
$result = array('status'=>0, 'data'=>$data, 'total'=>$total);
sleep(2);
echo json_encode($result);

?>