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
            // document.domain = 'baidu.com';
            UF.config({
                modules: {
                    baseUrl: 'config/',
                    paths: {
                        Router: 'router',
                        App: 'router-app',
                        Page1: 'router-page.1',
                        Page2: 'router-page.2',
                        Theme: 'router-theme',
                        Tab1: 'tab1',
                        Tab2: 'tab2',
                        Tab3: 'tab3'
                    },
                    showLoading: ['Page2'],
                    // 可以防止缓存
                    urlArgs: 'suffix=' + Date.now()
                },
                components: {
                    // loading: {
                    //     delay: 500,
                    //     size: 'small'
                    // },
                    pagination: {
                        current: 1,
                        total: 500,
                        pageSize: 50,
                        showQuickJumper: true,
                        showSizeChanger: true,
                        pageSizeOptions: [
                            '10',
                            '25',
                            '50'
                        ]
                    },
                    iframe: {
                        showLoading: false
                    }
                }
            });
            UF.init('Router', '#demo');
        </script>
    </body>
</html>
