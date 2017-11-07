define(function() {
    return [
        {
            type: "menu",
            mode: "horizontal",
            theme: "dark",
            items: [
                {
                    key: "mail",
                    link: '/card',
                    icon: 'mail',
                    title: 'Navigation One'
                },
                {
                    key: "sub",
                    icon: 'setting',
                    title: 'Navigation Two - Submenu',
                    childItems: [
                        {
                            key: "setting:1",
                            link: '/card2',
                            title: 'Option 1'
                        },
                        {
                            key: "setting:2",
                            link: '/card2/card3',
                            title: 'Option 2'
                        }
                    ]
                }
            ]
        },
        {
            type: 'breadcrumb',
            style: {margin: '12px 24px'}
        },
        {
            type: 'div',
            style: {background: '#eee', padding: '35px'},
            childrenHolder: true,
            content: {
                type: 'div',
                style: {background: '#ddd', padding: '25px'}
            }
        }
    ];
});
