<?php
include __DIR__ . '/../../env.php';

if (ENV == 'dev') {
?>

<link rel="stylesheet" href="../../dist/css/theme.min.css?v=<?php echo $_V;?>" />
<link rel="stylesheet" href="../../dist/css/uf_v<?php echo $_VERSION . '.css?v=' . $_V; ?>" />
<script src="../../dist/js/dll.js?v=<?php echo $_V;?>"></script>
<script src="../../dist/js/antd.js?v=<?php echo $_V;?>"></script>
<script src="../../dist/js/uf_v<?php echo $_VERSION . '.js?v=' . $_V; ?>"></script>

<?php
} else {
?>

<link rel="stylesheet" href="http://uf.baidu.com/css/theme.min.css?v=<?php echo $_V;?>" />
<link rel="stylesheet" href="http://uf.baidu.com/css/uf_v<?php echo $_VERSION . '.css?v=' . $_V; ?>" />
<script src="http://uf.baidu.com/dist/dll.min.js?v=<?php echo $_V;?>"></script>
<script src="http://uf.baidu.com/dist/antd.min.js?v=<?php echo $_V;?>"></script>
<script src="http://uf.baidu.com/dist/uf_v<?php echo $_VERSION . '.js?v=' . $_V; ?>"></script>

<?php
}
?>

<style>html, body {height: auto !important;}</style>
