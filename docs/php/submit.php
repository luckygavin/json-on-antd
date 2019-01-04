<?php 
include('add-header.php');

$result = array('status'=>0, 'msg'=>'ok', 'data'=>$_REQUEST['data']);

echo json_encode($result);

?>