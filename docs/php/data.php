<?php
include('add-header.php');

// 机房列表模拟数据
$data1 = '[{"id":1,"name":"TC","object_table":"idc_info","object_id":"2","description":"\u571f\u57ce\u673a\u623f \u5317\u4eac\u5e02\u671d\u9633\u533a\u88d5\u6c11\u4e2d\u8def\u4e593\u53f7A\u5ea7  7\u5c42","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":2,"name":"JX","object_table":"idc_info","object_id":"4","description":"\u9152\u4ed9\u6865\u673a\u623f \u5317\u4eac\u5e02\u671d\u9633\u533a\u9152\u4ed9\u6865\u8def14\u53f7\u5146\u7ef4\u5de5\u4e1a\u56edD\u533a1\u697c2\u95e8\u4e09\u5c42\u5317\u4eac\u7535\u4fe1\u6570\u636e\u4e2d\u5fc33\u5c42","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":9,"name":"DB","object_table":"idc_info","object_id":"25","description":"\u6570\u5b57\u5317\u4eac \u5317\u4eac\u5e02\u671d\u9633\u533a\u5317\u8fb0\u897f\u8def12\u53f7\u6570\u5b57\u5317\u4eac\u5927\u53a6C\u5ea76\u5c42","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":11,"name":"BB","object_table":"idc_info","object_id":"27","description":"\u767e\u5ea6\u5927\u53a6 \u5317\u4eac\u5e02\u6d77\u6dc0\u533a\u4e0a\u5730\u5341\u885710\u53f7\u767e\u5ea6\u5927\u53a6\u5317\u95e8","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":83,"name":"CDN","object_table":"idc_info","object_id":"146","description":"\u767e\u5ea6\u6240\u6709CDN\u865a\u62df\u673a\u623f\uff0c\u4f9b\u9884\u7b97\u4f7f\u7528","zone":"China","net_area":"beijing","area_id":"6","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":""},{"id":84,"name":"YF","object_table":"idc_info","object_id":"147","description":"\u6c38\u4e30\u673a\u623f \u5317\u4eac\u5e02\u6d77\u6dc0\u533a\u6c38\u4e30\u8def\u5317\u6e05\u8def\u4ea4\u53e3\u5317400\u7c73\uff0c\u4e30\u79c0\u4e1c\u8def\u4e2d\u56fd\u7535\u4fe1\u5927\u697c","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":4579,"name":"SZTH","object_table":"idc_info","object_id":"469","description":"\u6c5f\u82cf\u7701\u82cf\u5dde\u5e02\u91d1\u6c99\u6c5f\u8def\u548c\u5415\u6881\u5c71\u8def\u4ea4\u53c9\u53e3\u4e1c\u5317\u89d2\u3010\u592a\u6e56\u673a\u623f\u3011","zone":"China","net_area":"huadong","area_id":"2","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u4e1c"}]';

// 网络服务台模拟数据
$data2 = '[{"id":"49","title":"test工单统计","type":"服务报障","relate_service":"9","content":"<p><strong>test工单统计</strong></p>","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-22 11:04:25","proposer":"","upvote":0,"ostatus":"2","handle_person":"liuzhibin02"},{"id":"46","title":"等发达","type":"服务报障","relate_service":"9","content":"<p>d&#39;f&#39;d&#39;f</p>","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-20 16:29:46","proposer":"","upvote":1,"ostatus":"2","handle_person":"liuzhibin02"},{"id":"36","title":"ddd","type":"服务报障","relate_service":"9","content":"","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-17 00:10:20","proposer":"","upvote":0,"ostatus":"2","handle_person":"liuzhibin02"},{"id":"31","title":"M1机房交换机故障网络抖动严重业务及时迁移和切走","type":"服务报障","relate_service":"14","content":"1、外网网络抖动，严重影响用户使用。请及时切走业务。2、外网网络抖动，严重影响用户使用。请及时切走业务。3、外网网络抖动，严重影响用户使用。请及时切走业务。4、外网网络抖动，严重影响用户使用。请及时切走业务。5、外网网络抖动，严重影响用户使用。请及时切走业务。6、外网网络抖动，严重影响用户使用。7、请及时切走业务。外网网络抖动，严重影响用户使用。8、请及时切走业务。","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-16 16:44:45","proposer":"","upvote":1,"ostatus":"2","handle_person":"lingjing"},{"id":"1","title":"test001","type":"服务报障","relate_service":"13","content":"ccc","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-13 10:19:18","proposer":"","upvote":1,"ostatus":"2","handle_person":"lingjing"}]';

