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
                        Router: 'router',
                        App: 'router-app',
                        Page1: 'router-page.1',
                        Page2: 'router-page.2'
                    },
                    showLoading: false
                },
                components: {
                    loading: {
                        delay: 500,
                        size: 'small'
                    },
                    iframe: {
                        showLoading: false
                    }
                }
            });
            UF.init('Router', 'demo');
        </script>
    </body>
</html>
