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
        <link rel="shortcut icon" href="public/img/favicon.ico"/>
        <link rel="stylesheet" href="http://uf.baidu.com/fonts/css/font-awesome.min.css">
        <link rel="stylesheet" href="public/css/markdown.css" />
        <link rel="stylesheet" href="public/highlight/prism.css" />

        <?php if (ENV == 'dev') { ?>
            <?php if (in_array($_VERSION, ['0.2.2', '0.2.1', '0.2'])) { ?>
                <!-- 老版本需要 -->
                <link rel="stylesheet" href="dist/css/theme.min.css?v=<?php echo $_VERSION;?>" />
            <?php } ?>
            <script src="dist/<?php echo $_VERSION;?>/dll.js<?php echo $_FIXED;?>"></script>
            <script src="dist/<?php echo $_VERSION;?>/antd.js<?php echo $_FIXED;?>"></script>
        <?php } else { ?>
            <?php if (in_array($_VERSION, ['0.2.2', '0.2.1', '0.2'])) { ?>
                <link rel="stylesheet" href="css/theme.min.css?v=<?php echo $_VERSION;?>" />
            <?php } ?>
            <script src="v/<?php echo $_VERSION;?>/dll.min.js<?php echo $_FIXED;?>"></script>
            <script src="v/<?php echo $_VERSION;?>/antd.js<?php echo $_FIXED;?>"></script>
        <?php }?>
        <link rel="stylesheet" href="public/<?php echo $_VERSION; ?>/doc.min.css<?php echo $_FIXED;?>" />
        <script src="public/highlight/prism.js" data-manual></script>
    </head>
    <body>
        <div id="container"></div>
        <script src="http://uf.baidu.com/third_party/jquery/jquery-3.2.1.min.js"></script>
        <script src="public/js/qrcode.min.js"></script>

        <script src="public/<?php echo $_VERSION; ?>/doc.js<?php echo $_FIXED;?>"></script>
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
            // 双击复制链接
            var copyFunc = function(e) {
                // if (window.location.href.indexOf('8000')) {
                //     window.location.hash += '/' + e.target.id;
                // }
                console.log(e.target.id);
            };
            $(document).on('dblclick', 'h3', copyFunc);
            $(document).on('dblclick', 'h4', copyFunc);
            $(document).on('dblclick', 'h5', copyFunc);
            // 捕获tab事件，在输入框中，tab表示4个空格
            document.onkeydown = function(e) {
                var key = e.which;
                var text = '    ';
                if(key == 9 && e.target.tagName === 'CODE' && e.target.contentEditable === 'true'){
                    e.preventDefault();
                    var sel = window.getSelection();
                    if (sel.getRangeAt && sel.rangeCount) {
                        var range = sel.getRangeAt(0);
                        range.deleteContents();
                        // Range.createContextualFragment() would be useful here but is
                        // non-standard and not supported in all browsers (IE9, for one)
                        var divNode = document.createElement("div");
                        divNode.innerHTML = text;
                        var frag = document.createDocumentFragment();
                        var node;
                        var lastNode;
                        while ((node = divNode.firstChild)) {
                            lastNode = frag.appendChild(node);
                        }
                        range.insertNode(frag);
                        // Preserve the selection
                        if (lastNode) {
                            range = range.cloneRange();
                            range.setStartAfter(lastNode);
                            range.collapse(true);
                            sel.removeAllRanges();
                            sel.addRange(range);
                        }
                    }
                }
            };
        </script>
        <?php if (ENV == 'dev') { ?>
            <script src="dist/<?php echo $_VERSION;?>/uf.js<?php echo $_FIXED;?>"></script>
        <?php }?>
    </body>
</html>