// 网络服务台模拟数据2
$data3 = '[{"id":"45","title":"ates","type":"服务报障","relate_service":"9","content":"<p>fdaf</p>","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-20 16:27:38","proposer":"","upvote":0,"ostatus":"1","handle_person":"liuzhibin02"},{"id":"28","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-16 14:57:10","proposer":"","upvote":0,"ostatus":"1","handle_person":"liuzhibin02"},{"id":"27","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-16 14:55:17","proposer":"","upvote":0,"ostatus":"1","handle_person":"liuzhibin02"},{"id":"26","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"未处理","priority":"普通","create_time":"2017-06-16 14:54:59","proposer":"","upvote":0,"ostatus":"0","handle_person":"lingjing"},{"id":"25","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"未处理","priority":"普通","create_time":"2017-06-16 14:50:47","proposer":"","upvote":0,"ostatus":"0","handle_person":"[无]"},{"id":"24","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"未处理","priority":"普通","create_time":"2017-06-16 14:49:25","proposer":"","upvote":0,"ostatus":"0","handle_person":"[无]"},{"id":"23","title":"BGW","type":"服务报障","relate_service":"12","content":"网络设备异常。运营商电路切断。导致异常。请求紧急处理","creator":"liuzhibin02","status":"未处理","priority":"紧急","create_time":"2017-06-16 14:41:51","proposer":"","upvote":0,"ostatus":"0","handle_person":"[无]"},{"id":"15","title":"a","type":"服务报障","relate_service":"40","content":"a","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-14 13:35:22","proposer":"","upvote":0,"ostatus":"1","handle_person":"[无]"},{"id":"2","title":"test001","type":"服务咨询","relate_service":"13","content":"cccfff","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"0000-00-00 00:00:00","proposer":"","upvote":1,"ostatus":"1","handle_person":"zhanghenghua"}]';

// 树组件数据
$data4 = '[{"name":"0-0","key":"0-0","isLeaf":false,"disableCheckbox":false,"disabled":false,"type":"leval1","children":[{"name":"0-0-0","key":"0-0-0","isLeaf":true,"disabled":true,"type":"leval2"},{"name":"0-0-1","key":"0-0-1","disableCheckbox":false,"disabled":false,"type":"leval2","children":[{"name":"0-0-1-0","key":"0-0-1-0","disableCheckbox":true,"disabled":false,"type":"leval3"},{"name":"0-0-1-1","key":"0-0-1-1","disableCheckbox":false,"disabled":false,"type":"leval3"}]}]},{"name":"0-1","key":"0-1","isLeaf":false,"disableCheckbox":false,"disabled":false,"type":"leval1","children":[{"name":"0-1-0","key":"0-1-0","type":"leval2","disableCheckbox":false,"disabled":false,"children":[]}]}]';

// echarts 数据
$data5 = "[5, 20, 36, 10, 10, 20]";

$datas = $data1;

$type = $_REQUEST['type'];
if (isset($type) && $type == 'pendding') {
    $datas = $data2;
} else if (isset($type) && $type == 'finished') {
    $datas = $data3;
} else if (isset($type) && $type == 'tree') {
    $datas = $data4;
} else if (isset($type) && $type == 'echarts') {
    $basic = json_decode($data5);
    $datas = [];
    shuffle($basic);
    $datas[] = ["data" => $basic];
    shuffle($basic);
    $datas[] = ["data" => $basic];
    $datas = json_encode($datas);
}

$sleep = $_REQUEST['sleep'];
// 默认延迟 150ms
isset($sleep) ? sleep($sleep) : usleep(150000);

$originData = json_decode($datas);
$result = $originData;
$search = $_REQUEST['search'];
$searchName = $_REQUEST['name'];
// 根据名称搜索
if (isset($searchName) && !empty($searchName)) {
    $result = [];
    foreach ($originData as $row) {
        if ($row->name == $searchName) {
            array_push($result, $row);
        }
    }
}
// 模糊搜索
if (isset($search) && !empty($search)) {
    $result = [];
    foreach ($originData as $row) {
        if (stristr(json_encode($row), $search) !== false) {
            array_push($result, $row);
        }
    }
}

$page = $_REQUEST['page'];
$size = $_REQUEST['size'];
$data = $result;
if (isset($page) && isset($size)) {
    $offset = ($page - 1) * $size;
    $data = array_slice($result, $offset, $size);
}

echo json_encode(array(
    'total'=>count($result),
    'status'=>0,
    'data'=>$data
));
?>
