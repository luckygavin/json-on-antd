<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <?php include_once('./code.php') ?>
        <title>待路由的页面示例</title>
    </head>
    <body>
        <div id="demo"></div>
        <!-- <div id="demo" style="height: 500px;"></div> -->
        <script>
            document.domain = 'baidu.com';
            UF.config({
                // http://requirejs.org/docs/api.html#config
                modules: {
                    baseUrl: 'config/',
                    paths: {
                        App: 'router-config',
                        Card: 'router-config.1',
                        Card3: 'router-config.2'
                    }
                }
            });
            UF.init('App', 'demo');
        </script>
    </body>
</html>
