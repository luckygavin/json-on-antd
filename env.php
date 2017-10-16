<?php
if (strpos($_SERVER['HTTP_HOST'], 'uf.baidu.com') !== false || strpos($_SERVER['REQUEST_URI'], '/uf-online/') !== false) {
    defined('ENV') || define('ENV', 'prod');
} else {
    defined('ENV') || define('ENV', 'dev');
}

$json = json_decode(file_get_contents(__DIR__ . '/package.json'));
// 默认和 package.json 的 版本相同
if ($_GET['v']) {
    $_V = $_GET['v'];
    $_VERSION = $_GET['v'];
} else {
    $_V = $json->version;
    $_VERSION = implode('.', array_slice(explode('.', $_V), 0, 2));
}