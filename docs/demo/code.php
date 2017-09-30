<?php
define(ENV, 'dev');
// define(ENV, 'prod');

// 默认和 package.json 的 版本相同
$json = json_decode(file_get_contents('../../package.json'));
$v = $json->version;
$version = implode('.', array_slice(explode('.', $v), 0, 2));

if (ENV == 'dev') {
?>

<link rel="stylesheet" href="../../dist/css/theme.min.css" />
<link rel="stylesheet" href="../../dist/css/uf_v<?php echo $version . '.css?v=' . $v; ?>" />
<script src="../../dist/js/dll.js"></script>
<script src="../../dist/js/antd.js"></script>
<script src="../../dist/js/uf_v<?php echo $version . '.js?v=' . $v; ?>"></script>

<?php
} else {
?>

<link rel="stylesheet" href="http://uf.baidu.com/css/theme.min.css" />
<link rel="stylesheet" href="http://uf.baidu.com/css/uf_v<?php echo $version . '.css?v=' . $v; ?>" />
<script src="http://uf.baidu.com/dist/dll.min.js"></script>
<script src="http://uf.baidu.com/dist/antd.min.js"></script>
<script src="http://uf.baidu.com/dist/uf_v<?php echo $version . '.js?v=' . $v; ?>.js"></script>

<?php
}
?>


