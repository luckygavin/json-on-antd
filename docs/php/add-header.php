<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    return;
}

$sleep = $_REQUEST['sleep'];
// 默认延迟 300ms
if (isset($sleep)) {
    sleep($sleep);
} else {
    usleep(300000);
}
