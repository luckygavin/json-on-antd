<?php 
include('add-header.php');

$result = [];
if ($_GET['all']) {
    $result = json_decode('[{"label":"Node1","value":"1-1","children":[{"label":"Child Node1","value":"1-1-1"}]},{"label":"Node2","value":"2-1","children":[{"label":"Child Node3","value":"2-1-3"},{"label":"Child Node4","value":"2-1-4"},{"label":"Child Node5","value":"2-1-5"}]}]');

} else {
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
    $result = $data;
}

sleep(1);
echo json_encode(array(
    'status' => 0,
    'data' => $result,
));
?>
