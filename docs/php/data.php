<?php
include('add-header.php');

// 机房列表模拟数据
$data1 = '[{"id":1,"name":"TC","object_table":"idc_info","object_id":"2","description":"\u571f\u57ce\u673a\u623f \u5317\u4eac\u5e02\u671d\u9633\u533a\u88d5\u6c11\u4e2d\u8def\u4e593\u53f7A\u5ea7  7\u5c42","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":2,"name":"JX","object_table":"idc_info","object_id":"4","description":"\u9152\u4ed9\u6865\u673a\u623f \u5317\u4eac\u5e02\u671d\u9633\u533a\u9152\u4ed9\u6865\u8def14\u53f7\u5146\u7ef4\u5de5\u4e1a\u56edD\u533a1\u697c2\u95e8\u4e09\u5c42\u5317\u4eac\u7535\u4fe1\u6570\u636e\u4e2d\u5fc33\u5c42","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":9,"name":"DB","object_table":"idc_info","object_id":"25","description":"\u6570\u5b57\u5317\u4eac \u5317\u4eac\u5e02\u671d\u9633\u533a\u5317\u8fb0\u897f\u8def12\u53f7\u6570\u5b57\u5317\u4eac\u5927\u53a6C\u5ea76\u5c42","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":11,"name":"BB","object_table":"idc_info","object_id":"27","description":"\u767e\u5ea6\u5927\u53a6 \u5317\u4eac\u5e02\u6d77\u6dc0\u533a\u4e0a\u5730\u5341\u885710\u53f7\u767e\u5ea6\u5927\u53a6\u5317\u95e8","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":83,"name":"CDN","object_table":"idc_info","object_id":"146","description":"\u767e\u5ea6\u6240\u6709CDN\u865a\u62df\u673a\u623f\uff0c\u4f9b\u9884\u7b97\u4f7f\u7528","zone":"China","net_area":"beijing","area_id":"6","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":""},{"id":84,"name":"YF","object_table":"idc_info","object_id":"147","description":"\u6c38\u4e30\u673a\u623f \u5317\u4eac\u5e02\u6d77\u6dc0\u533a\u6c38\u4e30\u8def\u5317\u6e05\u8def\u4ea4\u53e3\u5317400\u7c73\uff0c\u4e30\u79c0\u4e1c\u8def\u4e2d\u56fd\u7535\u4fe1\u5927\u697c","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":99,"name":"SZJJH","object_table":"idc_info","object_id":"167","description":"\u82cf\u5dde\u5de5\u4e1a\u56ed\u91d1\u9e21\u6e56\u8def\u4e0e\u6d77\u68e0\u8857\u4ea4\u53c9\u53e3","zone":"China","net_area":"huadong","area_id":"2","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u4e1c"},{"id":104,"name":"SZWG","object_table":"idc_info","object_id":"174","description":"\u6606\u5c71\u5e02\u82b1\u6865\u7ecf\u6d4e\u6280\u672f\u5f00\u53d1\u533a\u4e1c\u57ce\u5927\u9053\u4e07\u56fd\u6570\u636e\u673a\u623f","zone":"China","net_area":"huadong","area_id":"2","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u4e1c"},{"id":111,"name":"DBL","object_table":"idc_info","object_id":"181","description":"\u5317\u4eac\u79fb\u52a8\u5927\u767d\u697c \u5317\u4eac\u5e02\u5927\u5174\u533a\u56e2\u6cb3\u8def8\u53f7\u5317\u4eac\u79fb\u52a8\u5927\u767d\u697c\u673a\u623f","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":115,"name":"M1","object_table":"idc_info","object_id":"186","description":"\u767e\u5ea6\u9152\u4ed9\u6865\u81ea\u5efa\u673a\u623f \u5317\u4eac\u5e02\u671d\u9633\u533a\u9152\u4ed9\u6865\u5317\u8def\u4e5d\u53f7","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"1","region":"\u534e\u5317"},{"id":118,"name":"CQ01","object_table":"idc_info","object_id":"189","description":"\u5317\u4eac\u6b21\u6e20\u7535\u4fe1\u673a\u623f101\u3001102\u3001103\u3001204 \u5317\u4eac\u5e02\u901a\u5dde\u533a\u5149\u7535\u4e00\u4f53\u5316\u57fa\u5730\u661f\u5149\u4e8c\u8857\u75322\u53f7","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":122,"name":"CQ02","object_table":"idc_info","object_id":"193","description":"\u5317\u4eac\u5e02\u901a\u5dde\u533a\u5149\u7535\u4e00\u4f53\u5316\u57fa\u5730\u5174\u5149\u4e8c\u8857\u75322\u53f72\u53f7\u697c\uff0c\u8054\u901a\u6b21\u6e20\u673a\u623f","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":123,"name":"HZ01","object_table":"idc_info","object_id":"194","description":"\u676d\u5dde\u5e02\u4f59\u676d\u533a\u94b1\u6c5f\u5f00\u53d1\u533a\u5eb7\u6cf0\u8def185\u53f7\u5609\u4ed5\u5382\u623f7\u53f7\u697c","zone":"China","net_area":"huadong","area_id":"2","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u4e1c"},{"id":124,"name":"NJ01","object_table":"idc_info","object_id":"195","description":"\u5357\u4eac\u5e02\u6d66\u53e3\u533a\u5927\u6865\u5317\u8def77\u53f7\u5357\u4eac\u7535\u4fe1\u6cf0\u5c71\u65b0\u6751\u901a\u8baf\u697c","zone":"China","net_area":"huadong","area_id":"2","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u4e1c"},{"id":128,"name":"ST01","object_table":"idc_info","object_id":"199","description":"\u8fd0\u8425\u673a\u623f_\u534e\u5317\u5317\u4eac_\u79fb\u52a8_\u4e09\u53f0\u673a\u623f:\u5317\u4eac\u5e02\u671d\u9633\u533a\u5317\u4eac\u65e0\u7ebf\u77ed\u6ce2\u901a\u4fe1\u5c407B\u697c2\u5c42","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":141,"name":"QD01","object_table":"idc_info","object_id":"213","description":"\u8054\u901a_\u5c71\u4e1c_\u9752\u5c9b\uff08\u9752\u5c9b\u5e02\u5d02\u5c71\u533a\u682a\u6d32\u8def168\u53f7\uff09","zone":"China","net_area":"beijing","area_id":"6","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":142,"name":"US01","object_table":"idc_info","object_id":"214","description":"2012\u5e7411\u670828\u65e5\u65b0\u589e\u7f8e\u56fd\u673a\u623f\u8282\u70b9","zone":"America","net_area":"America","area_id":"8","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u6d77\u5916"},{"id":150,"name":"LD02","object_table":"idc_info","object_id":"222","description":"\u65b0\u5efa\u673a\u623fLD02;","zone":"London","net_area":"London","area_id":"9","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u6d77\u5916"},{"id":151,"name":"SYSLAB","object_table":"idc_info","object_id":"223","description":"\u5317\u4eac\u5e02\u6d77\u6dc0\u533a\u4e1c\u5317\u65fa\u897f\u8def8\u53f7\u4e2d\u5173\u6751\u8f6f\u4ef6\u56ed\u66d9\u5149\u5927\u53a61\u5c42","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"65536","budget_status":"yes","self_build":"0","region":""},{"id":152,"name":"TH01","object_table":"idc_info","object_id":"224","description":"\u65b0\u589e\u6cf0\u56fd\u673a\u5668TH01\uff1b","zone":"HongKong","net_area":"HongKong","area_id":"7","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u6d77\u5916"},{"id":166,"name":"NJ02","object_table":"idc_info","object_id":"238","description":"\u5357\u4eac\u51e4\u51f0\u673a\u623f\uff0c\u5357\u4eac\u5e02\u4e0b\u5173\u533a\u5f20\u738b\u5e9988\u53f7","zone":"China","net_area":"huadong","area_id":"2","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u4e1c"},{"id":167,"name":"NMG01","object_table":"idc_info","object_id":"239","description":"\u4e2d\u56fd\u7535\u4fe1\u5185\u8499\u53e4\u4e91\u8ba1\u7b97\u4e2d\u5fc3\uff0c\u5185\u8499\u53e4\u547c\u548c\u6d69\u7279\u5e02\u548c\u6797\u683c\u5c14\u53bf\u91d1\u76db\u8def33\u516c\u91cc\u5904","zone":"China","net_area":"beijing","area_id":"4","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":168,"name":"ID01","object_table":"idc_info","object_id":"240","description":"\u5370\u5c3c\u673a\u623f","zone":"HongKong","net_area":"HongKong","area_id":"7","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u6d77\u5916"},{"id":169,"name":"BR01","object_table":"idc_info","object_id":"241","description":"\u5df4\u897fIDC\u673a\u623f\u65b0\u5efa","zone":"America","net_area":"America","area_id":"8","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u6d77\u5916"},{"id":173,"name":"CP01","object_table":"idc_info","object_id":"245","description":"\u7535\u4fe1\u660c\u5e73\u672a\u6765\u79d1\u6280\u57ce","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":189,"name":"YQ01","object_table":"idc_info","object_id":"261","description":"\u5c71\u897f\u7701\u9633\u6cc9\u5e02\u5f00\u53d1\u533a\u4e49\u767d\u8def\u767e\u5ea6\u4e91\u8ba1\u7b97\u4e2d\u5fc3","zone":"China","net_area":"beijing","area_id":"3","ip_conversion_rule":"128","budget_status":"yes","self_build":"1","region":"\u534e\u5317"},{"id":190,"name":"SH01","object_table":"idc_info","object_id":"262","description":"\u4e0a\u6d77\u5e02\u6d66\u4e1c\u65b0\u533a\u5b81\u6865\u8def600\u53f7\u79fb\u52a8\u91d1\u6865\u673a\u623f","zone":"China","net_area":"huadong","area_id":"2","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u4e1c"},{"id":191,"name":"NMG02","object_table":"idc_info","object_id":"263","description":"\u547c\u548c\u6d69\u7279\u5e02\u65b0\u57ce\u533a\u9e3f\u76db\u5de5\u4e1a\u56ed\u533a\u8054\u901a\u897f\u5317\u57fa\u5730","zone":"China","net_area":"beijing","area_id":"4","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u5317"},{"id":196,"name":"EG01","object_table":"idc_info","object_id":"268","description":"\u57c3\u53ca\u673a\u623f","zone":"London","net_area":"London","area_id":"9","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":""},{"id":222,"name":"NB01","object_table":"idc_info","object_id":"294","description":"\u5b81\u6ce2\u51cc\u4e91\u673a\u623f \u6d59\u6c5f\u7701\u5b81\u6ce2\u5e02\u9ad8\u65b0\u533a\u51cc\u4e91\u8def1177\u53f7\u51cc\u4e91\u4ea7\u4e1a\u56ed8\u53f7\u697c","zone":"China","net_area":"huadong","area_id":"2","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u4e1c"},{"id":225,"name":"BR02","object_table":"idc_info","object_id":"297","description":"BR02","zone":"America","net_area":"America","area_id":"8","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":""},{"id":241,"name":"NJ03","object_table":"idc_info","object_id":"313","description":"\u6c5f\u82cf\u7535\u4fe1\u4e8c\u957f\u5c40\u673a\u623f\u3001\u5357\u4eac\u5e02\u6c5f\u4e1c\u4e2d\u8def49\u53f7","zone":"China","net_area":"huadong","area_id":"2","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u4e1c"},{"id":245,"name":"HKG01","object_table":"idc_info","object_id":"317","description":"EQUINIX 6\/F, 1 Wang Wo Tsai Street, Tsuen Wan, N.T., Hong Kong","zone":"HongKong","net_area":"HongKong","area_id":"7","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":""},{"id":258,"name":"HKG02","object_table":"idc_info","object_id":"330","description":"2015\u5e74\u65b0\u5efa\uff1b6\/F, 1 Wang Wo Tsai St; Tsuen Wan, Hong Kong\uff1b\u9999\u6e2f\u8343\u6e7e\u6a2a\u7a9d\u4ed4\u88571\u53f76\u697c","zone":"HongKong","net_area":"HongKong","area_id":"7","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u6d77\u5916"},{"id":259,"name":"SZM3B","object_table":"idc_info","object_id":"331","description":"\u6df1\u5733\u65b0\u5927\u53a6\u8d85\u6838\u673a\u623f","zone":"China","net_area":"huanan","area_id":"5","ip_conversion_rule":"128","budget_status":"yes","self_build":"1","region":"\u534e\u5357"},{"id":261,"name":"GZHXY","object_table":"idc_info","object_id":"333","description":"\u5e7f\u5dde\u5e02\u9ec4\u57d4\u533a\u79d1\u4e30\u8def31\u53f7 \u534e\u5357\u65b0\u6750\u6599\u521b\u65b0\u56ed G3\u680b","zone":"China","net_area":"huanan","area_id":"5","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u5357"},{"id":270,"name":"GZNS","object_table":"idc_info","object_id":"342","description":"\u5e7f\u5dde\u5e02\u5357\u6c99\u533a\u5e73\u8c26\u56fd\u9645\u73b0\u4ee3\u4ea7\u4e1a\u56edB\u3001C\u3001D\u680b","zone":"China","net_area":"huanan","area_id":"5","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u5357"},{"id":280,"name":"BJYZ","object_table":"idc_info","object_id":"352","description":"\u5317\u4eac\u5e02\u5357\u516d\u73af\u592a\u548c\u6865\u5357","zone":"China","net_area":"beijing","area_id":"1","ip_conversion_rule":"128","budget_status":"yes","self_build":"1","region":"\u534e\u5317"},{"id":289,"name":"SIN01","object_table":"idc_info","object_id":"361","description":"20A Ayer Rajah Crescent, Singapore 139964 \uff08\u65b0\u52a0\u5761\u673a\u623f\uff09","zone":"HongKong","net_area":"HongKong","area_id":"7","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u6d77\u5916"},{"id":313,"name":"SFO01","object_table":"idc_info","object_id":"385","description":"1360 Kifer Road, Ste B Sunnyvale Ca 94086","zone":"America","net_area":"America","area_id":"8","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u6d77\u5916"},{"id":4579,"name":"SZTH","object_table":"idc_info","object_id":"469","description":"\u6c5f\u82cf\u7701\u82cf\u5dde\u5e02\u91d1\u6c99\u6c5f\u8def\u548c\u5415\u6881\u5c71\u8def\u4ea4\u53c9\u53e3\u4e1c\u5317\u89d2\u3010\u592a\u6e56\u673a\u623f\u3011","zone":"China","net_area":"huadong","area_id":"2","ip_conversion_rule":"128","budget_status":"yes","self_build":"0","region":"\u534e\u4e1c"}]';

