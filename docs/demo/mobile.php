<?php
include '../../env.php';
$suffix = '';
$root = '../../';
?>
<!DOCTYPE html>
<html>
    <head>
        <title>UF-Mobile - 移动端解决方案</title>
        <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover" />
        <meta charset = "utf-8">
        <link rel="shortcut icon" href="<?php echo $root;?>public/img/favicon.ico"/>
        <style>
            #container {padding: 0px 2px;}
            .flex-demo-block {
                margin: 5px;
                background-color: #ebebef;
                color: #bbb;
                text-align: center;
                height: 30px;
                line-height: 30px;
                width: 100%;
            }
            .my-drawer {
                position: relative;
                overflow: auto;
                -webkit-overflow-scrolling: touch;
            }
            .my-drawer .am-drawer-sidebar {
                background-color: #fff;
                overflow: auto;
                -webkit-overflow-scrolling: touch;
            }
            .my-drawer .am-drawer-sidebar .am-list {
                width: 300px;
                padding: 0;
            }
        </style>
        <?php if (ENV == 'dev') { ?>
            <link rel="stylesheet" type="text/css" href="<?php echo $root;?>dist/<?php echo $_VERSION;?>/theme-mobile.css<?php echo $_FIXED;?>"/>
            <script src="<?php echo $root;?>dist/<?php echo $_VERSION;?>/dll-mobile.js<?php echo $_FIXED;?>"></script>
            <script src="<?php echo $root;?>dist/<?php echo $_VERSION;?>/antd.js<?php echo $_FIXED;?>"></script>
            <script src="<?php echo $root;?>dist/<?php echo $_VERSION;?>/antd-mobile.js<?php echo $_FIXED;?>"></script>
            <script src="<?php echo $root;?>dist/<?php echo $_VERSION;?>/uf-mobile.js<?php echo $_FIXED;?>"></script>
        <?php } else { ?>
            <link rel="stylesheet" type="text/css" href="<?php echo $root;?>v/<?php echo $_VERSION;?>/theme-mobile.css<?php echo $_FIXED;?>"/>
            <script src="<?php echo $root;?>v/<?php echo $_VERSION;?>/dll-mobile.min.js<?php echo $_FIXED;?>"></script>
            <script src="<?php echo $root;?>v/<?php echo $_VERSION;?>/antd.min.js<?php echo $_FIXED;?>"></script>
            <script src="<?php echo $root;?>v/<?php echo $_VERSION;?>/antd-mobile.js<?php echo $_FIXED;?>"></script>
            <script src="<?php echo $root;?>v/<?php echo $_VERSION;?>/uf-mobile.js<?php echo $_FIXED;?>"></script>
        <?php }?>
    </head>
    <body>
        <div id="container"></div>
        <script src="<?php echo $root;?>public/<?php echo $_VERSION;?>/demo.js<?php echo $_FIXED;?>"></script>
    </body>
</html>
