<?php 
include('add-header.php');

// 后端的模拟数据，for tree
$data = json_decode('[{"name": "2","key": "2","disabledChecbox": true,"level": 1,"isLeaf": false}, {"name": "3","key": "3","disabledChecbox": false,"level": 1,"isLeaf": false}]');

$key = $_GET['key'];
$level = $_GET['level'];
if ($key) {
    $level = $level ? $level : 0;
    if ($level < 4) {
        foreach ($data as $item) {
            $item->key = $key . '-' . $item->key;
            $item->name = $key . '-' . $item->name;
            $item->level = $level + 1;
        }
    } else {
        $data = [];
    }
}

sleep(1);
echo json_encode(array(
    'status' => 0,
    'data' => $data,
));
?>