// 网络服务台模拟数据
$data2 = '[{"id":"49","title":"test工单统计","type":"服务报障","relate_service":"9","content":"<p><strong>test工单统计</strong></p>","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-22 11:04:25","proposer":"","upvote":0,"ostatus":"2","handle_person":"liuzhibin02"},{"id":"46","title":"等发达","type":"服务报障","relate_service":"9","content":"<p>d&#39;f&#39;d&#39;f</p>","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-20 16:29:46","proposer":"","upvote":1,"ostatus":"2","handle_person":"liuzhibin02"},{"id":"36","title":"ddd","type":"服务报障","relate_service":"9","content":"","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-17 00:10:20","proposer":"","upvote":0,"ostatus":"2","handle_person":"liuzhibin02"},{"id":"31","title":"M1机房交换机故障网络抖动严重业务及时迁移和切走","type":"服务报障","relate_service":"14","content":"1、外网网络抖动，严重影响用户使用。请及时切走业务。2、外网网络抖动，严重影响用户使用。请及时切走业务。3、外网网络抖动，严重影响用户使用。请及时切走业务。4、外网网络抖动，严重影响用户使用。请及时切走业务。5、外网网络抖动，严重影响用户使用。请及时切走业务。6、外网网络抖动，严重影响用户使用。7、请及时切走业务。外网网络抖动，严重影响用户使用。8、请及时切走业务。","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-16 16:44:45","proposer":"","upvote":1,"ostatus":"2","handle_person":"lingjing"},{"id":"1","title":"test001","type":"服务报障","relate_service":"13","content":"ccc","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-13 10:19:18","proposer":"","upvote":1,"ostatus":"2","handle_person":"lingjing"}]';

