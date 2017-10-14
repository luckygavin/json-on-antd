<?php
$json = json_decode(file_get_contents('./package.json'));
// 默认和 package.json 的 版本相同
if ($_GET['v']) {
    $v = $_GET['v'];
    $version = $_GET['v'];
} else {
    $v = $json->version;
    $version = implode('.', array_slice(explode('.', $v), 0, 2));
}
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
        <link rel="stylesheet" href="dist/css/theme.css?v=<?php echo $v;?>" />
        <link rel="stylesheet" href="public/css/doc_v<?php echo $version . '.min.css?v=' . $v; ?>" />

        <link rel="stylesheet" href="http://uf.baidu.com/fonts/css/font-awesome.min.css">
        <link rel="stylesheet" href="public/css/markdown.css" />
        <link rel="stylesheet" href="public/highlight/prism.css" />
 
        <script src="public/highlight/prism.js" data-manual></script>
    </head>
    <body>
        <div id="container"></div>
        <script src="dist/js/dll.js?v=<?php echo $v;?>"></script> 
        <script src="dist/js/antd.js?v=<?php echo $v;?>"></script>   
        <!-- <script src="dist/js/antd.min.js"></script>   -->

        <script src="public/js/doc_v<?php echo $version . $suffix . '.js?v=' . $v; ?>"></script>    

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
