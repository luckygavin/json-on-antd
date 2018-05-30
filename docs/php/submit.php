<?php 
include('add-header.php');

$result = array('status'=>0, 'msg'=>'ok');
sleep(1.5);
echo json_encode($result);

?>