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

            const app = {
                type: 'div',
                style: {background: '#ddd', padding: '35px'}
            };
            const App = UF.init(app);
            const card = {
                type: 'card',
                title: 'Card title',
                bordered: false,
                loading: true
            }
            const Card = UF.init(card);

            const route = {
                // breadcrumbName: '首页',
                key: '/',
                path: '/',
                component: App,
                index: 'card',
                children: [
                    {
                        // breadcrumbName: '卡片',
                        key: 'card',
                        path: 'card',
                        component: Card
                    }
                ]
            };

            const page = {
                type: 'router',
                // history: 'hash',
                route: route
            };

            UF.init(page, 'demo');
        </script>
    </body>
</html>
