<?php
include 'env.php';

// $suffix = '.min';
$suffix = '';
?>
<!DOCTYPE html>
<html>
    <head>
        <title>UF 2.0 - 配置化框架</title>
        <meta name="viewporti" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable">
        <meta charset = "utf-8">
        <link rel="icon" href="public/img/logo.svg" type="image/x-icon" rel="bookmark" />
        <link rel="stylesheet" href="http://uf.baidu.com/fonts/css/font-awesome.min.css">
        <link rel="stylesheet" href="public/css/markdown.css" />
        <link rel="stylesheet" href="public/highlight/prism.css" />

        <?php if (ENV == 'dev') { ?>
            <link rel="stylesheet" href="dist/css/theme.min.css?v=<?php echo $_V;?>" />
            <script src="dist/js/dll.js?v=<?php echo $_V;?>"></script>
            <script src="dist/js/antd.js?v=<?php echo $_V;?>"></script>
        <?php } else { ?>
            <link rel="stylesheet" href="http://uf.baidu.com/css/theme.min.css?v=<?php echo $_V;?>" />
            <script src="http://uf.baidu.com/dist/dll.min.js?v=<?php echo $_V;?>"></script>
            <script src="http://uf.baidu.com/dist/antd.min.js?v=<?php echo $_V;?>"></script>
        <?php }?>

        <link rel="stylesheet" href="public/css/doc_v<?php echo $_VERSION . '.min.css?v=' . $_V; ?>" />
        <script src="public/highlight/prism.js" data-manual></script>
    </head>
    <body>
        <div id="container"></div>
        <script src="public/js/doc_v<?php echo $_VERSION . $suffix . '.js?v=' . $_V; ?>"></script>    
        <script src="http://uf.baidu.com/third_party/jquery/jquery-3.2.1.min.js"></script>
        <script type="text/javascript">
            // makdown代码收/放
            $(document).on('click', 'pre', function(e) {
                if (e.target == e.currentTarget) {
                    var code = $(e.target).children('code')[0];
                    if (code) {
                        $(code).css('max-height', $(code).css('max-height') !== 'none' ? 'none' : '430px');
                    }
                }
            });
        </script> 
    </body>
</html>