// 网络服务台模拟数据2
$data3 = '[{"id":"45","title":"ates","type":"服务报障","relate_service":"9","content":"<p>fdaf</p>","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-20 16:27:38","proposer":"","upvote":0,"ostatus":"1","handle_person":"liuzhibin02"},{"id":"28","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-16 14:57:10","proposer":"","upvote":0,"ostatus":"1","handle_person":"liuzhibin02"},{"id":"27","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-16 14:55:17","proposer":"","upvote":0,"ostatus":"1","handle_person":"liuzhibin02"},{"id":"26","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"未处理","priority":"普通","create_time":"2017-06-16 14:54:59","proposer":"","upvote":0,"ostatus":"0","handle_person":"lingjing"},{"id":"25","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"未处理","priority":"普通","create_time":"2017-06-16 14:50:47","proposer":"","upvote":0,"ostatus":"0","handle_person":"[无]"},{"id":"24","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"未处理","priority":"普通","create_time":"2017-06-16 14:49:25","proposer":"","upvote":0,"ostatus":"0","handle_person":"[无]"},{"id":"23","title":"BGW","type":"服务报障","relate_service":"12","content":"网络设备异常。运营商电路切断。导致异常。请求紧急处理","creator":"liuzhibin02","status":"未处理","priority":"紧急","create_time":"2017-06-16 14:41:51","proposer":"","upvote":0,"ostatus":"0","handle_person":"[无]"},{"id":"15","title":"a","type":"服务报障","relate_service":"40","content":"a","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-14 13:35:22","proposer":"","upvote":0,"ostatus":"1","handle_person":"[无]"},{"id":"2","title":"test001","type":"服务咨询","relate_service":"13","content":"cccfff","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"0000-00-00 00:00:00","proposer":"","upvote":1,"ostatus":"1","handle_person":"zhanghenghua"}]';


$datas = $data1;

$type = $_REQUEST['type'];
if (isset($type) && $type == 'pendding') {
    $datas = $data2;
} else if (isset($type) && $type == 'finished') {
    $datas = $data3;
}


// 300ms
usleep(300000);

$result = json_decode($datas);

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
